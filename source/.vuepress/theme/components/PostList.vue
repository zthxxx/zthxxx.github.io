<template lang="html">
  <div class="content">
    <h1>Archives</h1>
    <ul>
      <li
        v-for="post of $site.pages.filter(({ type }) => type === 'post')"
        :key="post.key"
      >
        <router-link :to="{ path: post.path }">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
