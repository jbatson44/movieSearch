<template>
  <div class="pagination">
    <button v-for="page in totalPages" :onclick="() => searchByPagination(page)">{{ page }}</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../stores/store'

const store = useStore();
let totalResults = computed(() => Number(store.movieResult.totalResults));
let totalPages = computed(() => (Math.ceil(totalResults.value / 10)));
function searchByPagination(page: Number) 
{
  console.log("totalResults " + totalResults.value);
  console.log("totalPages " + totalPages.value);
  store.searchOptions.Page = page.toString();
  store.search();
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  max-width: 1200px;
}
</style>
