<template>
  <div class="sm:visible">
    <div class="header">
      <span class="header-item p-1 cursor-pointer" @click="showDrawer = !showDrawer">
        <span class="material-icons">menu</span>
      </span>
      <span class="header-item">
        <router-link :to="{ path: '/' }" class="text-decoration-none text-white">
          <h1 class="site-title">{{ title }}</h1>
        </router-link>
      </span>
      <span class="spacer"></span>
    </div>
    <div v-if="showDrawer">
      <div class="overlay" @click="showDrawer = !showDrawer"></div>
      <div class="drawer bg-blue text-white p-0-5">
        <ul class="menu">
          <li class="menu-option-vertical p-1">
            <h1 class="site-title">{{ title }}</h1>
          </li>
          <template v-for="page in $themeConfig.nav">
            <router-link
              :to="{ path: page.path }"
              class="text-decoration-none text-white"
              @click.native="showDrawer = !showDrawer"
            >
              <li class="menu-option-vertical p-1">
                <span class="material-icons vertical-middle pr-1">{{ page.icon }}</span>
                <span class="vertical-middle">{{ page.label }}</span>
              </li>
            </router-link>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMobile',
  data: () => ({
    showDrawer: false,
  }),
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
