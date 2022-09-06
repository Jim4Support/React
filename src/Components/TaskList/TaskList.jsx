import React from 'react';
import './TaskList.css';

export default function TaskList({ update,
    item,
    checkValue,
    delTask,
    updateTask,
    saveChanges,
    correctDate,
    changeBack,
    changeDateColor,
    changeStatus}) {
    console.log(item);
    return (
        <main className='tasklist'>
            <h1>To Do List</h1>
            {/* <div id="show">
                <button type="button" id="showTasks" onClick={() => hideTasks()}>Show/Hide done</button>
            </div> */}
            <div>
                <div key={item.id} >
                    {/* {
                                update === item.id ? <div><input onChange={(e) => setValue(e.target.value)} value={value} /></div> : ''
                            } */}

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
            </div>
        </main>
    )
}