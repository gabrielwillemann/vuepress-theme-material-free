<template>
  <article class="card mb-1" itemscope itemtype="http://schema.org/TechArticle">
    <div>
      <router-link class="text-decoration-none text-black-3" :to="{ path: path }">
        <img class="image-100" :src="image"  itemprop="image" />
      </router-link>
    </div>
    <div class="p-1">
      <div>
        <router-link class="text-decoration-none text-black-3" :to="{ path: path }">
          <h2 class="m-0 mb-0-8 font-size-1-5 font-normal" itemprop="headline">{{ title }}</h2>
        </router-link>
      </div>
      <ArticleInfo :tags="tags" :date="date" :author="author" :lastUpdated="lastUpdated" />
      <p class="article-text" itemprop="abstract">{{ description }}</p>
    </div>
  </article>
</template>

<script>
import ArticleInfo from '@theme/components/ArticleInfo.vue';

export default {
  name: 'ArticlePreview',
  props: ['title', 'image', 'path', 'description', 'tags', 'date', 'author', 'lastUpdated'],
  components: { ArticleInfo },
};
</script>
