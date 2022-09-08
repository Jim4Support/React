import React, { useState, useEffect} from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from '../TaskForm/TaskForm';

function getCollection() {
        return axios.get("http://localhost:4000/api/collection/today")
            .then(res => res.data)
    }

export default function TasksOnToday() {
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        getCollection().then(setTasks);
    }, [])

    return (
        <>
            <main className='tasklist'>
                <h1>To Do List</h1>
                {tasks.map(item => (<TaskItem key={item.id} item={item}/>))}
            </main>
            <TaskForm />
        </>
    )
}