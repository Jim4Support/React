const GET_TASKS = 'GET_TASKS';
const POST_TASK = 'POST_TASK';
const PATCH_TASK = 'PATCH_TASK';
const DELETE_TASK = 'DELETE_TASK';

export function taskReducer(state={}, action) {
    switch (action.type) {
        case GET_TASKS:
            return {...state, [action.payload.id]: action.payload.tasks}
        default:
            return state
    }
}

export const getTasksAction = (payload) => ({type: GET_TASKS, payload})