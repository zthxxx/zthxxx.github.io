(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{137:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("最近刚用 Hexo 和 GitHub 搭好了一个"),s("a",{attrs:{href:"https://zthxxx.github.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("个人博客"),s("OutboundLink")],1),e._v("，现在准备记录下这个过程。这个搭建的过程应该分为两部分，一是学会使用 Hexo 生成静态博客页面，二是申请 GitHub Pages 托管网站，本篇文章是讲的第一步。（下一篇请戳 "),s("router-link",{attrs:{to:"/posts/build-hexo-blog-by-travis-ci/"}},[e._v("使用 Travis 自动构建 Hexo 到 GitHub")]),e._v("）")],1),e._v(" "),s("p",[e._v("此类教程网上有不少，这里也列几个：")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22191919",target:"_blank",rel:"noopener noreferrer"}},[e._v("用 GitHub + Hexo 建立你的第一个博客 - Crossin"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://baixin.io/2015/08/HEXO%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HEXO搭建个人博客 - 潘柏信"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://ibruce.info/2013/11/22/hexo-your-blog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("hexo你的博客 - 不如"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"先说说我的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先说说我的理解","aria-hidden":"true"}},[e._v("#")]),e._v(" 先说说我的理解")]),e._v(" "),s("p",[e._v("Hexo (类似) 是一种博客框架，像 WordPress 一样，这个框架里通常包含了 "),s("strong",[e._v("主页")]),e._v("、"),s("strong",[e._v("博主信息")]),e._v("、"),s("strong",[e._v("博文")]),e._v("、"),s("strong",[e._v("分类标签")]),e._v("、"),s("strong",[e._v("主题样式")]),e._v("，每个都有固定格式。")]),e._v(" "),s("p",[e._v("Hexo 是帮助我们 "),s("strong",[e._v("通过原始素材渲染出带有主题样式的静态页面")]),e._v("。（我把根据博文 Markdown 生成出带 CSS HTML 代码 的过程称为渲染）")]),e._v(" "),s("p",[e._v("渲染时最重要的部分是："),s("strong",[e._v("主题")]),e._v("、"),s("strong",[e._v("配置")]),e._v("、"),s("strong",[e._v("素材")]),e._v("（文章、图片、音视频等），三者确定一个渲染的结果。")]),e._v(" "),s("p",[e._v("由于这类框架的控制，规定素材（主要是文章）具有的格式（比如开头 YAML、正文 Markdown，比如都是博主博文标签这一套），因此当渲染主题都按规则设计解析的时候，各种主题之间就可以 "),s("strong",[e._v("随意更换")]),e._v("，因为都符合规则，都能被渲染，不同的地方只需要修改 "),s("strong",[e._v("主题配置")]),e._v(" 就好。")]),e._v(" "),s("p",[e._v("由上再简单总结下：")]),e._v(" "),s("ul",[s("li",[e._v("Hexo 框架制定了一套博文渲染规则")]),e._v(" "),s("li",[e._v("用户根据简单的写博文规则来写自己的文章")]),e._v(" "),s("li",[e._v("主题开发者更具负责的框架渲染规则开发主题样式文件")]),e._v(" "),s("li",[e._v("Hexo 解析文章、配置、主题，渲染出静态页面")]),e._v(" "),s("li",[e._v("把渲染的结果发布到服务器【"),s("strong",[e._v("注意")]),e._v("：发布的只有生成的页面，Hexo 工程和配置及原文 MD 都不会上传】")])]),e._v(" "),s("p",[e._v("所以，使用 Hexo 的步骤也明确了。")]),e._v(" "),s("ol",[s("li",[e._v("在本地安装 Hexo 框架")]),e._v(" "),s("li",[e._v("本地找一个目录来放博客工程，用 Hexo 初始化项目文件夹")]),e._v(" "),s("li",[e._v("下载喜欢的主题来更换")]),e._v(" "),s("li",[e._v("设置站点配置、主题配置")]),e._v(" "),s("li",[e._v("新建 Hexo 博文")]),e._v(" "),s("li",[e._v("用 Markdown 写博文内容")]),e._v(" "),s("li",[e._v("执行 Hexo 渲染生成静态页面文件")]),e._v(" "),s("li",[e._v("本地开启服务器预览 | 部署到远程服务器")])]),e._v(" "),s("h3",{attrs:{id:"具体操作过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体操作过程","aria-hidden":"true"}},[e._v("#")]),e._v(" 具体操作过程")]),e._v(" "),s("h4",{attrs:{id:"hexo-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hexo-安装","aria-hidden":"true"}},[e._v("#")]),e._v(" Hexo 安装")]),e._v(" "),s("p",[e._v("这里有几篇详细的教程，我搭建这个博客时就是按他们讲的一步步来的，现在把他们列出来，再写自己的总结：")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://hexo.io/zh-cn/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档 | Hexo"),s("OutboundLink")],1),e._v("        Hexo 官方文档，一定要看，多看文档，遇到的很多问题其实文档中都有")]),e._v(" "),s("li",[s("a",{attrs:{href:"http://baixin.io/2015/08/HEXO%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HEXO搭建个人博客 - 潘柏信"),s("OutboundLink")],1),e._v(" 这篇博文讲的很简单，主要时有一些他自己遇到的问题，基本后来我都遇到了")]),e._v(" "),s("li",[s("a",{attrs:{href:"http://blog.csdn.net/github_33261002/article/details/52297025",target:"_blank",rel:"noopener noreferrer"}},[e._v("hexo静态博客搭建与配置 - Crazier_qi"),s("OutboundLink")],1),e._v(" 安装部分只讲了一小段，因为确实很简单")]),e._v(" "),s("li",[s("a",{attrs:{href:"http://www.jianshu.com/p/3e341d86acd2",target:"_blank",rel:"noopener noreferrer"}},[e._v("hexo博客换主题--icarus - Trity"),s("OutboundLink")],1),e._v(" icarus 的样式很简洁清爽，但是不失逻辑性，是我喜欢的风格")]),e._v(" "),s("li",[s("a",{attrs:{href:"http://www.zipperary.com/2013/05/29/hexo-guide-3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("hexo博客的配置、使用 - Zippera"),s("OutboundLink")],1),e._v(" 主要讲的是配置文件")]),e._v(" "),s("li",[s("a",{attrs:{href:"http://ibruce.info/2013/11/22/hexo-your-blog/",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("hexo你的博客 - 不如")]),s("OutboundLink")],1),e._v(" "),s("strong",[e._v("非常非常详细的教程、说明、剖析，安装使用，由浅入深，非常推荐！")])])]),e._v(" "),s("p",[e._v("Hexo 是用 Nodejs 写的，所以你首先要安装 Nodejs 和 npm，本文使用 Ubuntu 14.04 的环境")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" nodejs\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("接着使用 npm 安装 hexo，再次之前，确保电脑上有 git，因为安装过程中会调用 git。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g hexo\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g hexo-cli\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("npm 的 -g 参数表示全局安装。")]),e._v(" "),s("p",[e._v("这里安了两个，有一个带 cli 的后缀，我也没明白是为什么，反正我是两个都装了才用的。")]),e._v(" "),s("p",[e._v("Hexo 的命令可以先看"),s("a",{attrs:{href:"https://hexo.io/zh-cn/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("p",[e._v("建立准备放 hexo 博客目录,并进入到该目录下。")]),e._v(" "),s("p",[e._v("执行 hexo init 初始化当前目录，也可以为 init 指定一个目录，没有指定就是默认当前目录：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" blog_dir\nhexo init\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("hexo 会在当前目录下载一系列资源文件并且安装依赖包，最后形成的目录已经是一个完整的博客工程了，带了默认主题，只是没有博文，可以直接被完整渲染。")]),e._v(" "),s("p",[e._v("现在初始化玩了我们可以执行渲染生成：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("hexo generate  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 执行生成")]),e._v("\nhexo g  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 生成的缩写")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("generate 可以缩写成 g，hexo 很有意思，大部分命令都可以缩写为命令首字母。")]),e._v(" "),s("p",[e._v("生成之后可以通过 hexo 自带的服务器本地 "),s("a",{attrs:{href:"http://localhost:4000",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:4000"),s("OutboundLink")],1),e._v(" 预览查看：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("hexo server  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 启动本地服务器")]),e._v("\nhexo s  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 缩写")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("这时候可以访问本地的 4000 端口访问生成的界面。")]),e._v(" "),s("p",[e._v("整个操作看起来就几行代码，确实相当简单，后面的就是配置参数和部署了。")]),e._v(" "),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),s("p",[e._v("Hexo 的配置文件分两部分，"),s("strong",[e._v("站点配置")]),e._v(" 和 "),s("strong",[e._v("主题配置")]),e._v("。站点配置文件在 hexo 博客根目录下的 _config.yml 文件中，主题配置文件在根目录下的 themes/<主题名> 文件夹下的 _config.yml 中。以下就用站点配置和主题配置做说明。")]),e._v(" "),s("h4",{attrs:{id:"部署-配置部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-配置部分","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署 (配置部分)")]),e._v(" "),s("p",[e._v("部署的过程涉及到 GitHub Pages 的申请等过程，因此会另起一张，这里只先讲部署中需要涉及到的 Hexo 站点配置文件部分。")]),e._v(" "),s("p",[e._v("在站点配置文件中  deploy 标签下，添加对 git 的支持，选择仓库和分支，这里注意的是，hexo 3.0 之后的 "),s("code",[e._v("deploy: type:")]),e._v(" 应该是 git 而不是 github，并且需安装 "),s("code",[e._v("hexo-deployer-git")]),e._v(" 插件。")]),e._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# hexo _config.yml")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" git\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" git@github.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("<user_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/<user_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(".github.io.git\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" master\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("之后配置好 GitHub Pages 的话，就使用 hexo 部署上去。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("hexo deploy\nhexo d\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"主站配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主站配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 主站配置")]),e._v(" "),s("p",[e._v("主站配置文件在 "),s("a",{attrs:{href:"https://hexo.io/zh-cn/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("hexo 官网文档"),s("OutboundLink")],1),e._v(" 上写的很详细，这篇博文 "),s("a",{attrs:{href:"http://www.zipperary.com/2013/05/29/hexo-guide-3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("hexo博客的配置、使用 - Zippera"),s("OutboundLink")],1),e._v(" 讲配置都有中文注释，参照着配很方便。")]),e._v(" "),s("p",[e._v("主站配置文件主要要配置的是 "),s("strong",[e._v("标题")]),e._v("、"),s("strong",[e._v("描述")]),e._v("、"),s("strong",[e._v("作者")]),e._v("、"),s("strong",[e._v("语言")]),e._v("、"),s("strong",[e._v("站点")]),e._v("、"),s("strong",[e._v("主题")]),e._v(" 、"),s("strong",[e._v("写作")]),e._v("、"),s("strong",[e._v("部署")]),e._v(" 等，每人各有不同，根据文档配置就行了。主题配置的名字和放在 themes 文件夹中的主题名字要一样。")]),e._v(" "),s("h3",{attrs:{id:"主题配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 主题配置")]),e._v(" "),s("p",[e._v("主题配置文件 一般在各主题开发者的官网或者博客上都有介绍，并且大部分不同的主题需要的配置都相似，我使用的是 "),s("a",{attrs:{href:"https://github.com/ppoffice/hexo-theme-icarus",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("icarus")]),s("OutboundLink")],1),e._v(" 的主题，跟着开发者的说明就好了。主要是 "),s("strong",[e._v("菜单")]),e._v("、"),s("strong",[e._v("logo")]),e._v("、"),s("strong",[e._v("favicon")]),e._v("、"),s("strong",[e._v("链接")]),e._v("、"),s("strong",[e._v("插件")]),e._v(" 等等，主要是要看主题支持什么什么插件，没有的就要自己写了。")])])},[],!1,null,null,null);t.default=r.exports}}]);