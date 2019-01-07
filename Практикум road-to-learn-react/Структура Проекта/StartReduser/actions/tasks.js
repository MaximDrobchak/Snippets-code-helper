import * as actionTypes from "../constants/actionTypes";
export function setTasks(tasks) {
  return {
    type: actionTypes.TASKS_SET,
    tasks
  };
}
