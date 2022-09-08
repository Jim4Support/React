import React, {useState} from 'react';
import { postTask } from '../../Connection/tasksConnect';
import './TaskForm.css'

export default function TaskForm({tasks, setTasks}) {

  const [newTask, setNewTask] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newList, setNewList] = useState('');
 
  const handleInputChange = (event) => {
    event.preventDefault()
    if (newTask.trim() === null || newTask.trim() === '') {
      alert('Please, enter a task');
    } else {
    const task = {
      dueDate: onPushDate(newDate) || null,
      done: false,
      name: newTask.trim(),
      description: newDesc.trim() || null,
      listId: newList ? newList : alert('Please, choose one of the options')
    }
    postTask(task).then(tasks => setTasks(tasks.data))
  }
  setNewTask('');
  setNewDesc('');
  setNewDate('');
  setNewList('');
  }

  function onPushDate(dueDate) {
    if (dueDate) {
        const day = new Date(dueDate).getDate();
        const month = new Date(dueDate).getMonth();
        const year = new Date(dueDate).getFullYear();
        return new Date(year, month, day);
    } else return null;
}
// tasks.map(task => task)
//console.log(tasks);

    return (
        <footer className='taskform'>
          
            <form onSubmit={handleInputChange}>
                <div><input name="dueDate" type="date" value={newDate}
                onChange={(e) => setNewDate(e.target.value)}/></div>
                <div><input name="name" type="text" placeholder="Add a new task" value={newTask}
                onChange={(e) => setNewTask(e.target.value)}/></div>
                <div><input name="description" type="text" placeholder="Add a description" value={newDesc} 
                onChange={(e) => setNewDesc(e.target.value)}/></div>
                <div>
                  <select onChange={(e) => setNewList(e.target.value)}>
                    <option value={null}>Choose list</option>
                    <option value={1}>list1</option>
                    <option value={2}>list2</option>
                    <option value={3}>list3</option>
                  </select>
                </div>
                <input type="submit" value="Add"/>  
            </form>
           
        </footer>
    )
}
