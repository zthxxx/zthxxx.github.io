module.exports = {
  title: '猫尾 と 香辛料 🐾',
  description: '樱桃炸弹・蓝莓特攻',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#ff5891' }],
  ],
  theme: 'cherry',
  themeConfig: {
    hostname: 'https://blog.zthxxx.me',
    docsRepo: 'zthxxx/zthxxx.github.io',
    docsDir: 'source',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    lastUpdated: 'Last Updated',
    serviceWorker: false,
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '归档',
        link: '/post/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],
    sidebar: false,
  },
  markdown: {
    lineNumbers: true,
    plugins: [
      'abbr',
      'footnote',
      'ins',
      'sub',
      'sup',
    ],
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-109153977-1'
    }],
  ],
}
