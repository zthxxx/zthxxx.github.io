
<template>
  <ParentPage :sidebarItems="sidebarItems">
    <slot name="top" slot="top">
      <div class="content head" slot="top">
        <h1 v-if="$page.frontmatter.title" :id="$page.frontmatter.title">
          {{ $page.frontmatter.title }}
        </h1>
        <TagLinks class="tag-links"/>
      </div>
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
  .content:not(.custom).head
    margin-bottom: -1rem;
    padding-bottom: 0

  .tag-links
    position: relative
    margin: 20px auto 0
</style>
