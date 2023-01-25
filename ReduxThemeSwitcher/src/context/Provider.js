import React from "react";
import { createStoreHook, Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";
import initialValues from "./store";
export default function ThemeProvider({ children }) {
  const store = createStore(reducers, initialValues);
  return <Provider store={store}>{children}</Provider>;
}
