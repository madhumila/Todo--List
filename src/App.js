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
      <div className='todo-list-heading'><h1>Create Your Todo-List</h1></div>
      <div className="content">
        <AddTaskForm onAddTask={(newTask) => setTasks([newTask,...tasks])} />
        <TaskList tasks={tasks} onDeleteTask={handleDelete} />
      </div>
      
    </div>
  )
}

export default App
