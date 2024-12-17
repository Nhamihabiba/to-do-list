import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext"; 
import './TaskFilters.css'  
function TaskFilters() {
  const { setFilter, filter } = useContext(TaskContext);

  return (
    <div className="filters">
      <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>Toutes</button>
      <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Complétées</button>
      <button onClick={() => setFilter("uncompleted")} className={filter === "uncompleted" ? "active" : ""}>Non complétées</button>
    </div>
  );
}

export default TaskFilters;
