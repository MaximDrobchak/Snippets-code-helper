import React from "react";
import Button from "../Button";

import { connect } from "react-redux";
import { doFetchStories } from "../../actions/story";

const applyQueryState = query => () => ({
  query
});

class SearchStories extends React.Component {
  state = {
    query: ""
  };

  componentDidMount() {
    this.input.focus();
  }

  onSubmit = e => {
    const { query } = this.state;
    if (query) {
      this.props.onFetchStories(query);

      this.setState(applyQueryState(""));
    }
    e.preventDefault();
  };

  onChange = e => {
    const { value } = e.target;
    this.setState(applyQueryState(value));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          ref={node => (this.input = node)}
          type="text"
          value={this.state.query}
          onChange={this.onChange}
        />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchStories: query => dispatch(doFetchStories(query))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchStories);
