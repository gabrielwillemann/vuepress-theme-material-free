<template>
  <div class="mt-1 text-center">
    <router-link class="text-decoration-none text-black-3" :to="{ path: path }">
      <div>
        <img class="image-90" :src="image" />
      </div>
      <div>
        <h3 class="font-normal font-size-1 m-0 pt-0-5 pb-0-5">{{ title }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ArticleSmallPreview',
  props: ['title', 'path', 'image'],
};
</script>
