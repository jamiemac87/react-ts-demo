import { AppState } from './index';
import { combineReducers } from "redux";

export interface AppState {
  name: string;
}

export const rootReducer = combineReducers<AppState>({} as any);