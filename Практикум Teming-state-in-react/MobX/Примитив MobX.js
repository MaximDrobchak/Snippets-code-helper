import React from "react";
import ReactDOM from "react-dom";

import { observable, autorun, action, configure, computed } from "mobx";

configure({ enforceActions: true });

class TodoStore {
  @observable todos = [];

  @action
  addTodo(todo) {
    this.todos.push(todo);
  }

  @computed
  get incopleteTodos() {
    return this.todos.filter(todo => !todo.completed);
  }
}

const todoStore = new TodoStore();

autorun(() => console.log(todoStore.todos.length));

class App extends React.Component {
  onClick = e => {
    this.props.todoStore.addTodos([
      { id: "0", name: "learn redux", completed: true },
      { id: "1", name: "learn mobx", completed: false }
    ]);
  };

  render() {
    const { todos } = this.props.todoStore.todos;

    return (
      <div className="App">
        <h1>Learn mobX</h1>

        <button type="button" onClick={e => this.onClick(e)}>
          Push Store
        </button>

        {(todos || []).map(todo => (
          <div key={todo.id}>{todo.name}</div>
        ))}
      </div>
    );
  }
}

function render() {
  ReactDOM.render(
    <App todoStore={todoStore} />,
    document.getElementById("root")
  );
}

autorun(render);
