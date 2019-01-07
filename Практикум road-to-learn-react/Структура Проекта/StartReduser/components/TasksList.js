import React from "react";
import { connect } from "react-redux";

function TasksList({ tasks = [] }) {
  return (
    <div>
      {tasks.map((task, key) => {
        return (
          <div className="task" key={key}>
            {task.username}
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  const tasks = state.task;
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TasksList);
