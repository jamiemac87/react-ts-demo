import { AppState, rootReducer } from './reducers/index';
import { createStore } from 'redux';
declare const window: any;

export const initStore = (initialState: AppState) => createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
