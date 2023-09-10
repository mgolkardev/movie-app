"use client";

import { Link, Grid, Progress, Skeleton } from "shared/components";
import style from "./movies.style.module.scss";
import { MovieItem } from "./components/movie-item/movie-item.component";
import { MoviesActions } from "./redux-state/movies-actions";
import { MovieState } from "./redux-state/movies-state.interface";
import { useAppDispatch, useAppSelector } from "shared/redux-state/app.hooks";

export const MoviesModule = () => {
  const dispatch = useAppDispatch();
  const { data, status, total } = useAppSelector<MovieState>(
    (state) => state.movies
  );

  if (total === 0 && status === "Fetching") {
    return (
      <div className={style.movies}>
        <div className={style.movies__progress}>
          <Progress />
        </div>
      </div>
    );
  }

  return (
    <div className={style.movies}>
      <Grid
        className={style.movies__grid}
        wrapperClassName={style.movies__wrapper}
        error={status === "FetchFailed"}
        total={total}
        itemHeight={250}
        columnCount={4}
        itemRenderer={({ key, index, isLoaded, style: itemStyle }) => {
          const item = data[index];

          if (!isLoaded || !item) {
            return (
              <div
                key={key}
                style={itemStyle}
                className={style.movies__skeleton}
              >
                <Skeleton />
              </div>
            );
          }

          return (
            <Link
              key={key}
              href={`/movie/${item.id}`}
              style={itemStyle}
              className={style.movies__link}
            >
              <MovieItem {...item} />
            </Link>
          );
        }}
        loadMore={() => MoviesActions.getMovies(dispatch)}
      />
    </div>
  );
};
