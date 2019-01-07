import React from "react";
import ReactDOM from "react-dom";

import store from "./store";
import { STORY_ARCHIVE } from "./constants";
import { getReadableStories } from "./selectors/story";

import App from "./components/App";
import "./index.css";

function render() {
  ReactDOM.render(
    <App
      stories={getReadableStories(store.getState())}
      onArchive={id =>
        store.dispatch({
          type: STORY_ARCHIVE,
          id
        })
      }
    />,
    document.getElementById("root")
  );
}
store.subscribe(render);
render();
