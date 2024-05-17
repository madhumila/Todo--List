import React from "react";
import "../Styles/TaskList.css";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list-container">
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-card" key={index}>
            <div className="task-card-outer">
              <div className="task-check">
                <input type="checkbox" id={`task-${index}`} />
              </div>

              <div className="task-details">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
              </div>
              <div className="task-delete">
                <i
                  class="fa-solid fa-trash"
                  style={{ color: "#b10b0b", marginLeft: "10px" }}
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
