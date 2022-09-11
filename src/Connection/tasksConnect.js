import axios from "axios";
import { deleteTaskAction } from "../Store/taskReducer";

export function getTasks() {
    return function () {
        axios.get("http://localhost:4000/tasks")
    }
}

export function deleteTask(id) {
    return function (dispatch) {
    axios.delete(`http://localhost:4000/tasks/${id}`)
    .then(res => dispatch(deleteTaskAction(...res.data)))
    }
}

export function postTask(task) {
    return axios.post("http://localhost:4000/tasks" , task)
}

export function patchTask(id, task) {
    return axios.patch(`http://localhost:4000/tasks/${id}`, task)
}