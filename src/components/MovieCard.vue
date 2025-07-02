<script setup lang="ts">
import { MovieViewModel } from '@/models/movieViewModel';
defineProps<{
  model: MovieViewModel
}>()
</script>

<template>
  <div class="movie-card">
    <img :src="model.Poster"/>
    <p>{{ model.Title }}</p>
    <p>{{ model.Year }}</p>
    <p>{{ model.Type }}</p>
    <p>{{ model.ImdbID }}</p>
  </div>
</template>

<style scoped>
</style>
