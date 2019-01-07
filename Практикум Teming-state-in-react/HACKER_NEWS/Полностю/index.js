// https://github.com/taming-the-state-in-react/taming-the-state-in-react-portuguese/blob/master/manuscript/05-redux-advanced/03-redux-architecture.md

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
