import React, {useState, useEffect} from "react"
import TaskItem from "../TaskList/TaskItem";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function List() {
    const [listOfTasks, setListOfTasks] = useState([]);

    let { id } = useParams();

    async function getListOfTasks() {
        const listElement = await axios.get(`http://localhost:4000/lists/${id}/tasks?all=true`)
        setListOfTasks(listElement.data)
    }

    useEffect(() => {
      getListOfTasks();
  }, [])

    return (
        <TaskItem tasks={listOfTasks} setTasks={setListOfTasks}/>
    )
}