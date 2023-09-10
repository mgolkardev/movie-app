import * as MovieAPIs from "modules/movies/apis/movies.api";

export interface AppServices {
  movies: typeof MovieAPIs;
}
