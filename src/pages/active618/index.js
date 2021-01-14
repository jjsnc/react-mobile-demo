import React from "react";
import ReactDOM from "react-dom";
import Router from './router/index.js';
import store from './store';
import { Provider } from "react-redux";
import "@/utils/rem";
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
