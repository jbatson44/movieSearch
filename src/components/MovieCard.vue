<script setup lang="ts">
import { MovieViewModel } from '@/models/movieViewModel';
defineProps<{
  model: MovieViewModel
}>()
</script>

<template>
  <div class="movie-card">
    <div class="movie-card--left">
      <img :src="model.Poster" height="250px"/>
    </div>
    <div class="movie-card--right">
      <h2>{{ model.Title }}</h2>
      <div class="movie-card--details">
        <p>Year: {{ model.Year }}</p>
        <p>Type: {{ model.Type }}</p>
        <p>IMDB ID: {{ model.ImdbID }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.movie-card {
  margin: 20px;
  display: grid;
  grid-template-columns: 30% 70%;
}
</style>
