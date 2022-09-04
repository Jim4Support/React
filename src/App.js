import React, { useEffect, useState } from "react";
import './App.css';
import { getTasks } from "./Connection/tasks.rest.js";
import TaskList from './Components/TaskList/TaskList.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import TaskForm from './Components/TaskForm/TaskForm.jsx';

function App() {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
        getTasks().then(tasks => setTasks(tasks.data))
    }, [tasks.length])

  return (
    <div className="todoapp">
      <Sidebar />
      <div className='content'>
        <TaskList tasks={tasks} setTasks={setTasks}/>
        <TaskForm tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default App;
