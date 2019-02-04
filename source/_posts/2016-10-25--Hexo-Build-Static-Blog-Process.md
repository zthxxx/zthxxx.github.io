---
title: 使用 Hexo 生成静态博客过程记录
date: 2016-10-25 09:45:35
tags: [Hexo, 博客]
categories:
  - 编程开发
  - 服务器
  - Hexo
---


最近刚用 Hexo 和 GitHub 搭好了一个[个人博客](https://zthxxx.github.io)，现在准备记录下这个过程。这个搭建的过程应该分为两部分，一是学会使用 Hexo 生成静态博客页面，二是申请 GitHub Pages 托管网站，本篇文章是讲的第一步。（下一篇请戳 [使用 Travis 自动构建 Hexo 到 GitHub](/posts/build-hexo-blog-by-travis-ci/)）

此类教程网上有不少，这里也列几个：

[用 GitHub + Hexo 建立你的第一个博客 - Crossin](https://zhuanlan.zhihu.com/p/22191919)

[HEXO搭建个人博客 - 潘柏信](http://baixin.io/2015/08/HEXO搭建个人博客/)

[hexo你的博客 - 不如](http://ibruce.info/2013/11/22/hexo-your-blog/)



### 先说说我的理解

Hexo (类似) 是一种博客框架，像 WordPress 一样，这个框架里通常包含了 **主页**、**博主信息**、**博文**、**分类标签**、**主题样式**，每个都有固定格式。

Hexo 是帮助我们 **通过原始素材渲染出带有主题样式的静态页面**。（我把根据博文 Markdown 生成出带 CSS HTML 代码 的过程称为渲染）

渲染时最重要的部分是：**主题**、**配置**、**素材**（文章、图片、音视频等），三者确定一个渲染的结果。

由于这类框架的控制，规定素材（主要是文章）具有的格式（比如开头 YAML、正文 Markdown，比如都是博主博文标签这一套），因此当渲染主题都按规则设计解析的时候，各种主题之间就可以 **随意更换**，因为都符合规则，都能被渲染，不同的地方只需要修改 **主题配置** 就好。

由上再简单总结下：

- Hexo 框架制定了一套博文渲染规则
- 用户根据简单的写博文规则来写自己的文章
- 主题开发者更具负责的框架渲染规则开发主题样式文件
- Hexo 解析文章、配置、主题，渲染出静态页面
- 把渲染的结果发布到服务器【**注意**：发布的只有生成的页面，Hexo 工程和配置及原文 MD 都不会上传】

所以，使用 Hexo 的步骤也明确了。

1. 在本地安装 Hexo 框架
2. 本地找一个目录来放博客工程，用 Hexo 初始化项目文件夹
3. 下载喜欢的主题来更换
4. 设置站点配置、主题配置
5. 新建 Hexo 博文
6. 用 Markdown 写博文内容
7. 执行 Hexo 渲染生成静态页面文件
8. 本地开启服务器预览 | 部署到远程服务器



### 具体操作过程

#### Hexo 安装

这里有几篇详细的教程，我搭建这个博客时就是按他们讲的一步步来的，现在把他们列出来，再写自己的总结：

- [文档 | Hexo](https://hexo.io/zh-cn/docs/index.html)        Hexo 官方文档，一定要看，多看文档，遇到的很多问题其实文档中都有
- [HEXO搭建个人博客 - 潘柏信](http://baixin.io/2015/08/HEXO搭建个人博客/) 这篇博文讲的很简单，主要时有一些他自己遇到的问题，基本后来我都遇到了
- [hexo静态博客搭建与配置 - Crazier_qi](http://blog.csdn.net/github_33261002/article/details/52297025) 安装部分只讲了一小段，因为确实很简单
- [hexo博客换主题--icarus - Trity](http://www.jianshu.com/p/3e341d86acd2) icarus 的样式很简洁清爽，但是不失逻辑性，是我喜欢的风格
- [hexo博客的配置、使用 - Zippera](http://www.zipperary.com/2013/05/29/hexo-guide-3/) 主要讲的是配置文件
- [**hexo你的博客 - 不如**](http://ibruce.info/2013/11/22/hexo-your-blog/) **非常非常详细的教程、说明、剖析，安装使用，由浅入深，非常推荐！**



Hexo 是用 Nodejs 写的，所以你首先要安装 Nodejs 和 npm，本文使用 Ubuntu 14.04 的环境

```bash
sudo apt-get install nodejs
sudo apt-get install npm
```

接着使用 npm 安装 hexo，再次之前，确保电脑上有 git，因为安装过程中会调用 git。

```bash
sudo npm install -g hexo
sudo npm install -g hexo-cli
```

npm 的 -g 参数表示全局安装。

这里安了两个，有一个带 cli 的后缀，我也没明白是为什么，反正我是两个都装了才用的。

Hexo 的命令可以先看[这里](https://hexo.io/zh-cn/docs/index.html)。

建立准备放 hexo 博客目录,并进入到该目录下。

执行 hexo init 初始化当前目录，也可以为 init 指定一个目录，没有指定就是默认当前目录：

```bash
cd blog_dir
hexo init
```

hexo 会在当前目录下载一系列资源文件并且安装依赖包，最后形成的目录已经是一个完整的博客工程了，带了默认主题，只是没有博文，可以直接被完整渲染。

现在初始化玩了我们可以执行渲染生成：

```bash
hexo generate  # 执行生成
hexo g  # 生成的缩写
```

generate 可以缩写成 g，hexo 很有意思，大部分命令都可以缩写为命令首字母。

生成之后可以通过 hexo 自带的服务器本地 [localhost:4000](http://localhost:4000) 预览查看：

```bash
hexo server  # 启动本地服务器
hexo s  # 缩写
```

这时候可以访问本地的 4000 端口访问生成的界面。

整个操作看起来就几行代码，确实相当简单，后面的就是配置参数和部署了。



### 配置

Hexo 的配置文件分两部分，**站点配置** 和 **主题配置**。站点配置文件在 hexo 博客根目录下的 _config.yml 文件中，主题配置文件在根目录下的 themes/<主题名> 文件夹下的 _config.yml 中。以下就用站点配置和主题配置做说明。

#### 部署 (配置部分)

部署的过程涉及到 GitHub Pages 的申请等过程，因此会另起一张，这里只先讲部署中需要涉及到的 Hexo 站点配置文件部分。

在站点配置文件中  deploy 标签下，添加对 git 的支持，选择仓库和分支，这里注意的是，hexo 3.0 之后的 `deploy: type:` 应该是 git 而不是 github，并且需安装 `hexo-deployer-git` 插件。

```yaml
# hexo _config.yml
deploy:
  type: git
  repository: git@github.com:<user_name>/<user_name>.github.io.git
  branch: master
```

之后配置好 GitHub Pages 的话，就使用 hexo 部署上去。

```bash
hexo deploy
hexo d
```

### 主站配置

主站配置文件在 [hexo 官网文档](https://hexo.io/zh-cn/docs/index.html) 上写的很详细，这篇博文 [hexo博客的配置、使用 - Zippera](http://www.zipperary.com/2013/05/29/hexo-guide-3/) 讲配置都有中文注释，参照着配很方便。

主站配置文件主要要配置的是 **标题**、**描述**、**作者**、**语言**、**站点**、**主题** 、**写作**、**部署** 等，每人各有不同，根据文档配置就行了。主题配置的名字和放在 themes 文件夹中的主题名字要一样。

### 主题配置

主题配置文件 一般在各主题开发者的官网或者博客上都有介绍，并且大部分不同的主题需要的配置都相似，我使用的是 [**icarus**](https://github.com/ppoffice/hexo-theme-icarus) 的主题，跟着开发者的说明就好了。主要是 **菜单**、**logo**、**favicon**、**链接**、**插件** 等等，主要是要看主题支持什么什么插件，没有的就要自己写了。
