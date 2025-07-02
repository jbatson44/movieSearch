<template>
  <div class="search-bar-container">
    <div class="search-bar">
      <label for="search">Search movies/series by name: </label>
      <input id="search" type="text" v-model="searchString" @keyup.enter="submitSearch"/>
      <label for="type-dropdown">Type: </label>
      <select id="type-dropdown" v-model="selectedResultType">
        <option v-for="[label, value] in resultTypes" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
      <label for="year-input">Year: </label>
      <input id="year-input" type="number" v-model.number="year" />
      <button :onclick="submitSearch">Search</button>
    </div>
  </div>
  <hr>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '../stores/store'
import { ResultType } from '@/enums/resultTypeEnum';
import { SearchOptions } from '@/models/searchOptions';

const store = useStore();
defineProps<{
  msg: string
}>()
const resultTypes = Object.entries(ResultType);
let searchString = ref("");
let selectedResultType = ref<ResultType>(ResultType.All);
let year = ref<number | null>(null)

function submitSearch()
{
  // always the first page here
  store.searchOptions = new SearchOptions(searchString.value, selectedResultType.value, year.value?.toString() ?? "", "1")
  store.search();
}
</script>


<style scoped lang="scss">
.search-bar-container {
  display: flex;
}
.search-bar {
  margin: auto;
}
</style>
