<template>
  <div class="text-center mb-1">
    <nav>
      <router-link class="btn mr-0-3" v-if="pagination.hasPrev" :to="{ path: firstLink }">
        <span class="material-icons vertical-middle">first_page</span>
      </router-link>
      <router-link class="btn mr-0-3" v-if="pagination.hasPrev" :to="{ path: pagination.prevLink }">
        <span class="material-icons vertical-middle">navigate_before</span>
      </router-link>
      <router-link class="btn mr-0-3" v-if="pagination.hasNext" :to="{ path: pagination.nextLink }">
        <span class="material-icons vertical-middle">navigate_next</span>
      </router-link>
      <router-link class="btn mr-0-3" v-if="pagination.hasNext" :to="{ path: lastLink }">
        <span class="material-icons vertical-middle">last_page</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pagination'],
  computed: {
    firstLink() {
      let [firstPage] = this.pagination._paginationPages;
      return firstPage.path;
    },
    lastLink() {
      let [lastPage] = [...this.pagination._paginationPages].reverse();
      return lastPage.path;
    },
  },
};
</script>
