import React, { useState } from 'react';
import './TaskList.css';
import { deleteTask, getTasks } from '../../Connection/tasksConnect';
import TaskForm from '../TaskForm/TaskForm';

export default function TaskList({ tasks, setTasks }) {
    const [update, setUpdate] = useState(null);
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);
    // const [show, setShow] = useState(true);

    function checkValue(e) {
        const value = e.target.value;
        const task = tasks.find(t => t.id === +value);
        if (task.done) {
            task.done = !task.done;
            
        } else {
            task.done = !task.done;
        }
        setChecked(!checked);
    }

    function delTask(id) {
        deleteTask(id).then(getTasks).then(tasks => setTasks(tasks.data))
    }

    // function changeTaskStatus(id) {
    //     const task = tasks.find(t => t.id === id)
    //     patchTask(task).then(getTasks).then(tasks => setTasks(tasks.data))
    // }

    function updateTask(id, name) {
        setUpdate(id)
        setValue(name)
    }

    function saveChanges(id) {
        let newChanges = [...tasks].map(title => {
            if (title.id === id) {
                title.name = value.trim();
            }
            return title;
        })
        setTasks(newChanges);
        setUpdate(null);
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

    function overdue(dueDate) {
        if (dueDate !== null) {
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            return now > new Date(dueDate);
        }
    }

    function changeBack(dueDate, done) {
        return (overdue(dueDate) && !done) ? 'background-red' : done ? 'background-green' : 'background-grey';
    }

    function changeDateColor(dueDate, done) {
        return (overdue(dueDate) && !done) ? 'red' : '';
    }

    function changeStatus(done) {
        return done ? 'line-through' : 'none';
    }

    // function hideTasks(id, done) {
    //     const newArray = tasks.filter(t => t.id === id && t.done === true);
    //     setTasks(newArray)
    //     setShow(!show)
    // }

    // const today = new Date();

    console.log(tasks);
    return (
        <main className='tasklist'>
            <h1>To Do List</h1>
            {/* <div id="show">
                <button type="button" id="showTasks" onClick={() => hideTasks()}>Show/Hide done</button>
            </div> */}
            <div>
                {
                    tasks.map(item => (
                        <div key={item.id} >
                            {
                                update === item.id ? <div><input onChange={(e) => setValue(e.target.value)} value={value} /></div> : ''
                            }

                            {
                                update === item.id ? <div><button onClick={() => saveChanges(item.id)}>Save changes</button></div> : <div>
                                    <div>
                                        <hr className={changeBack(item.dueDate, item.done)} />
                                        <div style={{ color: changeDateColor(item.dueDate, item.done) }}>
                                            {correctDate(item.dueDate)}
                                        </div>
                                        <div className="checkDone">
                                            <label style={{ textDecoration: changeStatus(item.done) }}>
                                                <input onChange={(e) => checkValue(e)} type="checkbox" name="checkfield" checked={item.done} value={item.id} />
                                                {item.name}</label>
                                        </div>
                                        <div className='desc'>
                                            {item.description ? item.description : '~no description~'}
                                        </div>
                                        <div className='delete'>
                                            <button className='update' onClick={() => updateTask(item.id, item.name)}>change</button>
                                            <button onClick={() => delTask(item.id)}>delete</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
            <TaskForm tasks={tasks} setTasks={setTasks}/>
        </main>
    )
}