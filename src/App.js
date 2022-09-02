import React, { useState } from "react";
import './App.css';
import TaskList from './Components/TaskList/TaskList.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import TaskForm from './Components/TaskForm/TaskForm.jsx';

function App() {
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      dueDate: new Date('2022-09-02'),
      done: false,
      name: 'hometask',
      description: null
    },
    {
      id: 2,
      dueDate: new Date('2022-09-02'),
      done: false,
      name: 'officetask',
      description: 'make office work'
    },
    {
      id: 3,
      dueDate: new Date('2022-08-21'),
      done: true,
      name: 'shopping',
      description: 'buy vegetables'
    },
    {
      id: 4,
      dueDate: null,
      done: true,
      name: 'walk',
      description: 'go for a walk'
    },
    {
      id: 5,
      dueDate: new Date('2022-08-26'),
      done: false,
      name: 'CSS Figma',
      description: 'to do adaptive mobile first'
    },
  ]);

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
