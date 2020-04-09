<template>
  <div>
    <span hidden></span>
    <div class="card">
      <div class="card-title text-center font-size-2 p-1-5">{{ t.notFound && t.notFound.title }}</div>
      <div class="text-center p-1-5">
        <router-link :to="{ path: '/' }" class="btn">
          {{ t.notFound && t.notFound.home }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import I18n from '@theme/mixins/I18n.js';

export default {
  name: 'NotFound',
  mixins: [I18n],
};
</script>
