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
        let newChanges = [...tasks].map(t => {
            if (t.id === id) {
                t.name = value;
            }
            return t;
        })
        setTasks(newChanges);
        setUpdate(null);
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
                                update === item.id ? <div><input onChange={(t) => setValue(t.target.value)} value={value}/></div> : ''
                            }

                            {
                                update === item.id ? <div><button onClick={() => saveChanges(item.id)}>Save changes</button></div> : <div>
                                <div>
                                {item.dueDate} <br/>
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
