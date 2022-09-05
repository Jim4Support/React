import React, { useEffect, useState } from "react";
import './App.css';
import { getTasks } from "./Connection/tasks.rest.js";
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import { AppRoute } from "./App Route";

function App() {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
        getTasks().then(tasks => setTasks(tasks.data))
    }, [tasks.length])

  return (
    <div className="todoapp">
      <Sidebar tasks={tasks} setTasks={setTasks}/>
      <div className='content'>
        <AppRoute />
      </div>
    </div>
 );
}

export default App;
