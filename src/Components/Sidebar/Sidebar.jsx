import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <header className="sidebar">
            <a href='/today'>Today</a> <br />
            <a href='/todo-list/:id'>ToDo List</a>
        </header>
    )
}
