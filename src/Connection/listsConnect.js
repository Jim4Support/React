import axios from 'axios';
import { getTasksAction } from "../Store/taskReducer";

export function getListTasks(id) {
    return function(dispatch) {
        axios.get(`http://localhost:4000/lists/${id}/tasks?all=true`)
        .then(res => dispatch(getTasksAction({tasks: res.data, id})))
    }
}

export function getCollection() {
    return axios.get("http://localhost:4000/api/collection/today")
        .then(res => res.data)
}

export function getLists() {
    return axios.get("http://localhost:4000/api/lists")
        .then(res => res.data)
}