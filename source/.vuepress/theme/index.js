module.exports = {
  extend: '@vuepress/theme-default',

  plugins: [
    ['@vuepress/blog', {
      permalink: '/posts/:slug',
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
    [require('./plugins/plugin-archive.js'), {}],
  ],
}
