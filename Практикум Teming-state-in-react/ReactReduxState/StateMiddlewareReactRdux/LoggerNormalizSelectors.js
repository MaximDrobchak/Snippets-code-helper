import React from "react";
import ReactDOM from "react-dom";

import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider, connect } from "react-redux";

// middeleware
import { createLogger } from "redux-logger";
import { schema, normalize } from "normalizr";
import uuid from "uuid/v4";

// schema
const todoSchema = new schema.Entity("todo");

// action types

const TODO_ADD = "TODO_ADD";
const TODO_TOGGLE = "TODO_TOGGLE";
const FILTER_SET = "FILTER_SET";
const NOTIFICATION_SHOW = "NOTIFICATION_SHOW";
const NOTIFICATION_HIDE = "NOTIFICATION_HIDE";

// todos
const todos = [
  { id: "1", name: "Redux Standalone with advanced Actions" },
  { id: "2", name: "Redux Standalone with advanced Reducers" },
  { id: "3", name: "Bootstrap App with Redux" },
  { id: "4", name: "Naive Todo with React and Redux" },
  { id: "5", name: "Sophisticated Todo with React and Redux" },
  { id: "6", name: "Connecting State Everywhere" },
  { id: "7", name: "Todo with advanced Redux" },
  { id: "8", name: "Todo but more Features" },
  { id: "9", name: "Todo with Notifications" },
  { id: "10", name: "Hacker News with Redux" }
];

// normalized todo data

const normalizedTodos = normalize(todos, [todoSchema]);
console.log(normalizedTodos);

// state normalized Todo List
const initialTodoState = {
  entities: normalizedTodos.entities.todo,
  ids: normalizedTodos.result
};

// selector
function getTodosIds(state) {
  return state.todoState.ids
    .map(id => state.todoState.entities[id])
    .filter(VISIBILITY_FILTERS[state.filterState])
    .map(todo => todo.id);
}

// selector
function getTodo(state, todoId) {
  return state.todoState.entities[todoId];
}

// filters

const VISIBILITY_FILTERS = {
  SHOW_COMPLETED: item => item.completed,
  SHOW_INCOMPLETED: item => !item.completed,
  SHOW_ALL: item => true
};

// reducers

function todoReducer(state = initialTodoState, action) {
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

// normalized apply
function applyAddTodo(state, action) {
  const todo = { ...action.todo, completed: false };
  const entities = { ...state.entities, [todo.id]: todo };
  const ids = [...state.ids, action.todo.id];
  return { ...state, entities, ids };
}

// normalized apply
function applyToggleTodo(state, action) {
  const id = action.todo.id;
  const todo = state.entities[id];
  const toggleTodo = { ...todo, completed: !todo.completed };
  const entities = { ...state.entities, [id]: toggleTodo };
  return { ...state, entities };
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

// action creators

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

// store

const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer
});

const logger = createLogger();

const store = createStore(rootReducer, undefined, applyMiddleware(logger));

// components

class TodoCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onChangeName = e => this.setState({ value: e.target.value });

  onCreateTodo = e => {
    this.props.onAddTodo(this.state.value);
    this.setState({ value: "" });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onCreateTodo}>
          <input
            type="text"
            placeholder="Add Todo ..."
            value={this.state.value}
            onChange={this.onChangeName}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

function Filter({ onSetFilter }) {
  return (
    <div>
      Show
      <button type="button" onClick={() => onSetFilter("SHOW_ALL")}>
        All
      </button>
      <br />
      <button type="button" onClick={() => onSetFilter("SHOW_COMPLETED")}>
        Completed
      </button>
      <br />
      <button type="button" onClick={() => onSetFilter("SHOW_INCOMPLETED")}>
        Incompleted
      </button>
      <br />
    </div>
  );
}

function TodoApp() {
  return (
    <div>
      <ConnectedFilter />
      <ConnectedTodoCreate />
      <ConnectedTodoList />
    </div>
  );
}

function TodoList({ todosAsIds }) {
  return (
    <div>
      {todosAsIds
        ? todosAsIds.map(todoId => (
            <ConnectedTodoItem key={todoId} todoId={todoId} />
          ))
        : null}
    </div>
  );
}

function TodoItem({ todo, onToggleTodo }) {
  const { name, id, completed } = todo;
  return (
    <div>
      {name}
      <button type="button" onClick={() => onToggleTodo(id)}>
        {completed ? "Incomplete" : "Complete"}
      </button>
    </div>
  );
}

function mapStateToPropsList(state) {
  return {
    todosAsIds: getTodosIds(state)
  };
}

function mapStateToPropsItem(state, props) {
  return {
    todo: getTodo(state, props.todoId)
  };
}

function mapDispatchToPropsItem(dispatch) {
  return {
    onToggleTodo: id => dispatch(doToggleTodo(id))
  };
}

function mapDispatchToPropsCreate(dispatch) {
  return {
    onAddTodo: name => dispatch(doAddTodo(uuid(), name))
  };
}

function mapDispatchToPropsFilter(dispatch) {
  return {
    onSetFilter: filterType => dispatch(doSetFilter(filterType))
  };
}

const ConnectedFilter = connect(
  null,
  mapDispatchToPropsFilter
)(Filter);

const ConnectedTodoCreate = connect(
  null,
  mapDispatchToPropsCreate
)(TodoCreate);

const ConnectedTodoList = connect(mapStateToPropsList)(TodoList);

const ConnectedTodoItem = connect(
  mapStateToPropsItem,
  mapDispatchToPropsItem
)(TodoItem);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
