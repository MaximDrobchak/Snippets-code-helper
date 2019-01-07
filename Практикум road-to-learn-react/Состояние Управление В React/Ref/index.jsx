import React, { Component } from "react";

class FocusedInput extends Component {
  componentDidMount() {
    this.input.focus();
  }
  render() {
    return <input ref={node => (this.input = node)} type="text" />;
  }
}

class Search extends Component {
  onSubmit = e => {
    const { value } = this.input;

    this.props.onSearch(value);

    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref={node => (this.input = node)} type="text" />
        <button type="submit">Search</button>
      </form>
    );
  }
}
export default FocusedInput;
