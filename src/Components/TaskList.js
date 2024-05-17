import React, { useState } from "react";
import "../Styles/TaskList.css";

const TaskList = ({ tasks, onDeleteTask }) => {
  const [taskStatus, setTaskStatus] = useState(Array(tasks.length).fill(false));

  if (tasks.length === 0) {
    return (
      <div className="empty-message">
        <p>Your todo list is empty.</p>
      </div>
    );
  }

  const toggleTaskStatus = (index) => {
    const newTaskStatus = [...taskStatus];
    newTaskStatus[index] = !newTaskStatus[index];
    setTaskStatus(newTaskStatus);
  };
  return (
    <div className="task-list-container">
      <div className="task-list">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`task-card ${taskStatus[index] ? "completed" : ""}`}
          >
            <div className="task-card-outer">
              <div className="task-check">
                <input
                  type="checkbox"
                  id={`task-${index}`}
                  onChange={() => toggleTaskStatus(index)}
                />
              </div>

              <div className="task-details">
                <h2>{task.title}</h2>
                <p style={{color:"white"}}>{task.description}</p>
              </div>
              <div className="task-delete">
                <i
                  class="fa-solid fa-trash"
                  style={{ color: "#f60300", marginLeft: "10px" }}
                  onClick={() => onDeleteTask(index)}
                >
                  {" "}
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;