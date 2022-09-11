
import React from "react";
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import { Route, Routes } from "react-router-dom";
import TasksOnToday from "./Components/TaskList/TasksOnToday";
import ListTasksPage from "./Components/TaskList/ListTasksPage";

function App() {

  return (
    <div className="todoapp">
      <Sidebar />
      <div className='content'>
        <Routes>
          <Route path="/today" element={<TasksOnToday />} />
          <Route path="/todo-list/:id" element={<ListTasksPage />}/>
        </Routes>
      </div>
    </div>
  );
}
// TodayTasksPage - список задач на сьогодні, прострочені(перші) і не виконані(на сьогодні) 
// + лейбл на ІД ліста з посиланням на поточний ліст
// TodoListPage Створення лістів 

export default App;
