<template lang="html">
  <div class="content">
    <h1>Archives</h1>
    <ul>
      <li
        v-for="post of $site.pages.filter(({ type }) => type === 'post').sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1)"
        :key="post.key"
      >
        <router-link :to="{ path: post.path }">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
