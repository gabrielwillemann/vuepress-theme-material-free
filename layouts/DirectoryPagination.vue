<template>
  <div>
    <ArticlePreview
      v-for="page in $pagination.pages"
      :key="page.path"
      :path="page.path"
      :title="page.title"
      :image="page.frontmatter.image"
      :description="page.frontmatter.description"
      :tags="page.frontmatter.tags"
      :date="page.frontmatter.date"
      :author="page.frontmatter.author"
      :lastUpdated="page.lastUpdated"
    />
    <Pagination :pagination="$pagination"  />
  </div>
</template>

<script>
import ArticlePreview from '@theme/components/ArticlePreview.vue';
import Pagination from '@theme/components/Pagination.vue';

export default {
  name: 'DirectoryPagination',
  components: { ArticlePreview, Pagination },
};
</script>
