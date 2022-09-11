import React, { useEffect } from "react"
import TaskItem from "./TaskItem";
import { useParams } from "react-router-dom";
import TaskForm from "../TaskForm/TaskForm";
// import { patchTask, deleteTask, getTasks } from '../../Connection/tasksConnect';
import { getListTasks } from "../../Connection/listsConnect";
import { useDispatch, useSelector } from "react-redux";


export default function ListTasksPage() {
    let { id } = useParams();
    id = parseInt(id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListTasks(id));
    }, [id])
    
    // let [tasks, setTasks] = useState([]);

    // useEffect(() => {
    //     getListTasks(id).then(setTasks)
    // }, [id])

    // const [showDone, setShowDone] = useState(false);
    const tasks = useSelector(state => state.tasks[id]) || []


    // if (!showDone) {
    //     tasks = tasks.filter(t => !t.done)
    // }

    function onDelete(id) {
        //deleteTask(id).then(setTasks(tasks.filter(t => t.id !== id)))
    }

    function onUpdate(id, body) {
        //patchTask(id, body).then(setTasks(tasks.map(task => task.id === id ? { ...tasks, ...body } : task)))
    }

    const taskItemProps = { onDelete, onUpdate }

    console.log(tasks);

    return (
        <>
            <main className='tasklist'>
                <h1>To Do List</h1>
                <div id="show">
                    {/* <button type="button" id="showTasks" onClick={() => setShowDone((prev) => !prev)}>Show/Hide done</button> */}
                </div>
                {tasks.map(item => (<TaskItem key={item.id} item={item} {...taskItemProps}/>))}
            </main>
            <TaskForm tasks={tasks} listId={id}/>
        </>
    )
}
