/** @format */

import { axiosClient } from "shared/utils/axios-client";
import { ResultSet } from "shared/interfaces/result-set.interface";
import { MovieDto } from "./dtos/movie.dto";

export const getMovies = async (count: number, offset: number) => {
  const { data } = await axiosClient.get<ResultSet<MovieDto[]>>(
    `/api-v2/video-contents`,
    {
      params: {
        count,
        offset,
      },
    }
  );

  return data;
};
