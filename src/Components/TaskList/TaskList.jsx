import React, { useState } from 'react';
import './TaskList.css';

export default function TaskList({tasks, setTasks}) {
    const [update, setUpdate] = useState(null);
    const [value, setValue] = useState('');

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

    return (
        <main className='tasklist'>
            <h1>To Do List</h1>
            <hr className="hr" size="5px"/>
            <div id="show">
                <button type="button" id="showTasks">Show/Hide done</button>
            </div>
            <div>
                {
                    tasks.map(item => (
                        <div key={item.id}>
                            {
                                update === item.id ? <div><input onChange={(e) => setValue(e.target.value)} value={value}/></div> : ''
                            }

                            {
                                update === item.id ? <div><button onClick={() => saveChanges(item.id)}>Save changes</button></div> : <div>
                                <div>
                                {correctDate(item.dueDate)} <br/>
                        <label>
                            <input type={'checkbox'}/>
                            {item.name} {item.done}
                            </label>
                            <div>
                            {item.description}
                            </div>
                        </div>
                        <button onClick={ () => updateTask(item.id, item.name)}>change</button>
                        <button onClick={ () => deleteTask(item.id)}>delete</button>
                        </div>
                            }
                        </div>
                    ))
                }
            </div>
        </main>
    )
}