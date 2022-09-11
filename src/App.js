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

export default App;
