---
title: Hexo 自动给博文添加 ReadMore
date: 2016-11-03 21:02:11
banner:
tags: [Hexo, 博客]
categories:
  - 编程开发
  - 服务器
  - Hexo
---


最近写了几篇博文，放到博客时总是要自己添加一个 `<!--more-->` 的标记才会在主页显示摘要，否则就整个一篇不管多长都直接给你放在主页，想看下面的几篇博文就要滑滑滑，滑半天才能看到后面几篇博文，既不符合设计原则，也不美观不方便，所以 **真的很不爽**！

而且在文中插入一个 `<!--more-->` 的标记也污染了本来干净的文章，作为一个强迫症，对这个简直不能忍！

按照逻辑来说，我们所关注的就是写文章，而摘要应该是根据文章内容通过 tf-idf 等一系列摘要算法生成的，再不济也应该是直接截取文章开头一段文字作为摘要嘛，总之是应该自动生成的，而且不应该修改 MD 源文件。

这里我们暂且不说算法什么的，先从低级一点的截取摘要的实现入手，（至于摘要算法生成，可以先看 [这里](http://cnodejs.org/topic/5199b18563e9f8a5427163f3)）

根据需求，我们去 google 一下，发现有两篇相关文章可以先阅读一下：

[Hexo-设置阅读全文 - violinlin](http://www.jianshu.com/p/78c218f9d1e7)

[Hexo自动添加ReadMore标记 - twiceYuan](https://twiceyuan.com/2014/05/25/hexo自动添加readmore标记/) 

这两篇文章讲的都很简单，但是因为实际情况不同，我还是用不了。比如第一篇中说在配置文件中配置就可以，然而人家用的 [Next](http://theme-next.iissnan.com/getting-started.html) 的主题，而我用的 [icarus](https://github.com/ppoffice/hexo-theme-icarus) 并不支持；并且我也因此去下了 Next 的主题看了它摘要部分的代码，实现方式也很粗暴直接，效果并不是很好。

由于主题原生不支持，因此我们只能打算跟着第二篇的思路直接改主题代码了。

第二篇的实现办法和 Next 的实现具体办法都一样，都是通过 `post.content.substring(start, end)` 方法截取文章开头的文字，只是 Next 粗暴的根据字数截取，而第二篇文章是固定找到第二行结尾来截取。

就我个人而言，以行的方式截取比以字数的方式截取的结果，对摘要完整性要友好的多。

总结一下以上两者的文章，再整理下我们的需求，最后我们得到几点初步的要求：

1. 能在主题配置文件中配置是否开启自动摘要
2. 摘要以行为单位自动从开头截取
3. 能配置固定截取的行数

根据这几项需求，我们先来一步步实现。

首先是找到要修改的代码的位置，因为我们这里主要是对文章显示时的修改，相关代码肯定是在有关文章内容显示的文件内，对 hexo 来说，通常是 article.ejs  post.ejs 等类似名字的文件，他们的特点就是都会在主页显示文章和单独访问博文时用到。

我用的是 **icarus** 的主题，这里就是 `/themes/icaurs/layout/common/article.ejs` 这个文件。

如果对 hexo 与其主题结构不了解的，可以先看这篇讲解： [Hexo -（三）高级进阶 - 图灵社区](http://www.ituring.com.cn/article/199294)

打开 `article.ejs`，找到与摘要相关的代码：

```html
<div class="article-entry" itemprop="articleBody">
<% if (index && post.excerpt) { %>
    <p><%- post.excerpt %></p>
    <p class="article-more-link">
        <a href="<%- url_for(post.path) %>#more"><%= __('article.more') %></a>
    </p>
<% } else { %>
    <% if (!index && post.toc) { %>
        <div id="toc" class="toc-article">
        <strong class="toc-title"><%= __('article.catalogue') %></strong>
            <%- toc(post.content) %>
        </div>
    <% } %>
    <%- post.content %>
<% } %>
</div>
```

Hexo 采用 [**Nodejs**](http://www.runoob.com/nodejs/nodejs-tutorial.html) 开发，icarus 主题用的是 [**EJS**](http://www.open-open.com/lib/view/open1452512705683.html) 模板，对这两个不熟的请自戳前面链接教程。

这里简单讲一下各变量含义，这各文件是在每篇文章生成时被调用的，

`index` 是指现在是否在首页的标志

`post` 指这篇文章

`post.excerpt` 指文章原始摘要内容，既 `<!--more-->`之前的内容。

`url_for()` 返回一个 root 路径的 url，不带域名

`post.path` 指文章的网址，不含 root 目录

`post.toc` 指文章目录显示是否开了

`toc()` 解析文本，生成目录，既 h1-h6 的列表。

`post.content` 指文章全部内容

现在再看，`article.ejs` 里代码的逻辑就很清除了，在遍历文章的时候 **先判断当前页面是否在首页，如果在首页并且这篇文档有摘要**，那就只显示摘要并显示一个 ReadMore；**否则** 就显示全文（其中有一个“判断不在首页并且文章配置了开启目录就显示目录”与我们现在讨论的 readmore 无关所以暂且不管）。

按照我们的思路，应该就是在上面“否则”后面加上自动截取前 n 行作为摘要并显示 ReadMore。

一步步来，首先我们需要一个可以配置的开关，用来配置是否启用自动截取生成摘要的功能，还需要一个可以配置的变量，用来配置固定截取几行。

文章显示是主题干的事，这两个配置也是主题相关的，因此我们打开 **主题配置文件**，添加几个键值对并保存：

```yaml
# Excerpt 
## Auto creat excerpt with not <!--more-->
## Enable will truncate auto_excerpt.lines rows in post head to replace excerpt.
auto_excerpt:
    enable: true
    lines: 5
```

回到 `article.ejs` 里，梳理一下我们的思路，整理一下一共有哪些显示摘要，哪些不显示的情况：

- 不显示 ReadMore 的情况
  1. 不在首页
  2. 在首页，无摘要，关闭自动截取
  3. 在首页，无摘要，使能自动截取，文章没有足够的长度
- 显示 ReadMore 的情况
  1. 在首页，有摘要
  2. 在首页，无摘要，使能自动截取，文章足够长

将以上情况整理成判断逻辑，再把目录显示加上，列出一个伪代码：

```python
是否显示全文 = true
if 在首页:
    if 有摘要:
        是否显示全文 = false
        显示摘要
    else if 主题.自动截取.使能:
        截取前 n 行作为摘要
        if 文章长度足够:
            是否显示全文 = false
            显示截取的结果
else:
    if 文章配置显示目录:
        显示目录
if 是否显示全文:
    显示全文
else:
    显示 ReadMore
```

这样来看逻辑很清晰了吧。

然后就是具体实现过程中我遇到的两个问题：

1. ReadMore 总是可能被当成文章文字的一部分而被改变样式

   原因是 icarus 原本就是把 ReadMore 用 p 标签放在文章中间的，如果 ReadMore 刚好实在一个列表间或者一块代码间，那显示就会很奇怪了。我改成了把整个摘要或者说文章放在一个 div 中，再把 Readmore 放在后面的另一块 div 中，这样 ReadMore 就与内容无关了。

2. 如何读取行数

   前面提到的两个自动截取摘要的文章，一篇 NexT 是自动截取字数，另一篇是固定截取两行，

   而我想的办法是通过多次调用 string.indexOf(str, start_position) 方法，每次改变起始位置来获取下一次的位置，有一次获取不到位置就说明文章还没有那么多行的长度。

   然后再用 string.substring(start, end) 方法，截取到获取的位置。

   ```javascript
   <% var br_position = 0 %>
   <% for (var br_count = 0; br_count < theme.auto_excerpt.lines; br_count++) { %>
       <% br_position = post.content.indexOf('\n',br_position + 1) %>
       <% if(br_position < 0) { break } %>
   <% } %>
   <% if(br_position > 0) { %>
       <p><%- post.content.substring(0, br_position + 1) %><p>
   <% } %>
   ```



现在开始按照伪代码的逻辑编写 ejs 了，最后的工作就是把原来 `article.ejs` 的摘要相关代码（在本文开头提到的）全部替换成我们写的自动截取摘要的代码：

```javascript
<div class="article-entry" itemprop="articleBody">
<% var show_all_content = true %>
<% if (index) { %>
    <% if (post.excerpt) { %>
        <% show_all_content = false %>
        <p><%- post.excerpt %></p>
    <% } else if (theme.auto_excerpt.enable) { %>
        <% var br_position = 0 %>
        <% for (var br_count = 0; br_count < theme.auto_excerpt.lines; br_count++) { %>
            <% br_position = post.content.indexOf('\n',br_position + 1) %>
            <% if(br_position < 0) { break } %>
        <% } %>
        <% if(br_position > 0) { %>
            <% show_all_content = false %>
            <p><%- post.content.substring(0, br_position + 1) %><p>
        <% } %>
    <% } %>
<% } else { %>
    <% if (post.toc) { %>
        <div id="toc" class="toc-article">
        <strong class="toc-title"><%= __('article.catalogue') %></strong>
            <%- toc(post.content) %>
        </div>
    <% } %>
<% } %>
<% if (show_all_content) { %>
    <%- post.content %>
    </div>
<% } else { %>
    </div>   
    <div class="article-more-link">
        <a href="<%- url_for(post.path) %>#more"><%= __('article.more') %></a>
    </div>
<% } %>
```

现在你可以把原来文章中的 `<!--more-->` 删了，以后也不用再写了！

最后放上我改好的 icarus 的 [`article.ejs`](https://github.com/zthxxx/zthxxx.github.io/blob/writing/themes/icarus/layout/common/article.ejs) 文件。

好了，强迫症结束！ ( •̀ ω •́ )y



