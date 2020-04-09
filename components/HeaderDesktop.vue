<template>
  <div class="md:visible">
    <div class="header pl-2-5 pr-2-5">
      <span class="header-item">
        <router-link :to="{ path: '/' }" class="text-decoration-none text-white">
          <h1 class="site-title">{{ title }}</h1>
        </router-link>
      </span>
      <span class="spacer"></span>
      <nav class="header-item">
        <ul class="menu cursor-pointer">
          <template v-for="page in $themeConfig.nav">
            <router-link :to="{ path: page.path }" class="text-decoration-none text-white">
              <li class="menu-option-horizontal">{{ page.label }}</li>
            </router-link>
          </template>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderDesktop',
  computed: {
    title() {
      if (typeof this.$site.title == 'string') {
        return this.$site.title.toUpperCase();
      }
      return '';
    },
  },
};
</script>
