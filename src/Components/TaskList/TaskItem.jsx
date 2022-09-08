import React, { useState } from 'react';
import { patchTask, deleteTask } from '../../Connection/tasksConnect';
import './TaskItem.css';

export default function TaskItem({ tasks, setTasks }) {
    const [showDone, setShowDone] = useState(false);
    
    if (!showDone) {
        tasks = tasks.filter(t => !t.done)
    }

    function onDelete(id) {
        deleteTask(id).then(setTasks(tasks.filter(t => t.id !== id)))
    }

    function onUpdate(id, body) {
        patchTask(id, body).then(setTasks(tasks.map(task => task.id === id ? { ...tasks, ...body } : task)))
    }

    function overdue(dueDate) {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return (dueDate !== null) && now > new Date(dueDate) ? true : false;
    }

    function correctDate(dueDate) {
        if (dueDate) {
            const noZeroDay = new Date(dueDate).getDate();
            const day = noZeroDay.toString().length === 1 ? (0 + noZeroDay.toString()) : noZeroDay;
            const noZeroMonth = new Date(dueDate).getMonth() + 1;
            const month = noZeroMonth.toString().length === 1 ? (0 + noZeroMonth.toString()) : noZeroMonth;
            const year = new Date(dueDate).getFullYear();
            return `${day}.${month}.${year}`;
        } else return '~no date~';
    }

    console.log(tasks);

    return (
        <main className='tasklist'>
            <h1>To Do List</h1>
            <div id="show">
                <button type="button" id="showTasks" onClick={() => setShowDone((prev) => !prev)}>Show/Hide done</button>
            </div>
            {tasks.map(item => {
                return (
                    <div key={item.id} >
                        {<div>
                            <div>
                                <hr className={(overdue(item.dueDate) && !item.done) ? 'background-red' : item.done ? 'background-green' : 'background-grey'} />
                                <div style={{ color: (overdue(item.dueDate) && !item.done) ? 'red' : '' }}>
                                    {correctDate(item.dueDate)}
                                </div>
                                <div className="checkDone">
                                    <label style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                                        <input onChange={() => onUpdate(item.id, item)} type="checkbox" name="checkfield" checked={item.done} onClick={() => item.done = !item.done} />
                                        {item.name}</label>
                                </div>
                                <div className='desc'>
                                    {item.description ? item.description : '~no description~'}
                                </div>
                                <div className="listInfo">
                                    List: {item.listId}
                                </div>
                                <div className='delete'>
                                    {/* <button className='update' onClick={() => updateTask(item.id, item.name)}>change</button> */}
                                    <button onClick={() => onDelete(item.id)}>delete</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                )

            })}
        </main>
    )
}