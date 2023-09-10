import * as MovieAPIs from "modules/movies/apis/movies.api";
import { moviesReducer } from "modules/movies/redux-state/movies.reducer";
import { configureStore } from "@reduxjs/toolkit";

export const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    // other states
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          movies: MovieAPIs,
        },
      },
      serializableCheck: false,
    }),
});
