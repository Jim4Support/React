import React, {useState} from 'react';
import { postTask, getTasks} from '../../Connection/tasksConnect';
import './TaskForm.css'

export default function TaskForm({tasks, setTasks}) {
 
  const [newTask, setNewTask] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newDate, setNewDate] = useState('');
 
  const handleInputChange = (event) => {
    event.preventDefault()
    if (newTask.trim() === null || newTask.trim() === '') {
      alert('Please, enter a task');
    } else {
    const task = {
      dueDate: onPushDate(newDate) || null,
      done: false,
      name: newTask.trim(),
      description: newDesc.trim() || null
    }
    postTask(task).then(getTasks).then(tasks => setTasks(tasks.data))
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

    return (
        <footer className='taskform'>
          
            <form onSubmit={handleInputChange}>
                <div><input name="dueDate" type="date" value={newDate}
                onChange={(e) => setNewDate(e.target.value)}/></div>
                <div><input name="name" type="text" placeholder="Add a new task" value={newTask}
                onChange={(e) => setNewTask(e.target.value)}/></div>
                <div><input name="description" type="text" placeholder="Add a description" value={newDesc} 
                onChange={(e) => setNewDesc(e.target.value)}/></div>
                <input type="submit" value="Add"/>  
            </form>
           
        </footer>
    )
}
