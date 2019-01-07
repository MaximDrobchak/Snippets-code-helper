import React, { Component } from "react";

class SearchableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  render() {
    const { list } = this.props;
    const { query } = this.state;
    return (
      <div>
        <Search query={query} onChange={this.onChange}>
          Search List:
        </Search>
        <List list={list || [].filter(byQuery(query))} />
      </div>
    );
  }
}

const Search = ({ query, onChange, children }) => (
  <div>
    {children}
    <input type="text" value={query} onChange={onChange} />
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

const byQuery = query => item =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

export default SearchableList;
