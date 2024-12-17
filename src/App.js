import React from "react";
import { TaskContext, TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskItem from "./components/TaskItem/TaskItem";
import "./App.css";
import TaskFilters from "./components/TaskFilter/TaskFilters";

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <h1>Todo List</h1>   
        <TaskInput />
        <TaskFilters />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

function TaskList() {
  const { tasks, loading, toggleTaskCompletion, removeTask } =
    React.useContext(TaskContext);

  if (loading) return <p>Loading...</p>;   

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTaskCompletion}
          deleteTask={removeTask}
        />
      ))}
    </div>
  );
}

export default App;
