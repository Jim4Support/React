import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { patchTask, deleteTask, getTasks } from '../../Connection/tasksConnect';
import './TaskList.css';

export default function TaskItem() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(res => setTasks(res.data))
    }, [tasks.length])

    function onDelete(id) {
        deleteTask(id).then(res => setTasks(tasks.filter(t => t.id !== res.id)))
    }
    console.log(tasks);

    function onUpdate(id, task) {
        patchTask(id, task).then(res => setTasks(tasks.map(t => t.id === id ? res.data : t)))
        console.log(task);
    }

    function overdue(dueDate) { // worked
        const now = new Date().setHours(0, 0, 0, 0);
        return (dueDate !== null) && now > new Date(dueDate) ? true : false;
    }
    
    function correctDate(dueDate) { // worked
        if (dueDate) {
            const noZeroDay = new Date(dueDate).getDate();
            const day = noZeroDay.toString().length === 1 ? (0 + noZeroDay.toString()) : noZeroDay;
            const noZeroMonth = new Date(dueDate).getMonth() + 1;
            const month = noZeroMonth.toString().length === 1 ? (0 + noZeroMonth.toString()) : noZeroMonth;
            const year = new Date(dueDate).getFullYear();
            return `${day}.${month}.${year}`;
        } else return '~no date~';
    }

    return (
        <main className='tasklist'>
            <h1>To Do List</h1>
            { tasks.map(item => {
                    return (
                        <div key={item.id} >
                            { <div>
                                <div>
                                    <hr className={(overdue(item.dueDate) && !item.done) ? 'background-red' : item.done ? 'background-green' : 'background-grey'}/>
                                    <div style={{ color: (overdue(item.dueDate) && !item.done) ? 'red' : '' }}>
                                        {correctDate(item.dueDate)}
                                    </div>
                                    <div className="checkDone">
                                        <label style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                                            <input onChange={() => onUpdate(item.id, item)} type="checkbox" name="checkfield" checked={item.done} value={item.id} />
                                            {item.name}</label>
                                    </div>
                                    <div className='desc'>
                                        {item.description ? item.description : '~no description~'}
                                    </div>
                                    <div>
                                        listId: {item.listId}
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