import React, { useState, useEffect} from 'react';
import './TaskList.css';
import axios from 'axios';
import TaskItem from './TaskItem';

export default function TaskListCollection() {
    const [collection, setCollection] = useState([]);

    async function getCollection() {
        const some = await axios.get("http://localhost:4000/collections/today")
        setCollection(some.data);
    }

    useEffect(() => {
        getCollection();
    }, [])

    return (
        <TaskItem tasks={collection} setTasks={setCollection}/>
    )
}