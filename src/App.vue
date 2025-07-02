<script setup lang="ts">
import SearchBar from './components/SearchBar.vue';
import SearchResults from './components/SearchResults.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <SearchBar msg="You did it!" />
      <SearchResults/>
    </div>
  </header>

</template>
