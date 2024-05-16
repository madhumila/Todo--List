import React, { useEffect, useState } from 'react'
import TaskList from './Components/TaskList'
import AddTaskForm from './Components/AddTaskForm'
import "./App.css"

const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

 
  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
};

  return (
    <div>
      <h1>Todo List</h1>
      <div className="content">
        <AddTaskForm onAddTask={(newTask) => setTasks([...tasks, newTask])} />
        <TaskList tasks={tasks} onDeleteTask={handleDelete} />
      </div>
      
    </div>
  )
}

export default App
