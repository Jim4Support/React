import axios from "axios";

export function getTasks() {
    return axios.get("http://localhost:4000/tasks");
}

export function deleteTask(id) {
    return axios.delete("http://localhost:4000/tasks/" + id);
}

export function postTask(task) {
    return axios.post("http://localhost:4000/tasks" , task);
}