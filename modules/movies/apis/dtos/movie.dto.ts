import { MovieCategoryType } from "../enums/movie-category-type.enum";

export interface MovieDto {
  id: string;
  title: string;
  cover_image: {
    path: string;
  };
  imdb_rank_percent: number;
  categories: Array<{
    type: MovieCategoryType;
    items: Array<{
      title: string;
    }>;
  }>;
  year: number;
  duration: string;
}
