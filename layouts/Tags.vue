<template>
  <div class="card mb-1 p-1-5">
    <header class="card-title">
      <h1 class="m-0 mb-0-8 font-size-2 font-normal">Tags</h1>
    </header>
    <nav class="mt-1 mb-1">
      <div class="p-0-5 d-inline-block" v-for="tag in tags">
        <router-link class="btn" :to="{ path: tag.path }">{{ tagName(tag.name) }} ({{ tag.pages.length }})</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import Tags from '@theme/mixins/Tags.js';

export default {
  name: 'Tags',
  mixins: [Tags],
  computed: {
    tags() {
      let list = [...this.$tag.list].sort((a, b) => {
        if (a.pages.length < b.pages.length) return -1;
        if (a.pages.length > b.pages.length) return 1;
        return 0;
      });
      return list.reverse();
    },
  },
};
</script>
