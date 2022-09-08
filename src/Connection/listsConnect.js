import setCollection from '../Components/TaskList/TasksOnToday'
import setListOfTasks from '../Components/TaskList/ListTasksPage'
import axios from 'axios';

export async function getCollection() {
    const todayTasks = await axios.get("http://localhost:4000/api/collection/today")
    return setCollection(todayTasks.data);
}

export async function getListOfTasks(id) {
    const listElement = await axios.get(`http://localhost:4000/lists/${id}/tasks?all=true`)
    return setListOfTasks(listElement.data)
}