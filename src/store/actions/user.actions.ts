import { Action } from "./action.interface";

export const UPDATE_NAME = '[user] update user name';

export class UpdateNameActionCreator implements Action {
  type = UPDATE_NAME;

  constructor(public payload: string) { }
}

export type UserAction = UpdateNameActionCreator;