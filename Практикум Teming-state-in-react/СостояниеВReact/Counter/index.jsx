import React, { Component } from "react";

const incrementUpdate = prevState => ({ count: prevState.count + 1 });
const decrementUpdate = prevState => ({ count: prevState.count - 1 });
class CounterConteiner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  onIncrement = () => this.setState(incrementUpdate);
  onDecrement = () => this.setState(decrementUpdate);
  render() {
    return (
      <CounterPresenter
        count={this.state.count}
        onIncrememt={this.onIncrement}
        onDecrement={this.onDecrement}
      />
    );
  }
}
const CounterPresenter = props => (
  <div>
    <h2>{props.count}</h2>
    <br />
    <button onClick={props.onIncrememt}>+</button>
    <button onClick={props.onDecrement}>-</button>
  </div>
);

export default CounterConteiner;
