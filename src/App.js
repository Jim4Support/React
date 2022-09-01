import React, { useState } from "react";
import './App.css';
import Main from './Components/Main/Main.js';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      dueDate: '2022-09-02',
      done: false,
      name: 'hometask',
      description: null
    },
    {
      id: 2,
      dueDate: '2022-09-02',
      done: false,
      name: 'officetask',
      description: 'make office work'
    },
    {
      id: 3,
      dueDate: '2022-08-21',
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
      dueDate: '2022-08-26',
      done: false,
      name: 'CSS Figma',
      description: 'to do adaptive mobile first'
    },
  ]);

  return (
    <div className="todoapp">
      <Header />
      <div className='content'>
        <Main tasks={tasks} setTasks={setTasks}/>
        <Footer tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default App;
