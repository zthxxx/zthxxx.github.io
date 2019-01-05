<template>
  <Layout>
    <PostList slot="page-top" />
  </Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout.vue'
import PostList from '@theme/components/PostList.vue'
export default {
  components: {
    Layout,
    PostList,
  },
  created() {
    this.$page.frontmatter.sidebar = false
  }
}
</script>
