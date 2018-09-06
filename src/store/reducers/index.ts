import { UserAction } from './../actions/user.actions';
import { AppState } from './index';
import { combineReducers, Reducer } from "redux";
import { UPDATE_NAME } from '../actions/user.actions';

export interface UserState {
  name: string;
}

export interface AppState {
  user: UserState,
}

const initialState: UserState = {
  name: ''
}

const userReducer: Reducer<UserState, UserAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload }
    default:
      return state;
  }
}

export const rootReducer = combineReducers<AppState>({ user: userReducer });