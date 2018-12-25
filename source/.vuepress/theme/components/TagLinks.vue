<template lang="html">
  <div v-if="$page.frontmatter.tags">
    tags:
    <router-link
      class="tag"
      v-for="tag of $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tag/#${tag}` }"
    >
      {{tag}}
    </router-link>
  </div>
</template>

<style lang="stylus">
  .tag:not(:last-child)::after
    content: " | "
    color: #999
</style>
