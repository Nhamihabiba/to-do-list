import React, { createContext, useState, useEffect } from "react";
import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../api/taskService";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter]=useState("All")
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadTasks = async () => {
        try {
          const data = await fetchTasks();
          setTasks(data);
        } catch (error) {
          console.error("Failed to load tasks:", error);
        } finally {
          setLoading(false);
        }
      };
  
      loadTasks();
    }, []);
  
    
    const addNewTask = async (taskName) => {
      const newTask = { title: taskName, is_completed: false };
      const addedTask = await addTask(newTask);
      setTasks([...tasks, addedTask]);
    };
  
    
    const toggleTaskCompletion = async (taskId) => {
      const taskToUpdate = tasks.find((task) => task.id === taskId);
      const updatedTask = { ...taskToUpdate, is_completed: !taskToUpdate.is_completed };
      await updateTask(taskId, updatedTask);
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? updatedTask : task
        )
      );
    };
  
   
    const removeTask = async (taskId) => {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    };

 
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.is_completed;
    if (filter === "uncompleted") return !task.is_completed;
    return true; 
  });


  return (
    <TaskContext.Provider
      value={{ 
        tasks: filteredTasks, 
        addNewTask,
        toggleTaskCompletion,
        removeTask,
        setFilter,
        filter, }}
    >
      {children}
    </TaskContext.Provider>
  );
};
