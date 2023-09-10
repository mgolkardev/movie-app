import { axiosClient } from "shared/utils/axios-client";
import { ResultSet } from "shared/interfaces/result-set.interface";
import { MovieDto } from "./dtos/movie.dto";
import { MOVIES_PER_PAGE } from "./constants/movie.constant";

export const getMovies = async (page: number) => {
  const { data } = await axiosClient.get<ResultSet<MovieDto[]>>(
    `/api-v2/video-contents`,
    {
      params: {
        count: MOVIES_PER_PAGE,
        offset: page * MOVIES_PER_PAGE,
      },
    }
  );

  return data;
};
