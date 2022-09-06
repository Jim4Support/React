import React from "react";
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import { AppRoute } from "./AppRoute";

function App() {

  return (
    <div className="todoapp">
      <Sidebar />
      <div className='content'>
        <AppRoute />
      </div>
    </div>
 );
}

export default App;
