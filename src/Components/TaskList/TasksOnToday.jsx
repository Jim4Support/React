import React, { useState, useEffect} from 'react';
import { getCollection } from '../../Connection/listsConnect';
import TaskItem from './TaskItem';
import { patchTask, deleteTask } from '../../Connection/tasksConnect';

export default function TasksOnToday() {
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        getCollection().then(setTasks);
    }, [])

    function onDelete(id) {
        deleteTask(id).then(setTasks(tasks.filter(t => t.id !== id)))
    }

    function onUpdate(id, body) {
        patchTask(id, body).then(setTasks(tasks.filter(t => t.id !== id)))
    }

    const taskItemProps = { onDelete, onUpdate }

    return (
        <>
            <main className='tasklist'>
                <h1>To Do List</h1>
                {tasks.map(item => (<TaskItem key={item.id} item={item} {...taskItemProps}/>))}
            </main>
        </>
    )
}