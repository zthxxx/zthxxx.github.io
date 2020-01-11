<template>
  <Layout>
    <TagList class="tag-list" slot="page-top" />
    <div slot="page-bottom" />
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


<style lang="stylus">

.tag-list {
  display: flex;
  flex-wrap: wrap;

  & > h1 {
    width: 100%;
  }

  & > span {
    width: 50%;
    min-width: 360px;
    padding-right: .8rem;
    box-sizing: border-box;
  }
}

</style>
