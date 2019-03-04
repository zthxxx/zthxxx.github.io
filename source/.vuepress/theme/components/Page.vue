<template>
  <ParentPage :sidebarItems="sidebarItems">
    <div class="content head" slot="top">
      <slot name="top">
        <h1 v-if="$page.frontmatter.title" :id="$page.frontmatter.title">
          {{ $page.frontmatter.title }}
        </h1>
        <TagLinks class="tag-links"/>
      </slot>
    </div>

    <slot name="bottom" slot="bottom"/>
  </ParentPage>
</template>

<script>
  import ParentPage from '@parent-theme/components/Page.vue'
  import TagLinks from '@theme/components/TagLinks.vue'

  export default {
    name: 'page',
    props: {
      sidebarItems: {
        type: Array,
        default: () => [],
      },
    },

    components: {
      ParentPage,
      TagLinks,
    },
  }
</script>

<style lang="stylus">
  @require '~@parent-theme/styles/wrapper.styl'

  .content:not(.custom).head
    @extend $wrapper
    margin: 2rem auto -1.5rem
    padding-bottom: 0;
</style>
