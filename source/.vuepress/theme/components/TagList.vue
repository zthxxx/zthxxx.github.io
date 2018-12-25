<template lang="html">
  <div class="content">
    <h1>Tags</h1>
    <span v-for="tag of $tags.list">
      <h3 :id="tag.name">
        <router-link
          :to="{ path: `/tags/#${tag.name}` }"
          class="header-anchor"
          aria-hidden="true">#</router-link>
        {{tag.name}}
      </h3>
      <ul>
        <li v-for="page of tag.posts">
          <router-link
            :to="{ path: page.path }">{{page.title}}
          </router-link>
        </li>
      </ul>
    </span>
  </div>
</template>
