<template>
  <div class="m-0 text-grey-3 font-size-0-9 d-flex flex-wrap">
    <span class="mb-0-8">
      <span class="material-icons font-size-1-1 vertical-middle">bookmark</span>
      <span class="mr-1 vertical-middle">
        <template v-for="tag in tags">
          <span v-if="tag != tags[0]">,</span>
          <router-link :to="{ path: `/tag/${tag}` }" class="text-decoration-none text-grey-3">{{
            tagName(tag)
          }}</router-link>
        </template>
      </span>
    </span>
    <span class="mb-0-8">
      <span class="material-icons font-size-1-1 vertical-middle">access_time</span>
      <span class="mr-1 vertical-middle">
        <time pubdate itemprop="datePublished" :datetime="date">{{ dateFormat }}</time>
      </span>
    </span>
    <span class="mb-0-8" itemprop="author" itemscope itemtype="http://schema.org/Person">
      <span class="material-icons font-size-1-1 vertical-middle">person</span>
      <span class="mr-1 vertical-middle" itemprop="name">{{ author }}</span>
    </span>
    <span hidden>
      <span itemprop="about" v-for="tag in tags">{{ tag }}</span>
      <span itemprop="dateModified">{{ lastUpdated }}</span>
      <span itemprop="publisher" itemscope itemtype="http://schema.org/Organization">
        <span itemprop="name">{{ $site.title }}</span>
        <span itemprop="logo" v-if="$themeConfig.logo" itemscope itemtype="https://schema.org/ImageObject">
          <img itemprop="url" :src="$themeConfig.logo" />
        </span>
      </span>
      <span itemprop="mainEntityOfPage">{{ $site.title }}</span>
    </span>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import Tags from '@theme/mixins/Tags.js';

export default {
  name: 'ArticleInfo',
  props: ['tags', 'date', 'author', 'lastUpdated'],
  mixins: [Tags],
  computed: {
    dateFormat() {
      let d = dayjs(this.date);
      return d.$d.toLocaleDateString();
    },
    authorInfo() {
      let authors = this.$themeConfig.authors || {};
      return authors[this.author] || {};
    },
  },
};
</script>
