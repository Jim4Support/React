import React, {useState} from 'react';
import './TaskForm.css'

const inc = (init = 10) => () => ++init
const genId = inc();

export default function TaskForm({tasks, setTasks}) {
 
  const [newTask, setNewTask] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newDate, setNewDate] = useState('');
 
  const handleInputChange = (event) => {
    event.preventDefault()
    if (newTask.trim() === null || newTask.trim() === '') {
      alert('Please, enter a task');
    } else {
    setTasks([...tasks, {
      id: genId(),
      dueDate: onPushDate(newDate) || null,
      done: false,
      name: newTask.trim(),
      description: newDesc.trim() || null
    }
  ]);
}
  setNewTask('');
  setNewDesc('');
  setNewDate('');
  }

  function onPushDate(dueDate) {
    if (dueDate) {
        const day = new Date(dueDate).getDate();
        const month = new Date(dueDate).getMonth();
        const year = new Date(dueDate).getFullYear();
        return new Date(year, month, day);
    } else return null;
}

console.log(tasks);
    return (
        <footer className='taskform'>
            <form onSubmit={handleInputChange}>
                <input name="dueDate" type="date" value={newDate}
                onChange={(e) => setNewDate(e.target.value)}/>
                <input name="name" type="text" placeholder="Add a new task" value={newTask}
                onChange={(e) => setNewTask(e.target.value)}/>
                <input name="description" type="text" placeholder="Add a description" value={newDesc} 
                onChange={(e) => setNewDesc(e.target.value)}/>
                <input type="submit" value="Add"/>  
            </form>
           
        </footer>
    )
}
