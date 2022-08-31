import React, {useState} from 'react';
import './Footer.css'

export default function Footer() {
    const inc = (init = 0) => () => ++init
  const genId = inc();
   /*  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!newTask) {
      alert('Please, enter a task');
      return;
    }
    const task = {
      id: genId(),
      value: newTask,
    };

    setTasks((oldList) => [...oldList, task]);
    setNewTask("");
  }
    <div className="app">
      <h1>My Todo List</h1>
      <input type="text" placeholder="Add a new task..." value={newTask}
        onChange={(e) => setNewTask(e.target.value)}/>
      <button onClick={() => addTask()}>Add</button>
    </div> */
    return (
        <footer className='appfooter'>
            <form name="task-input" id="form">
                <input name="dueDate" type="date" />
                <input name="name" type="text" placeholder="Add a new task" />
                <span id="errorInput"></span>
                <input name="description" type="text" placeholder="Add a description" />
                <button name="submit-task" type="submit">Add</button>
            </form>
        </footer>
    )
}