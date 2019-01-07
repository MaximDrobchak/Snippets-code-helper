import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { todos } = this.props;
    return <TodoListThree todos={todos} />;
  }
}

const TodoItem = ({ todo }) => (
  <div>
    <span>{todo.name}</span>
    <span>{todo.id}</span>
  </div>
);

const TodoList = ({ todos, isLoadingTodos }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
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

// Порядок применения должен быть именно такой потому что
// todos.length будет выдавать ошибку на null обэкт

const TodoListOne = withTodosEmpty(TodoList);
const TodoListTwo = withTodosNull(TodoListOne);
const TodoListThree = withLoadingIndecator(TodoListTwo);

export default App;
