<template>
  <header class="card-title">
    <h1 class="m-0 mb-0-8 font-size-2 font-normal" itemprop="headline">{{ title }}</h1>
    <Breadcrumb :mainTag="tags[0]" :title="title" />
    <ArticleInfo :tags="tags" :date="date" :author="author" :lastUpdated="lastUpdated" />
    <div hidden>
      <img itemprop="image" :src="image" />
      <p itemprop="abstract">{{ description }}</p>
    </div>
  </header>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb.vue';
import ArticleInfo from '@theme/components/ArticleInfo.vue';

export default {
  name: 'ArticleHeader',
  props: ['title', 'tags', 'date', 'author', 'image', 'description', 'lastUpdated'],
  components: { Breadcrumb, ArticleInfo },
};
</script>

