---
title: "[译] 深入理解 Python 字典实现过程"
sidebar: auto
date: 2017-03-26 15:37:06
update: 2017-04-17 12:34:56
banner:
tags: [翻译, Python]
categories: [程序语言, Python]
---

> - 原文地址：[Python dictionary, the implementation](https://fengsp.github.io/blog/2017/3/python-dictionary/)
> - 原文作者：[Shipeng Feng](https://twitter.com/_fengsp)
> - 译文出自：[zthxxx's blog](https://blog.zthxxx.me/post/python-dictionary-implementation/)
> - 译者：[zthxxx](https://github.com/zthxxx)
> - 校对者：[Zheaoli](https://github.com/Zheaoli)
> - 注：原文与本译文均基于 **CC BY-NC-SA** 发布

字典是一种内置于 Python 中非常有用的数据类型，总的来说它是一些由键（key）索引的对象，这里的 key 是必须是不可变的。 以下是一个简单的字典用法示例：

<!--more-->

```python
>>> d = {'fengsp': 10, 'amy': 12}
>>> d['fengsp']
10
>>> del d['fengsp']
>>> d.keys()
['amy']
```

通常我们会多次的检索一个值（value），因此通过 key 来检索一个对象的过程必须是个非常快速的操作。对于 CPython 本身，多种语法特性都是在字典的帮助下支持的，例如，类实例就是使用字典来储存实例属性，可见字典的性能至关重要。



## PyDictObject 结构体

在 CPython 源码中，字典是一个 C 的结构体， `PyDictObject`：

```C
struct PyDictObject {
    PyObject_HEAD
    Py_ssize_t ma_fill;  /* # Active + # Dummy */
    Py_ssize_t ma_used;  /* # Active */
    Py_ssize_t ma_mask;

    PyDictEntry *ma_table;
    PyDictEntry *(*ma_lookup)(PyDictObject *mp, PyObject *key, long hash);
    PyDictEntry ma_smalltable[PyDict_MINSIZE];
};

typedef struct {
    Py_ssize_t me_hash;
    PyObject *me_key;
    PyObject *me_value;
} PyDictEntry;
```

在此数据结构中的这些字段分别是：

### **ma_fill**

表示所有激活元素（active entry）和虚拟元素（dummy entry）的计数。
如果删除一个 key，这个元素将成为虚拟元素，并且 `ma_fill` 任然保持不变；如果添加一个新的 key 并且新 key 不属于虚拟元素，则 `ma_fill` 增加 1。


### **ma_used**

对象中所有激活元素的计数。如果添加一个新 key，`ma_used` 会增加 1，如果删除一个 key，这个字段将减 1。


### **ma_mask**

哈希表的位掩码，这个表中包含 `ma_mask + 1` 个哈希槽(slot)。
这里储存位掩码而不是大小，因为在查找元素的一个 key 时，使用 `slot = key_hash & mask` 就能直接获得哈希槽序号。


### **ma_table**

一个 `PyDictEntry` 结构体的数组， `PyDictEntry` 包含 key 对象、value 对象，以及 key 的哈希；
这些 key 的哈希作为缓存储存起来，例如，当我们搜索一个 key 时，我们可以通过使用缓存哈希来执行快速比较查找。


### **ma_lookup**

一个用于查找 key 的函数指针。初始化时它被设置为 `lookdict_string`。
`lookdict_string` 假定字典的 key 全是 `PyStringObject` 类型，这是一个使得查找 `StringDictObject` 类型的 key 可以快很多的最佳优化。
如果一个 key 不是 `PyStringObject` 类型，那么`ma_lookup` 将改为一种更慢的普通查找函数。


### **ma_smalltable**

一个有 8 个槽的哈希表（译者注：这里应该是最小 8 个槽，因为 `PyDict_MINSIZE=8`）。
这样小字典也能直接存储在这里，并且不会再调用 `malloc()`。




## 碰撞

两个不同的 key 可能会被散列到相同的槽，这被称之为碰撞。当碰撞发生时，Python 使用 *开放寻址法* 来解决碰撞：如果这个槽不能再容纳这个 key（译者注：指槽中已经有 key），那么就寻找其他槽。

例如，这里有个简单的方法，如果槽 `i` 不能再容纳这个 key，就尝试槽 `i+1` 、`i+2` 等等。对于每条哈希，我们现在定义了能容纳它的所有槽的列表，如果删除其中一个 key，整个列表将会被破坏，这就是这里为什么我们需要虚拟元素（dummy）。

这个简单的开放寻址线性算法会使其退化为线性堆，这将导致性能降低，因为我们每次查找一个 key 都要扫描所有的槽。在实际中，CPython 使用如下算法：

```python
DUMMY = 'dummy'

# 以我的水平并不足够理解算法是如何工作的，
# 最后的结果会覆盖 0 到 ma_mask 之间的所有整数。
def open_addressing_in_cpython(table, key, hash):
    free_slot = None
    perturb = hash
    i = slot_index = hash & ma_mask
    while table[slot_index] is not None and table[slot_index].key != key:
        if table[slot_index].key is DUMMY and free_slot is None:
            free_slot = slot_index
        i = (5 * i + perturb + 1)
        slot_index = i & ma_mask
        perturb >>= 5
    if table[slot_index] is None and free_slot is not None:
        return free_slot
    return slot_index
```



## 哈希表大小

如果我们持续添加 key 到字典中，那很快就会没有足够的空间来装下所有的 keys，现在就需要对哈希表扩容（resize）。

CPython 会在每次添加 key 时检查表大小，如果哈希表已经处于三分之二满（相对于 `ma_fill`），将扩容哈希表。如果字典中包含接近或超过 50000 keys，扩容后新的大小将为 `ma_used * 4`，其他时候扩容后为 `ma_used * 2`。

哈希表不会在从字典中删除大量 keys 时引发调整大小，这意味着哈希表将不会变小。这不是什么大问题，因为大多数时候我们我们只使用字典一段时间，然后就丢弃掉整个字典。如果你真的建立了一个非常大的字典，并且从中删除了许多 keys，那么你应该用剩余的 key 创建一个新的字典。



## 空闲列表

许多字典实例被频繁的创建和销毁，为了减少创建和销毁的次数，一种 `free_dicts` 数组被用于容纳不再使用的字典对象，相当于一个简单的缓存。如果我们需要一个 `PyDictObject` 对象，它将从可用的空闲列表中获取。



## 键共享与有序字典

当字典用作对象属性的容器时，它们会占用比必要更多的内存，因为键是相同的，但它们却被复制到每个实例中了。自 Python 3.6 起，一个属性字典与同一类实例的其他属性字典共用 keys，例如有如下这样的类：

```python
class User(object):
    def __init__(self, username, email):
        self.username = username
        self.email = email
```

这些属性字典将会被像这样存储：

```python
# 这是在属性字典之间共享的
# 并且这也是排序的
keys = [
    (5317300778844242624, 'username'),
    (268341141884068675, 'email'),
]
# this hash table just stores the index to the key entries
# 这个哈希表仅把索引存储到键元素中
# 这是简化的
index_table = [0, None, None, 1, None, None, None, None]

# 这是值
values = ['user01', 'user01@example.com']
```



## 我的想法

CPython 中字典的实现过程是非常简洁明了和易懂的。它的代码优美而高效，所有的参数选择都是经过实践的，例如，其中 `free_dicts` 和 `ma_smalltable` 参数的大小。I love python.
