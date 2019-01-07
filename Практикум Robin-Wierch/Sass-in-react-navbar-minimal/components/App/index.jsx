import React, { Component } from "react";

import Navigation from "../Navigation";
import "./test.sass";

const LINKS = [
  { label: "Website", to: "https://www.robinwieruch.de/" },
  { label: "Twitter", to: "https://twitter.com/rwieruch" }
];

class App extends Component {
  render() {
    return (
      <div>
        <Navigation links={LINKS} />
        <div className="test"> yarn add node-sass</div>
      </div>
    );
  }
}

export default App;
