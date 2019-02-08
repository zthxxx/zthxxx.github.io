---
title: 做了一款小清新的 zsh 主题 jovial
tags: [折腾]
categories:
  - 工具
date: 2018-04-27 01:59:21
---

折腾过各种带有一堆状态监控的 zsh 配置，那个时候每次打开终端就像个 HUD 一样，满屏的参数；

后来看腻了，于是自己做了个简约一点，颜色清爽一点的主题 [**jovial**](https://github.com/zthxxx/jovial)

<https://github.com/zthxxx/jovial>

没有 powerline 字体，没有复杂的监控显示，

powerline 看多了，觉得那种色块对比度太厚重了，现在喜欢偏线条的一点的，感觉优雅一些；

只有最简单的几个状态展示：**项目依赖语言**、**git 状态**、**当前时间**

在 [自定义插件](<https://github.com/zthxxx/jovial/blob/master/jovial.plugin.zsh>) 里还添加了一些有用的特性，比如长时间的命令执行成功或失败时都发送一条系统推送、比如给 `less` 添加代码高亮支持等。

## 上图

![jovial-theme](https://github.com/zthxxx/jovial/raw/master/docs/jovial-preview.png)

## 安装

手动安装的话，就是直接下载 [`jovial.zsh-theme`](https://github.com/zthxxx/jovial/blob/master/jovial.zsh-theme) 这个文件到 `oh-my-zsh` 主题目录，

然后再改 `~/.zshrc` 中的主题名为 `jovial` 。

当然，我这么懒的人肯定是提供了自动化的一句话安装嘛：

```
curl -sSL git.io/jovial | sudo bash -s $USER
```

会自动下载主题文件、安装 `git` `autojump` `urltools` 插件，并自动修改 `.zshrc` 中的主题名和插件名配置。

如果没有 `zsh` 或 `oh-my-zsh` 的话，也会默认尝试自动安装并修改默认 shell (所以才需要 root 权限)～

**支持 MacOS、Debian / Ubuntu、CentOS、Arch，**

所以也可以**在服务器上这样一句话安装**，

比如把上面那句话加入到服务器初始化脚本中，方便的多，简直不要太爽！

