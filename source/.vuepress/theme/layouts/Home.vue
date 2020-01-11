<template>
  <Layout>
    <SummaryList slot="page-top" />
    <div slot="page-bottom" />
  </Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout.vue'
import SummaryList from '@theme/components/SummaryList.vue'

export default {
  name: 'Home',
  components: {
    Layout,
    SummaryList,
  },
  created() {
    this.$page.frontmatter.sidebar = false
  }
}
</script>
