import React from "react";

import { createStore } from "redux";

// сщздания хранилища на основе редюсера
const store = createStore(reducer, []);

const TODO_ADD = "TODO_ADD";
const TODO_TOGGLE = "TODO_TOGGLE";

function doAddTodo(id, name) {
  return {
    type: TODO_ADD,
    todo: { id, name }
  };
}

function doToggleTodo(id) {
  return {
    type: TODO_TOGGLE,
    todo: { id }
  };
}

// редюсер
function reducer(state, action) {
  switch (action.type) {
    case TODO_ADD: {
      return applyAddTodo(state, action);
    }
    case TODO_TOGGLE: {
      return applyToggleTodo(state, action);
    }
    default:
      return state;
  }
}

// действие toggle
function applyToggleTodo(state, action) {
  return state.map(
    todo =>
      todo.id === action.todo.id
        ? Object.assign({}, todo, { cpmpleted: !todo.cpmpleted })
        : todo
  );
}

// действия добавления
function applyAddTodo(state, action) {
  const todo = Object.assign({}, action.todo, { completed: false });
  return state.concat(action.todo);
}

let idState = 0;
class ZeroLessonState extends React.Component {
  // добавить в хранилище
  onClick = () => {
    store.dispatch(doAddTodo(idState++, "learn redux"));
  };

  // Установить прослушку
  unsubscribe = () => {
    store.subscribe(() => {
      console.log(store.getState());
    });
  };

  onToggle = () => {
    store.dispatch(doToggleTodo("0"));
  };
  render() {
    return (
      <div>
        <h1>Store Dispatch</h1>
        <button onClick={this.onClick}>Dispatch</button>
        <h1>Store Subscribe</h1>
        <button onClick={this.unsubscribe}>Subscribe</button>
        <h1>Store Toggle</h1>
        <button onClick={this.onToggle}>Toggle</button>
      </div>
    );
  }
}

export default ZeroLessonState;
