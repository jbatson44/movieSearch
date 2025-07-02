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
        <a :href="imdbLink(model.ImdbID)" target="_blank">IMDB Link</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MovieViewModel } from '@/models/movieViewModel';
defineProps<{
  model: MovieViewModel
}>()
function imdbLink(imdbId: string)
{
  return `https://www.imdb.com/title/${imdbId}/`;
}
</script>

<style scoped lang="scss">
.movie-card {
  margin: 20px;
  display: grid;
  grid-template-columns: 30% 70%;
  border: white 1px solid;
}
</style>
