<template>
  <header>
    <HeaderDesktop />
    <HeaderMobile />
  </header>
</template>

<script>
import HeaderDesktop from '@theme/components/HeaderDesktop.vue';
import HeaderMobile from '@theme/components/HeaderMobile.vue';

export default {
  name: 'Header',
  components: { HeaderMobile, HeaderDesktop },
};
</script>
