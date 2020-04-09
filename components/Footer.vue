<template>
  <footer class="bg-black-2 text-white text-grey-2 text-center p-1 pt-2 pb-2">
    {{ footer.text }}
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    footer() {
      return (this.$themeConfig && this.$themeConfig.footer) || {};
    },
  },
};
</script>
