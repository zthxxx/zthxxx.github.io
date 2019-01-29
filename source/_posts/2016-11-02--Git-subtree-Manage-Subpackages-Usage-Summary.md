---
title: Git subtree 管理子项目包使用小结
date: 2016-11-02 17:59:24
banner:
tags:
  - Git
categories:
  - 编程开发
  - Git
---


### 场景描述

我们在用 git 管理的一个工程中，或多或少会在我们自己的项目中 **引入一些别人写的包或者模块**。

通常我们是直接下载这个包的文件放在我们的工程文件夹中直接使用的。

假如我们需要使用引入某个正在开发的模块的源代码，并希望能获取这个模块在快速迭代中更新的各个版本，这时一般就是 **在项目工程中导入这个模块的 git 仓库到工程的子目录中**。

现在就牵涉到 git 如何管理一个项目仓库中还有其他子模块项目 git 仓库的情况。

这方面 git 提供的工具是 submodule 和 subtree，

本篇讲的是使用 **subtree** 管理子项目的一些使用小结。虽然git 官方推荐是用 subtree 不用 submodule，但是我觉得这两者是各有利弊，各有各的使用场合，在不同的需求条件下都可能切换使用到。



### 推荐阅读

这里先给出我当时学习的几篇相关的博文：

[使用GIT SUBTREE集成项目到子目录 - XA](http://aoxuis.me/post/2013-08-06-git-subtree)

[用 Git Subtree 在多个 Git 项目间双向同步子项目 - 敲代码的小德子](https://segmentfault.com/a/1190000003969060)

[如何科学的管理多个子项目 - 阿驴](https://segmentfault.com/a/1190000006080556)

[使用 git-subtree 以子目录形式引入外部项目 - William Sang](http://www.tuicool.com/articles/veaEBr)



### 实际问题

最近使用 hexo 搭建了我的[个人博客](blog.zthxxx.me)，其中 hexo 工程是 clone 的 hexo github 仓库的，主题是 pull 的 [icarus 仓库](https://github.com/ppoffice/hexo-theme-icarus) 的 [修改版](https://github.com/zthxxx/hexo-theme-icarus)。所以主题就是一个放在 hexo 工程目录里的 git 子项目。由于在搭建博客的过程中，我需要按照我想要的样式不断的修改主题，所以要求主题的子项目要能快速更新仓库，方便推送和拉取远程仓库，要能将主项目的版本与子项目版本对应，如 clone 主项目，应能同时自动 clone 子项目下来，如 reset 主项目，要能自动同时 reset 子项目到主项目版本所对应的子项目版本。

上面说的有点饶，总结来说就四点：

1. 子项目的目录应该放子项目 git 仓库（而不该复制粘贴代码）
2. 能拉取远程子项目的更新，并能推送本地子项目的修改
3. 主项目提交时能记录当时所用子项目的版本
4. 主项目被 clone 或 pull 时，能自动包含 clone 或 pull 子项目

本质来说以上通过 subtree 和 submodule 都能实现要求，只是实现的方式不一样，这里我们还是只说 subtree。



### Subtree 的使用

subtree 涉及的命令就只有添加项目地址、push、pull，并不能查看子项目 branch commit log diff 等等。

subtree 本质就是把子项目目录作为一个**普通的文件目录**，对于父级的主项目来说是完全透明的，真的就是个普通目录，**原来是怎么操作现在依旧是那么操作**，就像操作主项目中其他文件一样的 add commit，**subtree 的核心思想与能做的就只有同步项目文件**。

这里我们通过本博客搭建时使用的 subtree 来举例讲解操作过程。

我们有一个 hexo blog 的目录，放的是 hexo 工程文件，作为主项目目录，当然，这是 git 管理的仓库；blog 下有一个 themes 的文件夹，准备用来放主题包，现在是空的。

```bash
blog/
blog/themes/
```

现在我们的工作目录是在 blog 中，我们需要讲主题文件夹 icarus 下载到博客目录的 themes 子文件夹中，像这样：

```bash
blog/themes/icarus/
```

我们现在是没有 icarus 这个目录的，后面的步骤就是把这个子项目包给弄出来。

1. **添加子项目远程库**

   ```bash
   cd blog
   # git remote add --fetch <远程库别名> <远程库仓库地址>
   git remote add -f icarus git@github.com:zthxxx/hexo-theme-icarus.git
   ```

   添加远程库是为了后面要用子项目地址的时候方便使用远程库别名取代。

2. **拉取子项目到本地文件夹**

   ```bash
   # git subtree add --prefix=<本地子项目目录> <远程库仓库地址 | 远程库别名> <分支> --squash
   git subtree add --prefix=themes/icarus icarus master --squash
   ```

   这句命令会拉取子项目 icarus 的仓库并放到 `themes/icaurs` 下，同时相当于将子项目全部提交到主项目中了，主项目会多一个合并子项目的 commit 记录；

   如果不加 `--squash` 参数，主项目会合并子项目本身所有的 commit 历史记录，加上 `--squash` 参数是把子项目的记录合成一次 commit 提交到主项目，这样主项目只是合并一次 commit 记录。

3. **像以往一样修改文件提交主项目**

   因为有按照需要修改主题样式，所以会有修改到主题文件，也会修改到主项目的文件，但是都没区别，在**主项目目录下查看状态和提交修改都和原来一样**，不管是被修改的主题文件还是项目文件都一样的显示，对主项目来说都是一样的。

   ```bash
   git status
   # modified:		blog_file
   # modified: 	themes/icarus/sub_project_file
   git add --all
   git commit -m "Modifiy main and sub file"
   git push origin master
   ```

   上面是主项目添加修改文件并提交推送的操作，`themes/icarus/` 是子项目的地址，但是可以看到，子项目文件有修改不会对主项目的操作过程有任何影响，这就是我们说子项目对主项目透明的原因。

4. **Subtree 提交到子项目**

   第 3 点的时候已经把修改提交到了主项目的远程库中了，这时再在主项目目录下 `git status` 就能看到 `nothing to commit, working tree clean` 的提示；

   但是第 3 点中同样修该了子项目 icaurs 的文件，我也同样希望**能把修改提交到子项目远程库中**，这时候就该 **subtree** 上场了，在主项目目录下：

   ```bash
   # git subtree push --prefix=<本地子项目目录> <远程库仓库地址 | 远程库别名> <分支> --squash
   git subtree push --prefix=themes/icarus icarus master --squash
   ```

   这时 git 会遍历主项目的 commit 所有记录，从中找出有对子项目修改的相关 commit，并提取各 commit 更新的内容提交到子项目远程库中；加 `--squash` 参数时，如果主项目新增的修改子项目的 commit 有多个时会合并为一个 commit 提交。

5. **子项目远程库有更新**

   假如现在子项目的远程库有大量更新的文件，我们想把这些更新拉取合并到本地的子项目目录中，ok，这时又是 subtree 上场了。

   ```bash
   # git subtree pull --prefix=<本地子项目目录> <远程库仓库地址 | 远程库别名> <分支> --squash
   git subtree pull --prefix=themes/icarus icarus master --squash
   ```

   子项目的更新与推送命令都是一样的用法，要注意的是，子项目更新后，在主项目中查看 `git status` 就会看到一堆子项目的文件显示 modified，没关系，主项目中再使用 add commit push 提交推送一遍。

6. **子项目切出起点**

   当主项目的 commit 提交太多后，再推送子项目到远程库的时候，subtree 每次都要遍历很多 commit，浪费的时间相当多，很是不爽，当然要找解决办法了；

   subtree 可以将子项目当前版本**切出为一个分支**，作为后面的 push 时遍历的新起点，这样以后每次遍历都只从上次切出的分支的起点开始，不会再遍历以前的了，时间就省了很多。

   假如现在主项目和子项目都提交好了，工作空间是干净的，这时我们把主题 icarus 的子项目当前版本切出到新分支作为起点：

   ```bash
   git subtree split [--rejoin] --prefix=<本地子项目目录> --branch <主项目中作为放置子项目的分支名>
   git subtree split [--rejoin] --prefix=themes/icarus --branch icarus
   ```

   **注意：**如果 `push` 时使用了 `--squash` 参数合并提交，那么 `split` 时**不能**使用 `--rejoin` 参数，反之必须使用。

   现在我的主项目里就多了一个叫 icarus 的分支，存放的就是 icarus 这个子项目的内容，这个分支只是作起点储存用的，**不用管它不用修改不用推送到远程库**。

   ​

   现在再有子项目的文件修改后，一样还是用第 3、4 点的操作更新提交和推送远程库，

   ```bash
   git status
   # modified:		blog_file
   # modified: 	themes/icarus/sub_project_file
   git add --all
   git commit -m "Modifiy main and sub file"
   git subtree push --prefix=themes/icarus icarus master --squash
   ```

   只是这次子项目推送时，git 不会再去从头遍历主项目，而是直接从切出的位置开始遍历，大大加快了时间。

   当现在 commit 又变多了遍历时间又慢了，需要更新推进那个起始点的时候，只需要再在当前版本上再切出一个作起点的分支覆盖原来那个就是，命令和第一次切出分支作起点时一模一样。

   ```bash
   git subtree split --rejoin --prefix=themes/icarus --branch icarus
   ```

   这样下次推送子项目时开始遍历时的起点也更新了。



### subtree 与 submodule 基本比较说明

从实际使用中的一些问题谈起，网上这两者的对比说明已经够多了，我这里列的都不完整，只是遇到的一些。

**submodule** 的问题大多是说它步骤太多太麻烦，我是不喜欢它在 clone 时不能直接自动带上子项目的包，必须要用递归参数才行。 `git clone --recursive <远程库地址>`

但是 submodule 可以进去到子项目的仓库单独查看子项目的修改记录，在子项目目录时，就相当与在一个单独的仓库内，对外层主项目完全不可见。

**subtree** 好在使用方便，一共就两三个命令，参数还是都一样的，使用起来很简单。缺点就是无法直接单独查看子项目的修改记录，因为子项目的修改跟主项目的修改都合并到主项目中了，污染主项目。





















