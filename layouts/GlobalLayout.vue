<template>
  <div>
    <Header />
    <ContentSite />
    <Footer />
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue';
import ContentSite from '@theme/components/ContentSite.vue';
import Footer from '@theme/components/Footer.vue';

import '@theme/styles/index.css';
import '@vuepress/theme-default/styles/code.styl';

export default {
  name: 'GlobalLayout',
  components: { Header, ContentSite, Footer },
  created() {
    if (this.$ssrContext && typeof this.$ssrContext.userHeadTags == 'string') {
      this.$ssrContext.userHeadTags += `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" />`;
      this.$ssrContext.userHeadTags += `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />`;
    }
  },
};
</script>
