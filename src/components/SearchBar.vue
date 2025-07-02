<template>
  <div class="search-bar">
    <input id="search" type="text" v-model="searchString" />
    <button :onclick="submitSearch">Search</button>
  </div>
  <div v-html="searchString"></div>
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


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
