---
title: "[译] Vue 3 和 Vue 2 中响应式的不同"
sidebar: auto
date: 2018-12-13 01:33:22
banner:
tags: [翻译, Javascript, Vue]
categories: [程序语言, Javascript, Vue]
---

> - 原文地址：[Reactivity in Vue.js 2 vs Vue.js 3](https://blog.cloudboost.io/reactivity-in-vue-js-2-vs-vue-js-3-dcdd0728dcdf)
> - 原文作者：[Denny Headrick](https://twitter.com/dennythecoder)
> - 译文出自：[zthxxx's blog](https://blog.zthxxx.me/post/reactivity-in-vue-2-vs-vue-3/)
> - 译者：[zthxxx](https://github.com/zthxxx)

Vue.js 核心团队已经开始讨论将在 Vue3 中改变的实现了。API 不会有变化，但响应式机制将会有所不用。这意味着什么，对你来说有什么意义？

## Vue 2 的响应式

Vue.js 2 中的响应式是通过 `Object.defineProperty` 方法定义 `getter` 和 `setter` 完成的。我们来把 Vue 中做的事情简化出一个版本。


```js
Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get:function(){
       return value;
    },
    set:function(newValue){
        if(value !== newValue){
           value = newValue;
           tellTheWorldIhaveChanged(); //somebody is watching!
        }
    }
});
```

使用形如这样的结构，当我们每次对属性进行更改时，它都会去通知需要知道这里有变化的观察者和依赖。这个属性的设置（注：指 `defineProperty`）是在我们的初始化模型(注：`this.data`)和我们显式调用  [Vue.set](https://vuejs.org/v2/api/#Vue-set)/[vm.$set](https://vuejs.org/v2/api/#vm-set) 时工作的。

但是，通过这样的设置使下面内容需要额外处理：

### 1. 按索引更新数组元素


```js
data(){
  return {
    names:[]
  }
}
...
this.persons[0] = 'John Elway';
```

你很可能已经意识到以上代码不会触发更新。事实上，[Vue 详细的指南](https://vuejs.org/v2/guide/list.html#Caveats) 中明确地提到关于数组的警告。为啥会这样呢？因为数组的 `setter` 属性无法拦截检测通过索引的赋值。

一个处理办法是使用 `Vue.set` 方法

```js
Vue.set(this.names, 0, 'John Elway');
```

并且 Vue 也对[一些数组方法](https://github.com/vuejs/vue/blob/dev/dist/vue.js#L806)做了足够的包装，我们可以直接使用 Array 方法直接更新数组对象。

```js
this.names.push('John Elway');
```

### 2. 动态添加属性


```js
data(){
  return {
    names:[]
  }
}
...
this.$data.lastAddedName = 'John Elway';
```

这可能是最好的例子，对吧？我可能应该知道某个属性已经存在，但有些情况下我们或许并不知道属性名称。JavaScript 提供 ***loosed-typedness*** 允许我们轻松添加属性。然而，Vue 响应式并不清楚我们添加了什么。

> 放着我来！ —— `Vue.set`

```js
Vue.set(this.$data,'lastAddedName','John Elway');
```

如果我们能有一种避免所有 `Vue.set` 使用情况并把索引操作还给我们的方法 ...



## Vue 3 的响应式

Welcome to 通过代理 (`Proxy`) 实现响应式的世界。`Proxy` 是在 ES6 或者称 ES2015 中引进的特性，他们已经出现一段时间，因此我确信大家已经了解他们了，但可能不会在生产环境中使用。因为 `Proxy` 也是无法shim 的特性，没有 polyfill，也无法在浏览器中 fake 实现。

幸运的是，它的语法并不荒谬。事实上，他也算有些熟悉。


```js
let data = {
   names:[]
};
data.names = new Proxy(data.names,{
    set:function(obj, prop, value){
            if(obj[prop] !== value){
                obj[prop] = value;
                tellTheWorldIhaveChanged();
            }
        }
});
```

这里 proxy 不仅拦截前面提到的数组索引赋值，还会在调用数组方法时触发，不再需要包装方法。

那么关于动态添加属性呢？

```js
data = new Proxy(data,{
    set:function(obj, prop, value){
            if(obj[prop] !== value){
                obj[prop] = value;
                tellTheWorldIhaveChanged();
            }
        }
});
data.lastAddedName = 'John Elway'; //tellTheWorldIhaveChanged()
```

OMG. Awesome! 让我们赶紧在 [Change.org](change.org) 上催更让它快点发布吧！

## 总结

我在 [Vue 2.5 发布](https://medium.com/the-vue-point/upcoming-typescript-changes-in-vue-2-5-e9bd7e2ecf08)之前就开始简短的写了。Vue 3 并没有被过多讨论，但由于上面提到的变化，我真的很期待它。话虽如此，我还是无法在近期的工作项目中使用它。Why? Vue3 没有对 IE 的兼容性，Babel 也不能解决这个问题。

但是，这种重构依然有长期优势：

1. 简化源码 - 这种重构使得团队去掉数组方法包装并减少需要做的类型检查
2. 新手更易上手 - 从响应式中获取的警告有助于 Vue 新手，这将消除社区论坛一整类的问题
3. 更好的性能 - 我见到一些人们建议这样做来提升响应式的速度，它其实已经非常快了，我还没在这一点上被说服

感谢阅读！如果你发现了任何错误，请联系我

## Update

似乎使用 Proxy 的版本将附加 `-next` (像ES-next) 到当前版本号，而不是用 `Vue 3`。这种更新可能最早出现在 `Vue 2.6` 和 `Vue2.6-next` 中。这将消除对 API 中可用内容的混淆。
