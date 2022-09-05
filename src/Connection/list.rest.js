import axios from "axios";

export function getListOfTasks(listId) {
    return axios.get("http://localhost:4000/lists" + listId)
}