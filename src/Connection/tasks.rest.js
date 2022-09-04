import axios from "axios";

export function getTasks() {
    return axios.get("http://localhost:4000/tasks");
}

export function getTask(id) {
    return axios.get("http://localhost:4000/tasks/" + id)
}

export function deleteTask(id) {
    return axios.delete("http://localhost:4000/tasks/" + id);
}

export function postTask(task) {
    return axios.post("http://localhost:4000/tasks" , task);
}

export function patchTask(task) {
    return axios.patch("http://localhost:3000/tasks/" + task.id, task)
}