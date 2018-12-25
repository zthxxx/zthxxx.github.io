
<template>
  <ParentPage :sidebarItems="sidebarItems">
    <slot name="top" slot="top">
      <TagLinks class="tag-links"/>
    </slot>

    <slot name="bottom" slot="bottom"/>
  </ParentPage>
</template>

<script>
import ParentPage from '@parent-theme/components/Page.vue'
import TagLinks from '@theme/components/TagLinks.vue'

export default {
  props: {
    sidebarItems: {
      type: Array,
      default: () => [],
    }
  },

  components: {
    ParentPage,
    TagLinks,
  },
}
</script>

<style lang="stylus">
  .tag-links
    position: relative
    top: 60px
    margin: 20px auto 0
    max-width: 740px
</style>
