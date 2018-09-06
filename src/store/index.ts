import { actionCreatorMiddleware } from './middleware/action-creator.middleware';
import { rootReducer } from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initStore = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(actionCreatorMiddleware)),
);
