const GET_TASKS = 'GET_TASKS';
const POST_TASK = 'POST_TASK';
const PATCH_TASK = 'PATCH_TASK';
const DELETE_TASK = 'DELETE_TASK';

export function taskReducer(state={}, action) {
    switch (action.type) {
        case GET_TASKS:
            return {...state, [+action.payload.id]: action.payload.tasks}
        case POST_TASK:
            return {...state, [action.payload.id]: action.payload.tasks}
        case PATCH_TASK:
            return {...state, [action.payload.id]: action.payload.tasks}
        case DELETE_TASK:
            return {...state, [action.payload.listId]: state[action.payload.listId]
                .filter(t => t.id !== action.payload.id)}
        default:
            return state
    }
}

export const getTasksAction = (payload) => ({type: GET_TASKS, payload});
export const postTaskAction = (payload) => ({type: POST_TASK, payload});
export const patchTaskAction = (payload) => ({type: PATCH_TASK, payload});
export const deleteTaskAction = (payload) => ({type: DELETE_TASK, payload});