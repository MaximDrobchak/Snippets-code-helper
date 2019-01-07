import React, { Component } from "react";

import ThemeContext from "./ContextCreate";

class ContextAPI extends Component {
  render() {
    return (
      <ThemeContext.Provider value={"green"}>
        <Compon />
      </ThemeContext.Provider>
    );
  }
}

const Compon = () => (
  <div>
    <h1>ContextAPI</h1>
  </div>
);
const colorTheme = "red";

const Compon1 = () => (
  <ThemeContext.Consumer>
    {colorTheme => <div style={{ color: colorTheme }}>Hello World</div>}
  </ThemeContext.Consumer>
);

export default ContextAPI;
