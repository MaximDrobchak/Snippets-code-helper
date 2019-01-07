import React from "react";
import withRoot from "./styles/withRoot";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import * as actions from "./actions";

import TasksList from "./Test/TasksList";

const tasks = [
  {
    id: 0,
    name: "vasiya"
  },
  {
    id: 1,
    name: "petiya"
  }
];
const store = configureStore();
store.dispatch(actions.setTasks(tasks));
const App = () => (
  <Provider store={store}>
    <HashRouter>
      <TasksList />
    </HashRouter>
  </Provider>
);
module.hot.accept();
export default withRoot(App);
