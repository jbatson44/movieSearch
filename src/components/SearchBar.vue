<template>
  <div class="search-bar-container">
    <div class="search-bar">
      <label for="search">Search movies/series by name: </label>
      <input id="search" type="text" v-model="searchString" @keyup.enter="submitSearch"/>
      <select v-model="selectedResultType">
        <option v-for="[label, value] in resultTypes" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
      <button :onclick="submitSearch">Search</button>
    </div>
  </div>
  <hr>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useStore} from '../stores/store'
import { ResultType } from '@/enums/resultTypeEnum';

const store = useStore();
defineProps<{
  msg: string
}>()
const resultTypes = Object.entries(ResultType);
let searchString = ref("");
let selectedResultType = ref<ResultType>(ResultType.All);

function submitSearch()
{
  store.search(searchString.value, selectedResultType.value);
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
