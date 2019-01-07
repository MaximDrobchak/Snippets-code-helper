import React from "react";

// Многоуровневая розложена на 2 части
function List({ list }) {
  const isList = list && list.length;

  return (
    <div>
      {isList ? (
        <div>
          {list.map(item => (
            <ListItem item={item} />
          ))}
        </div>
      ) : (
        <NoList isNull={!list} isEmpty={list && !list.length} />
      )}
    </div>
  );
}
// 2-я часть
function NoList({ isNull, isEmpty }) {
  return !isNull && isEmpty && <p>Sorry, the list is empty.</p>;
}

// одноуровневая
function FooBarOrFooOrBar({ isFoo, isBar }) {
  const key = `${isFoo}-${isBar}`;
  return (
    <div>
      {
        {
          "true-true": <FooBar />,
          "true-false": <Foo />,
          "false-true": <Bar />,
          "false-false": null
        }[key]
      }
    </div>
  );
}

FooBarOrFooOrBar.propTypes = {
  isFoo: React.PropTypes.boolean.isRequired,
  isBar: React.PropTypes.boolean.isRequired
};

const ListItem = ({ item }) => <p>{item}</p>;
const Foo = () => <p>Foo</p>;
const FooBar = () => <p>FooBar</p>;
const Bar = () => <p>Bar</p>;
