<template>
  <Layout>
    <TagList slot="page-top" />
  </Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout.vue'
import TagList from '@theme/components/TagList.vue'
export default {
  components: {
    Layout,
    TagList,
  },
  created() {
    this.$page.frontmatter.sidebar = false
  }
}
</script>
