import React from "react";

import { compose } from "recompose";

import todos from "../ReactOfControlState/array.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // const { todos } = this.props;
    return <TodoListWithConditionalRendering todos={todos} />;
  }
}

const TodoItem = ({ todo }) => (
  <div>
    <span>{todo.name}</span>
    <span>Lala</span>
  </div>
);

const TodoList = ({ todos, isLoadingTodos }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.name} todo={todo} />
      ))}
    </div>
  );
};

const withTodosNull = Component => props =>
  !props.todos ? null : <Component {...props} />;

const withTodosEmpty = Component => props =>
  !props.todos.length ? (
    <div>
      <p>You have no Todos ...</p>
    </div>
  ) : (
    <Component {...props} />
  );

const withLoadingIndecator = Component => ({ isLoadingTodos, ...others }) =>
  isLoadingTodos ? (
    <div>
      <p>Loading ...</p>
    </div>
  ) : (
    <Component {...others} />
  );

const withConditionalRenderings = compose(
  withLoadingIndecator,
  withTodosNull,
  withTodosEmpty
);
const TodoListWithConditionalRendering = withConditionalRenderings(TodoList);
export default App;
