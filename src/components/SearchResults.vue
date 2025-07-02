<template>
  <div class="search-results">
    <div v-if="response === 'False'">
      <h3>No results. Try a new search!</h3>
    </div>
    <div v-else>
      <h3>Total Result: {{ totalResults }}</h3>
      <ul class="search-results--list">
        <li v-for="movie in results" :key="movie.ImdbID">
          <MovieCard :model="movie" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useStore } from '../stores/store'
import MovieCard from './MovieCard.vue';

const store = useStore();
let totalResults = computed(() => store.movieResult.totalResults);
let results = computed(() => store.movieResult.search);
let response = computed(() => store.movieResult.response);
</script>

<style scoped lang="scss">
h3 {
  font-size: 1.2rem;
}

.search-results {
  &--list {
    list-style-type: none;
  }
}

</style>
