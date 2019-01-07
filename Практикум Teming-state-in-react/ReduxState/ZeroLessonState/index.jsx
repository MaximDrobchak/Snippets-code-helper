import React from "react";

import { createStore } from "redux";

// сщздания хранилища на основе редюсера
const store = createStore(reducer, []);

// редюсер
function reducer(state, action) {
  switch (action.type) {
    case "TODO_ADD": {
      return applyAddTodo(state, action);
    }
    case "TODO_TOGGLE": {
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
  return state.concat(action.todo);
}

let idState = 0;
class ZeroLessonState extends React.Component {
  // добавить в хранилище
  onClick = () => {
    store.dispatch({
      type: "TODO_ADD",
      todo: { id: ++idState, name: "learn redux", completed: false }
    });
  };

  // Установить прослушку
  unsubscribe = () => {
    store.subscribe(() => {
      console.log(store.getState());
    });
  };

  render() {
    return (
      <div>
        <h1>Store Dispatch</h1>
        <button onClick={this.onClick}>Dispatch</button>
        <h1>Store Subscribe</h1>
        <button onClick={this.unsubscribe}>Subscribe</button>
      </div>
    );
  }
}

export default ZeroLessonState;
