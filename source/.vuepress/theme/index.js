module.exports = {
  extend: '@vuepress/theme-default',

  plugins: [
    ['@vuepress/blog', {
      permalink: '/post/:slug',
    }],
    '@vuepress/pagination',
    ['@vuepress/search', {
      searchMaxSuggestions: 10,
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: ''
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ],
}
