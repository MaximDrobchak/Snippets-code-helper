import React, { Component } from "react";

import list from "../ReactOfControlState/array.json";
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedItem: []
    };
  }

  onArchive = name => {
    const { archivedItem } = this.state;

    this.setState({ archivedItem: [...archivedItem, name] });
  };

  render() {
    // const {list} = this.props
    const { archivedItem } = this.state;
    const filteredList = list.filter(byArchived(archivedItem));
    return (
      <ul>
        {filteredList.map(item => (
          <li key={item.name}>
            {item.name}
            <span>
              <button type="button" onClick={() => this.onArchive(item.name)}>
                Archive
              </button>
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
class SearchableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  componentDidMount() {
    this.input.focus();
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;

    const filteredList = list.filter(byQuery(query));

    return (
      <div>
        <Search
          refFocus={node => (this.input = node)}
          query={query}
          onChange={this.onChange}
        >
          Search List:
        </Search>
        <List list={filteredList} />
      </div>
    );
  }
}

const Search = ({ query, onChange, children, refFocus }) => (
  <div>
    {children}
    <input ref={refFocus} type="text" value={query} onChange={onChange} />
  </div>
);

const byQuery = query => item =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

const byArchived = archivedItem => item => !archivedItem.includes(item.name);

export default SearchableList;
