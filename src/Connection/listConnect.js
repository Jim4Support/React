import axios from "axios";

export function getListOfTasks() {
    return axios.get("http://localhost:4000/collections/today")
}