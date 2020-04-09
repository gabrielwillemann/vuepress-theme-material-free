<template>
  <div class="card mb-1 p-1-5">
    <div class="card-header card-title">{{ t.article && t.article.author }}</div>
    <div class="d-flex pt-1" itemprop="author" itemscope itemtype="http://schema.org/Person">
      <img class="image-author" v-if="authorInfo.image" itemprop="image" :src="authorInfo.image" :alt="author" />
      <div class="flex-item-align-center">
        <div class="ml-1 font-size-1-8" itemprop="name">{{ author }}</div>
        <div class="ml-1 font-size-1-1" itemprop="jobTitle">{{ authorInfo.jobTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import I18n from '@theme/mixins/I18n.js';

export default {
  name: 'Author',
  props: ['author'],
  mixins: [I18n],
  computed: {
    authorInfo() {
      let authors = this.$themeConfig.authors || {};
      return authors[this.author] || {};
    },
  },
};
</script>
