import React from "react";

const List = ({item}) => <li>{item}</li>

// HOC declaration
function withLoadingIndicator(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component {...props} />;
    }

    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  };
}

// Usage
const ListWithLoadingIndicator = withLoadingIndicator(List);

const App = props => (
  <ListWithLoadingIndicator isLoading={props.isLoading} list={props.list} />
);
