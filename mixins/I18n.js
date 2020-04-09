export default {
  computed: {
    t() {
      let locales = this.$themeConfig.locales || {};
      let language = locales.default || 'en';
      return locales[language] || {};
    },
  },
};
