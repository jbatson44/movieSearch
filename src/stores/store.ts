import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { MovieSearchResult } from '@/models/searchResult'
import { MovieViewModel } from '@/models/movieViewModel'

export const useStore = defineStore('store', () => {
  let movieResult = ref(new MovieSearchResult([], "", ""));

  function search(searchQuery: string) {
    let url = buildUrl(searchQuery);
    fetchData(url);
  }

  function buildUrl(searchQuery: string) {
    let apikey = "3f66eca5";
    return `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apikey}`;
  }

  async function fetchData(url: string): Promise<void> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      movieResult.value = new MovieSearchResult(
        data.Search.map((m: any) =>
          new MovieViewModel(m.Title, m.Year, m.imdbID, m.Poster, m.Type)
        ), data.Response,
        data.totalResults
      );
      console.log(data); // do something with the data
      console.log(movieResult.value.totalResults);
      console.log(movieResult.value);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  

  return { search, movieResult }
})
