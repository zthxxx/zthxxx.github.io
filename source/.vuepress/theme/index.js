// https://v1.vuepress.vuejs.org/zh/theme/option-api.html

module.exports = themeConfig => ({
  extend: '@vuepress/theme-default',

  plugins: [
    ['@vuepress/blog', {
      permalink: '/post/:slug',
    }],
    ['@vuepress/last-updated', {
      transformer: timestamp => new Date(timestamp).toISOString().replace('T', ' ').split(/:\d{2}\./)[0]
    }],
    '@vuepress/pagination',
    ['@vuepress/search', {
      searchMaxSuggestions: 10,
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true],
    ['sitemap', {
      hostname: themeConfig.hostname || '/',
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    [require('./plugins/plugin-archive.js'), {}],
  ],
})
