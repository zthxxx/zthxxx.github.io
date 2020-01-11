// https://vuepress.vuejs.org/zh/theme/option-api.html

import { Context, ThemeConfig, ThemeOptionAPI } from 'vuepress-types'

export default (themeConfig: ThemeConfig, ctx: Context): ThemeOptionAPI => ({
  extend: '@vuepress/theme-default',

  plugins: [
    ['vuepress-plugin-typescript', {
      tsLoaderOptions: {
        // All options of ts-loader
        // https://github.com/TypeStrong/ts-loader#loader-options
      },
    }],
    // https://vuepress-plugin-blog.ulivz.com/config/
    // https://github.com/vuepressjs/vuepress-theme-blog/blob/dd6bb0d0ad1c2b4589e4f15dcc50bd03fa1e73bf/index.js#L23
    ['@vuepress/blog', {
      directories: [
        {
          id: 'home',
          dirname: '_posts',
          path: '/',
          layout: 'Home',
          itemLayout: 'Post',
          itemPermalink: '/post/:slug',
          pagination: {
            lengthPerPage: 5,
          },
        },
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
          id: 'tag',
          keys: ['tag', 'tags'],
          path: '/tag/',
          layout: 'Tags',
          frontmatter: { title: 'Tag' },
        },
      ],
      globalPagination: {
        lengthPerPage: 5,
      },
      comment: themeConfig.comment,
    }],
    ['@vuepress/last-updated', {
      transformer: timestamp => new Date(timestamp).toISOString().replace('T', ' ').split(/:\d{2}\./)[0]
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10,
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true],
    ['sitemap', {
      hostname: themeConfig.hostname || '/',
      exclude: [
        '/content.json',
        '/404.html',
      ],
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
  ],
  /**
   * Generate summary.
   */
  extendPageData(pageCtx) {
    const strippedContent = pageCtx._strippedContent
    if (!strippedContent) {
      return
    }
    const excerpt =
        strippedContent
          .trim()
          .slice(0, 200)
       + ' ...'


    const { html } = ctx.markdown.render(excerpt, {
      frontmatter: pageCtx.frontmatter,
      relativePath: pageCtx.relativePath
    })
    pageCtx.excerpt = html
  },
})
