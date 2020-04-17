<template>
  <aside class="aside">
    <Social />
    <div class="card mb-2 p-1" v-if="favoritePosts.length > 0">
      <div class="card-header">
        <span class="card-title">{{ t.sideBar && t.sideBar.favoritePosts }}</span>
      </div>
      <template v-for="page in favoritePosts">
        <div class="border-bottom" v-if="page != favoritePosts[0]"></div>
        <ArticleSmallPreview :image="page.frontmatter.image" :title="page.title" :path="page.path" />
      </template>
    </div>
  </aside>
</template>

<script>
import I18n from '@theme/mixins/I18n.js';
import ArticleSmallPreview from '@theme/components/ArticleSmallPreview.vue';
import Social from '@theme/components/Social.vue';

export default {
  name: 'SideBar',
  mixins: [I18n],
  components: { ArticleSmallPreview, Social },
  computed: {
    pages() {
      let list = (this.$site && this.$site.pages) || [];
      return [...list].reverse();
    },
    favoritePosts() {
      return this.pages.filter(page => page.frontmatter.favorite);
    },
  },
};
</script>
