/** @format */

import { AxiosResponse } from "axios";
import { AppServices } from "shared/redux-state/app-services.interface";
import { AppState } from "shared/redux-state/app-state.interface";
import { fetchFailed, fetched, fetching } from "./movies.reducer";
import { AppDispatch } from "shared/redux-state/app.dispatch.type";

export class MoviesActions {
  public static getMovies(dispatch: AppDispatch): Promise<void> {
    return dispatch(
      async (
        localDispatch: AppDispatch,
        _getState: () => AppState,
        services: AppServices
      ): Promise<void> => {
        try {
          localDispatch(fetching());
          const result = await services.movies.getMovies(
            _getState().movies.nextPage
          );

          localDispatch(fetched(result));
        } catch (error) {
          localDispatch(fetchFailed(error as AxiosResponse));
          throw error;
        }
      }
    );
  }
}
