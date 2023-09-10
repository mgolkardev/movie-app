/** @format */

import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppServices } from "./app-services.interface";
import { AppState } from "./app-state.interface";

export type AppDispatch = ThunkDispatch<AppState, AppServices, Action>;
