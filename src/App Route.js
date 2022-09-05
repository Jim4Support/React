import React, { useEffect, useState } from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import { getTasks } from "./Connection/tasks.rest.js";
import TaskList from './Components/TaskList/TaskList.jsx';

export function AppRoute() {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
        getTasks().then(tasks => setTasks(tasks.data))
    }, [tasks.length])

  return (
    <Routes>
        <Route path="/today" element={<TaskList tasks={tasks} setTasks={setTasks}/>}/>
    </Routes>
 );
}

// TodayTasksPage - список задач на сьогодні, прострочені(перші) і не виконані(на сьогодні) + лейбл на ІД ліста з посиланням на поточний ліст
// TodoListPage Створення лістів  
