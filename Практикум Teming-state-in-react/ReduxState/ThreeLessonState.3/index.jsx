import React from "react";

import { createStore, combineReducers } from "redux";
const TODO_ADD = "TODO_ADD";
const TODO_TOGGLE = "TODO_TOGGLE";
const FILTER_SET = "FILTER_SET";

function todoReducer(state = [], action) {
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

function applyAddTodo(state, action) {
  const todo = Object.assign({}, action.todo, { completed: false });
  return state.concat(todo);
}

function applyToggleTodo(state, action) {
  return state.map(
    todo =>
      todo.id === action.todo.id
        ? Object.assign({}, todo, { completed: !todo.completed })
        : todo
  );
}

function filterReducer(state = "SHOW_ALL", action) {
  switch (action.type) {
    case FILTER_SET: {
      return applySetFilter(state, action);
    }
    default:
      return state;
  }
}

function applySetFilter(state, action) {
  return action.filter;
}

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

function doSetFilter(filter) {
  return {
    type: FILTER_SET,
    filter
  };
}

const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer
});
const store = createStore(rootReducer);

console.log("initial state:");
console.log(store.getState());

let idState = 0;
class ZeroLessonState extends React.Component {
  // добавить в хранилище
  onClick = () => {
    store.dispatch(doAddTodo(idState++, "learn redux"));
  };

  // Установить прослушку
  unsubscribe = () => {
    store.subscribe(() => {
      console.log("store update, current state:");
      console.log(store.getState());
    });
  };

  onToggle = () => {
    store.dispatch(doToggleTodo("0"));
  };

  onFilterTodo = () => {
    store.dispatch(doSetFilter("COMPLETED"));
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
        <h1>Store Filter</h1>
        <button onClick={this.onFilterTodo}>Filter</button>
      </div>
    );
  }
}

export default ZeroLessonState;
