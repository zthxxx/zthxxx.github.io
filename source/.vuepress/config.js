module.exports = {
  title: 'zthxxx',
  description: 'zthxxx\'s blog',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  theme: 'cherry',
  themeConfig: {
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
        text: '分类',
        link: '/category/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '归档',
        link: '/archive/',
      },
    ],
    sidebar: 'auto',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
  ],
}
