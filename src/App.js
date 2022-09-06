import React from "react";
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import { Route, Routes } from "react-router-dom";
import TaskListCollection from "./Components/TaskList/TaskListCollection";
import TaskList from "./Components/TaskList/TaskList";

function App() {

  return (
    <div className="todoapp">
      <Sidebar />
      <div className='content'>
        <Routes>
          <Route path="/today" element={<TaskListCollection />} />
          <Route path="/todo-list/:id" element={<TaskList />} />
        </Routes>
      </div>
    </div>
  );
}
// TodayTasksPage - список задач на сьогодні, прострочені(перші) і не виконані(на сьогодні) 
// + лейбл на ІД ліста з посиланням на поточний ліст
// TodoListPage Створення лістів 

export default App;
