<template>
  <div class="content">
    <h1>Archives</h1>
    <ul>
      <li
          v-for="post of pages"
          :key="post.key"
      >
        <span class="post-item">
          <em>{{ resolvePostDate(post) }} ·</em>
          <router-link :to="{ path: post.path }">
            {{ post.title }}
          </router-link>
        </span>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    computed: {
      pages() {
        return this.$site.pages
          .filter(({ id }) => id === 'post')
          .sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1)
      },
    },
    methods: {
      resolvePostDate(post) {
        return post.frontmatter.date.slice(0, 10)
      },
    },
  }
</script>


<style lang="stylus" scoped>
  .content > ul > li {
    margin: 16px 0;
    font-size: 1.2rem;
  }

  .post-item {
    display: flex;
    align-items: center;

    & > em {
      color: #aaa;
      font-size: 1.1rem;
      margin-right: .4rem;
    }
  }
</style>
