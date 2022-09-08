import React from "react";
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import { Route, Routes } from "react-router-dom";
import ToDoLists from "./Components/TaskList/ToDoLists";
import List from "./Components/Lists/List";
import TaskForm from './Components/TaskForm/TaskForm'

function App() {

  return (
    <div className="todoapp">
      <Sidebar />
      <div className='content'>
        <Routes>
          <Route path="/today" element={<ToDoLists />} />
          <Route path="/todo-list/:id" element={<List />}/>
        </Routes>
      <TaskForm />
      </div>
    </div>
  );
}
// TodayTasksPage - список задач на сьогодні, прострочені(перші) і не виконані(на сьогодні) 
// + лейбл на ІД ліста з посиланням на поточний ліст
// TodoListPage Створення лістів 

export default App;
