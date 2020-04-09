<template>
  <div class="content">
    <div class="spacer-left"></div>
    <Main />
    <SideBar />
    <div class="spacer-right"></div>
  </div>
</template>

<script>
import Main from './Main.vue';
import SideBar from './SideBar.vue';

export default {
  name: 'ContentSite',
  components: { Main, SideBar },
};
</script>
