import * as types from '../constants/ActionTypes'

export const addTask = (title, intro) => {
    return { type: types.ADD_TASK, title, intro }
}

export const editTask = (_taskId, title, intro) => {
    return { type: types.EDIT_TASK, _taskId, title, intro }
}

export const delTask = _taskId => {
    return { type: types.DELETE_TASK, _taskId }
}
