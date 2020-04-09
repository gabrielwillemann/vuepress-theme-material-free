<template>
  <article itemscope itemtype="http://schema.org/TechArticle">
    <div class="card mb-1 p-1-5">
      <ArticleHeader
        :title="$page.title"
        :tags="$page.frontmatter.tags"
        :date="$page.frontmatter.date"
        :author="$page.frontmatter.author"
        :image="$page.frontmatter.image"
        :description="$page.frontmatter.description"
        :lastUpdated="$page.lastUpdated"
      />
      <Content />
    </div>

    <Author :author="$page.frontmatter.author" />
  </article>
</template>

<script>
import I18n from '@theme/mixins/I18n.js';
import ArticleHeader from '@theme/components/ArticleHeader.vue';
import Author from '@theme/components/Author.vue';

export default {
  name: 'Post',
  mixins: [I18n],
  components: { ArticleHeader, Author },
};
</script>
