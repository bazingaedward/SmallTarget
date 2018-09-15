import * as types from '../constants/ActionTypes'

export const addTask = (title, intro) => {
    return { type: types.ADD_TASK, title, intro }
}

export const editTask = (title, intro) => {
    return { type: types.ADD_TASK, title, intro }
}

export const delTask = taskId => {
    return { type: types.DELETE_TASK, taskId }
}
