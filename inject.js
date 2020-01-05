const vuepressUtil = require('@vuepress/core/lib/node/util')

// https://github.com/vuejs/vuepress/blob/76da78001b/packages/%40vuepress/core/lib/node/util/index.js#L54
vuepressUtil.DATE_RE = /(\d{4}-?\d{2}-?(\d{2})?)-(.*)/

vuepressUtil.inferDate = function (frontmatter = {}, filename, dirname) {
  let matches

  if (frontmatter.date) {
    return frontmatter.date
  } else if (filename && (matches = filename.match(vuepressUtil.DATE_RE))) {
    return matches[1]
  } else if (dirname && (matches = dirname.match(vuepressUtil.DATE_RE))) {
    return matches[1]
  } else {
    return null
  }
}
