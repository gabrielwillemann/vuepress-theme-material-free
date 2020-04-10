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
};
</script>
