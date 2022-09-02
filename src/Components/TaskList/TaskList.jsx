import React, { useState } from 'react';
import './TaskList.css';

export default function TaskList({ tasks, setTasks }) {
    const [update, setUpdate] = useState(null);
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);

    function checkValue(e) {
        var value = e.target.value;
        [...tasks].map(item => {
            if (item.id === value) {
                return item.done = !item.done;
                
            } else {
                return item.done = !item.done;
            }
        });
        setChecked(!checked);
    }

    function deleteTask(id) {
        const newArray = tasks.filter(t => t.id !== id);
        setTasks(newArray);
    }

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
            return now > dueDate;
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

    return (
        <main className='tasklist'>
            <h1>To Do List</h1>
            <div id="show">
                <button type="button" id="showTasks">Show/Hide done</button>
            </div>
            <div>
                {
                    tasks.map(item => (
                        <div key={item.id}>
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
                                        <div class="checkDone">
                                            <label style={{ textDecoration: changeStatus(item.done) }}>
                                                <input onChange={checkValue} type="checkbox" name="checkfield" checked={item.done} value={item.id} />
                                                {item.name}</label>
                                        </div>
                                        <div className='desc'>
                                            {item.description ? item.description : '~no description~'}
                                        </div>
                                        <div className='delete'>
                                            <button className='update' onClick={() => updateTask(item.id, item.name)}>change</button>
                                            <button onClick={() => deleteTask(item.id)}>delete</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </main>
    )
}