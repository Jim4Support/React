import React from "react";
import './App.css';
import Main from './Components/Main/Main.js';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  
  /* class Task {
    constructor(id, dueDate, done, name, description) {
      if (typeof name === 'object') {
        Object.assign(this, name);
      } else {
        this.id = genId();
        this.dueDate = dueDate || null;
        this.done = done || false;
        this.name = name;
        this.description = description || null;
      }
    }

    toString() {
      return `${this.id} ${this.dueDate} ${this.done} ${this.name} ${this.description}`;
    }
  } */

  /* let state = [
    new Task(1, new Date('2022-08-29'), false, 'hometask', null),
    new Task(2, new Date('2022-08-30'), false, 'officetask', 'make office work'),
    new Task(3, new Date('2022-08-29'), true, 'shopping', 'buy vegetables'),
    new Task(4, null, true, 'walk', 'go for a walk'),
    new Task(5, new Date('2022-08-26'), false, 'CSS Figma', 'to do adaptive mobile first'),
  ]; */

  

  // function deleteTask(id) {
  //   const newArray = tasks.filter((t) => t.id !== id);
  //   setTasks(newArray);
  // }

  return (
    <div className="todoapp">
      <Header />
      <div className='content'>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;