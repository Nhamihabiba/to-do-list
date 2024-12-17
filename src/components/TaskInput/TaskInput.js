import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import "./TaskInput.css";

function TaskInput() {
  const [taskName, setTaskName] = useState("");
  const { addNewTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addNewTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="add-button">
        +
      </button>
    </form>
  );
}

export default TaskInput;
