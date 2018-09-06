import { Middleware } from "redux";

export const actionCreatorMiddleware: Middleware = store => next => action => {
  return next({
    type: action.type,
    payload: action.payload,
  })
}