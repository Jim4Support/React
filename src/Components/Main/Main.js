import React from 'react';
import './Main.css';

export default function Main() {
    return (
        <main className='appmain'>
            <h1>To Do List</h1>
            <hr className="hr" size="5px" />
            <div id="show">
                <button type="button" id="showTasks">Show/Hide done</button>
            </div>
        </main>
    )
}