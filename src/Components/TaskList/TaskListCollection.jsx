import React, { useState, useEffect} from 'react';
import './TaskList.css';
import axios from 'axios';
import TaskListContainer from './TaskListContainer.js'

export default function TaskListCollection() {
    const [collection, setCollection] = useState([]);

    async function getCollection() {
        const some = await axios.get("http://localhost:4000/api/collection/today")
        setCollection(some.data);
    }

    useEffect(() => {
        getCollection();
    }, [])

    return (
        <TaskListContainer tasks={collection} setTasks={setCollection}/>
    )
}