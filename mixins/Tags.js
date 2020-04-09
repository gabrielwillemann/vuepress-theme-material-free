export default {
  methods: {
    tagName(id) {
      let tags = this.$themeConfig.tags || {};
      return tags[id] || id;
    },
  },
};
