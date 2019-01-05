module.exports = (options, ctx) => {
  const {
    archiveURL = '/posts/',
  } = options

  return {
    async ready () {
      const archivePage = {
        path: archiveURL,
        regularPath: archiveURL,
        frontmatter: {
          title: 'Archives',
          layout: 'Posts',
        }
      }
      await ctx.addPage(archivePage)
    }
  }
}
