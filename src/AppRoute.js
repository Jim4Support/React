import React, { useEffect, useState } from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import TaskListCollection from "./Components/TaskList/TaskListCollection";
import TaskList from "./Components/TaskList/TaskList";

export function AppRoute() {

  return (
    <Routes>
        <Route path="/today" element={<TaskListCollection />}/>
        <Route path="/todo-list" element={<TaskList />}/>
    </Routes>
 );
}

// TodayTasksPage - список задач на сьогодні, прострочені(перші) і не виконані(на сьогодні) + лейбл на ІД ліста з посиланням на поточний ліст
// TodoListPage Створення лістів  
