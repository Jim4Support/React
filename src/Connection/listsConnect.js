import axios from 'axios';

export function getListTasks(id) {
    return axios.get(`http://localhost:4000/lists/${id}/tasks?all=true`)
        .then(res => res.data);
}

export function getCollection() {
    return axios.get("http://localhost:4000/api/collection/today")
        .then(res => res.data)
}

export function getLists() {
    return axios.get("http://localhost:4000/api/lists")
        .then(res => res.data)
}