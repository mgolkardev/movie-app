import { MovieDto } from "../apis/dtos/movie.dto";

export interface MovieState {
  status?: "Fetching" | "Fetched" | "FetchFailed";
  data: MovieDto[];
  total: number;
  nextPage: number;
}
