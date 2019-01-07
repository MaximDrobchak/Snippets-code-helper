import * as actionTypes from "../constants/actionTypes";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TASKS_SET:
      return setTasks(state, action);
  }
  return state;
}

function setTasks(state, action) {
  const { tasks } = action;
  return [...state, ...tasks];
}
