import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { MovieSearchResult } from '@/models/searchResult'
import { MovieViewModel } from '@/models/movieViewModel'
import { ResultType } from '@/enums/resultTypeEnum'
import { SearchOptions } from '@/models/searchOptions'

export const useStore = defineStore('store', () => {
  let movieResult = ref(new MovieSearchResult([], "", ""));
  let searchOptions = ref(new SearchOptions("", ResultType.All))

  function search() {
    let url = buildUrl(searchOptions.value.Query, searchOptions.value.Type, searchOptions.value.Year, searchOptions.value.Page);
    fetchData(url);
  }

  function buildUrl(searchQuery: string, type: ResultType, year: string, page: string) {
    let apikey = "3f66eca5";
    let url = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apikey}&page=${page}`;
    if (type !== ResultType.All) {
      url += `&type=${type}`;
    }
    if (year) {
      url += `&y=${year}`;
    }
    return url;
  }

  async function fetchData(url: string): Promise<void> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.Response === "False") {
        movieResult.value = new MovieSearchResult([], data.Response, "0");
      }
      else {
        movieResult.value = new MovieSearchResult(
          data.Search.map((m: any) =>
            new MovieViewModel(m.Title, m.Year, m.imdbID, m.Poster, m.Type)
          ), data.Response,
          data.totalResults
        );
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  

  return { search, movieResult, searchOptions }
})
