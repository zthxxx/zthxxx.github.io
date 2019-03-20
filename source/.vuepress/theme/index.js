// https://v1.vuepress.vuejs.org/zh/theme/option-api.html

module.exports = themeConfig => ({
  extend: '@vuepress/theme-default',

  plugins: [
    // https://github.com/ulivz/vuepress-theme-blog/blob/master/index.js#L14
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/post/',
          layout: 'Posts',
          itemLayout: 'Post',
          itemPermalink: '/post/:slug',
          pagination: {
            lengthPerPage: 5,
          },
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          layout: 'Tags',
          frontmatter: { title: 'Tag' },
          pagination: {
            lengthPerPage: 5
          }
        },
      ]
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
      exclude: [
        '/404.html',
      ],
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    [require('./plugins/plugin-archive.js'), {}],
  ],
})
