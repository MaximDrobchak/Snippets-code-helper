import React from "react";

import list from "../ReactOfControlState/array.json";

const byArchived = archivedItem => item => !archivedItem.includes(item.name);

const withArchived = Component => {
  class WithArchived extends React.Component {
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

      return <Component list={filteredList} onArchive={this.onArchive} />;
    }
  }
  return WithArchived;
};

const List = ({ list, props }) => (
  <ul>
    {list.map(item => (
      <li key={item.name}>
        <span>{item.name}</span>
        <span>
          <button type="button" onClick={() => props.onArchived(item.name)}>
            Archived
          </button>
        </span>
      </li>
    ))}
  </ul>
);
const ListWithArchive = withArchived(List);

const App = ({ list }) => <ListWithArchive list={list} />;

export default App;
