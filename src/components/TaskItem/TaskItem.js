import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import "./TaskItem.css";

function TaskItem({ task }) {
  const { toggleTaskCompletion, removeTask } = useContext(TaskContext);

  return (
    <div
      className={`task-item ${task.completed ? "completed" : ""}`}
      onClick={() => toggleTaskCompletion(task.id)}
    >
      <div class ="cont">  
      <input
        type="radio"
        checked={!task.is_completed}
        onChange={() => toggleTaskCompletion(task.id)} 
      />  
      <span>{task.title}</span>
      </div>
      <button onClick={(e) => { e.stopPropagation(); removeTask(task.id); }}>
        ✕
      </button>
    </div>
  );
}

export default TaskItem;
