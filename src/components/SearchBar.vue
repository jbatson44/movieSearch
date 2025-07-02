<template>
  <div class="search-bar-container">
    <div class="search-bar">
      <label for="search">Search movies/series by name: </label>
      <input id="search" type="text" v-model="searchString" @keyup.enter="submitSearch"/>
      <button :onclick="submitSearch">Search</button>
    </div>
  </div>
  <hr>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useStore} from '../stores/store'

const store = useStore();
defineProps<{
  msg: string
}>()
let searchString = ref("");

function submitSearch()
{
  store.search(searchString.value);
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
