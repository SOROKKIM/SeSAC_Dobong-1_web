import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({ reducer: rootReducer });
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
