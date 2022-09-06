import React from 'react';
import List from '../Lists/List';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <header className="sidebar">
            <List />
            <a href="/today">Today</a> <br />
            <a href="/todo-list">ToDo List</a>
        </header>
    )
}
