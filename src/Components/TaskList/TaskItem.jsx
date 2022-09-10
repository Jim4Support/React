import React from 'react';
import './TaskItem.css';
import { NavLink } from 'react-router-dom';

function overdue(dueDate) {
    const now = new Date();
    now.setHours(0, 0, 0);
    console.log(now);
    return (dueDate !== null) && now > new Date(dueDate).setHours(12, 0, 0) ? true : false;
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

export default function TaskItem({ item, onDelete, onUpdate }) {
    return (
        <div>
            <hr className={(overdue(item.dueDate) && !item.done) ? 'background-red' : item.done ? 'background-green' : 'background-grey'} />
            <div style={{ color: (overdue(item.dueDate) && !item.done) ? 'red' : '' }}>
                {correctDate(item.dueDate)}
            </div>
            <div className="checkDone">
                <label style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                    <input onChange={() => onUpdate(item.id, item)} type="checkbox" name="checkfield" checked={item.done} onClick={() => item.done = !item.done} />
                    {item.name}</label>
            </div>
            <div className='desc'>
                {item.description ? item.description : '~no description~'}
            </div>
            <div className="listInfo">
                {
                    item.list ?
                        <NavLink to={`/todo-list/${item.listId}`}>
                            {item.list.name}
                        </NavLink> : ''
                }
            </div>
            <div className='delete'>
                {/* <button className='update' onClick={() => updateTask(item.id, item.name)}>change</button> */}
                <button onClick={() => onDelete(item.id)}>delete</button>
            </div>
        </div>
    )
}