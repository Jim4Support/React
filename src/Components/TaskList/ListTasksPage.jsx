import React, { useState, useEffect } from "react"
import TaskItem from "./TaskItem";
import { useParams } from "react-router-dom";
import TaskForm from "../TaskForm/TaskForm";
import { patchTask, deleteTask } from '../../Connection/tasksConnect';
import { getListTasks } from "../../Connection/listsConnect";


export default function ListTasksPage() {
    let [tasks, setTasks] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getListTasks(id).then(setTasks)
    }, [id])

    const [showDone, setShowDone] = useState(false);

    if (!showDone) {
        tasks = tasks.filter(t => !t.done)
    }

    function onDelete(id) {
        deleteTask(id).then(setTasks(tasks.filter(t => t.id !== id)))
    }

    function onUpdate(id, body) {
        patchTask(id, body).then(setTasks(tasks.map(task => task.id === id ? { ...tasks, ...body } : task)))
    }

    const taskItemProps = { onDelete, onUpdate }

    return (
        <>
            <main className='tasklist'>
                <h1>To Do List</h1>
                <div id="show">
                    <button type="button" id="showTasks" onClick={() => setShowDone((prev) => !prev)}>Show/Hide done</button>
                </div>
                {tasks.map(item => (<TaskItem key={item.id} item={item} {...taskItemProps} />))}
            </main>
            <TaskForm />
        </>
    )
}
