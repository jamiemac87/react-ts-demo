import * as React from 'react';
import { Provider } from "react-redux";
import { initStore } from "../store";
import { ConnectedApp } from "./app";

export const Root = () => (
  <Provider store={initStore({ name: 'Jamie' })}>
    <ConnectedApp greeting="Hello" />
  </Provider>
);