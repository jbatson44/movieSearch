import { MovieViewModel } from './movieViewModel';

export class MovieSearchResult {
  constructor(
    public search: MovieViewModel[],
    public response: string,
    public totalResults: string
  ) {}
}