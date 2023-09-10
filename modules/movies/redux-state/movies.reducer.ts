/** @format */

import { MovieState } from "./movies-state.interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MovieDto } from "../apis/dtos/movie.dto";
import { ResultSet } from "shared/interfaces/result-set.interface";
import { AxiosResponse } from "axios";

const initialState: MovieState = {
  data: [],
  total: 0,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetching: (state) => {
      state.status = "Fetching";
    },
    fetched: (
      state,
      action: PayloadAction<{
        offset: number;
        result: ResultSet<MovieDto[]>;
      }>
    ) => {
      state.status = "Fetched";

      if (action.payload.offset === 0) {
        state.data = action.payload.result.data;
      } else {
        state.data = [...state.data, ...action.payload.result.data];
      }

      state.total = action.payload.result.meta?.total_items_count;
    },
    fetchFailed: (state, action: PayloadAction<AxiosResponse>) => {
      state.status = "FetchFailed";
    },
  },
});

export const { fetching, fetched, fetchFailed } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
