import React from "react";

// Если зависим от свойства TEXT
const getSpecificNotification = text => ({
  info: <Info text={text} />,
  warning: <Warning text={text} />,
  error: <Error text={text} />
});

function Notification({ state, text }) {
  return <div>{getSpecificNotification(text)[state]}</div>;
}

// Если не зависим от свойства TEXT
const NOTIFICATION_STATES = {
  info: <Info />,
  warning: <Warning />,
  error: <Error />
};

const App = ({ state }) => {
  return <div>{NOTIFICATION_STATES[state]}</div>;
};

const Info = ({ text }) => <h3 style={{ color: "blue" }}>{text}</h3>;
const Warning = ({ text }) => <h2 style={{ color: "orange" }}>{text}</h2>;
const Error = ({ text }) => <h1 style={{ color: "red" }}>{text}</h1>;
export default App;
