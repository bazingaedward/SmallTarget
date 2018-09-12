import * as types from '../constants/ActionTypes'

export const addTask = (title, intro) => {
    return { type: types.ADD_TASK, title, intro }
}
