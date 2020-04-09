<template>
  <div class="text-grey-3 font-size-0-9 mb-0-8" itemscope="" itemtype="http://schema.org/BreadcrumbList">
    <div class="d-inline mr-0-3" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
      <router-link class="text-decoration-none text-grey-3" itemprop="item" :to="{ path: '/' }">
        <span itemprop="name">{{ t.breadcrumb && t.breadcrumb.home }}</span>
      </router-link>
      <meta itemprop="position" content="1" />
    </div>

    <div class="d-inline mr-0-3">/</div>

    <div class="d-inline mr-0-3" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
      <router-link class="text-decoration-none text-grey-3" itemprop="item" :to="{ path: `/tag/${mainTag}` }">
        <span itemprop="name">{{ tagName(mainTag) }}</span>
      </router-link>
      <meta itemprop="position" content="2" />
    </div>

    <div class="d-inline mr-0-3">/</div>

    <div class="d-inline mr-0-3" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
      <span itemprop="name">{{ title }}</span>
      <meta itemprop="position" content="3" />
    </div>
  </div>
</template>

<script>
import I18n from '@theme/mixins/I18n.js';
import Tags from '@theme/mixins/Tags.js';

export default {
  name: 'Breadcrumb',
  props: ['mainTag', 'title'],
  mixins: [I18n, Tags],
};
</script>
