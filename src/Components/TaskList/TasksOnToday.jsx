import React, { useState, useEffect} from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from '../TaskForm/TaskForm';

export default function TasksOnToday() {
    const [collection, setCollection] = useState([]);

    async function getCollection() {
        const todayTasks = await axios.get("http://localhost:4000/api/collection/today")
        setCollection(todayTasks.data);
    }

    useEffect(() => {
        getCollection();
    }, [])

    return (
        <>
        <TaskItem tasks={collection} setTasks={setCollection}/>
        <TaskForm />
        </>
    )
}