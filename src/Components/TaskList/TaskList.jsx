import React from 'react';

export default function TaskList({ update,
    tasks,
    checkValue,
    delTask,
    updateTask,
    saveChanges,
    correctDate,
    overdue}) {
    console.log(tasks);
    return (
        <main className='tasklist'>
            <h1>To Do List</h1>
            {/* <div id="show">
                <button type="button" id="showTasks" onClick={() => hideTasks()}>Show/Hide done</button>
            </div> */}
            {tasks.map(item => {
                return (
                <div key={item.id} >
                    {/* {
                                update === item.id ? <div><input onChange={(e) => setValue(e.target.value)} value={value} /></div> : ''
                            } */}

                    {
                        // update === item.id ? <div><button onClick={() => saveChanges(item.id)}>Save changes</button></div> : 
                        <div>
                            <div>
                                <hr className={(overdue(item.dueDate) && !item.done) ? 'background-red' : item.done ? 'background-green' : 'background-grey'} />
                                <div style={{ color: (overdue(item.dueDate) && !item.done) ? 'red' : '' }}>
                                    {correctDate(item.dueDate)}
                                </div>
                                <div className="checkDone">
                                    <label style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                                        <input onChange={(e) => checkValue(e)} type="checkbox" name="checkfield" checked={item.done} value={item.id} />
                                        {item.name}</label>
                                </div>
                                <div className='desc'>
                                    {item.description ? item.description : '~no description~'}
                                </div>
                                <div>
                                    listId: {item.listId}
                                </div>
                                <div className='delete'>
                                    <button className='update' onClick={() => updateTask(item.id, item.name)}>change</button>
                                    <button onClick={() => delTask(item.id)}>delete</button>
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