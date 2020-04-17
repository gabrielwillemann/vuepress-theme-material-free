<template>
  <div class="card mb-1 p-1">
    <div class="card-header card-title">{{ t.article && t.article.author }}</div>
    <div class="d-flex flex-wrap flex-items-center flex-content-center" itemprop="author" itemscope itemtype="http://schema.org/Person">
      <img class="image-author m-1" v-if="authorInfo.image" itemprop="image" :src="authorInfo.image" :alt="author" />
      <div>
        <div class="font-size-1-8" itemprop="name">{{ author }}</div>
        <div class="font-size-1-1" itemprop="jobTitle">{{ authorInfo.jobTitle }}</div>
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
