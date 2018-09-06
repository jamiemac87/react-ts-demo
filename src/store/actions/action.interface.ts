import { Action as reduxAction } from "redux";

export interface Action extends reduxAction {
  type: string;
}