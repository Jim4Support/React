import React, { useEffect, useState } from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import { getTasks } from "./Connection/tasksConnect.js";
import TaskList from './Components/TaskList/TaskList.jsx';
import List from "./Components/Lists/List";

export function AppRoute() {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
        getTasks().then(tasks => setTasks(tasks.data))
    }, [tasks.length])

  return (
    <Routes>
        <Route path="/today" element={<TaskList tasks={tasks} setTasks={setTasks}/>}/>
        <Route path="/todo-list" element={<List />}/>
    </Routes>
 );
}

// TodayTasksPage - список задач на сьогодні, прострочені(перші) і не виконані(на сьогодні) + лейбл на ІД ліста з посиланням на поточний ліст
// TodoListPage Створення лістів  
