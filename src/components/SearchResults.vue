<template>
  <div class="search-results">
    <h3>Total Result: {{ totalResults }}</h3>
    <ul>
      <li v-for="movie in results" :key="movie.ImdbID">
        <MovieCard :model="movie" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useStore } from '../stores/store'
import MovieCard from './MovieCard.vue';

const store = useStore();
let totalResults = computed(() => store.movieResult.totalResults);
let results = computed(() => store.movieResult.search);
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
