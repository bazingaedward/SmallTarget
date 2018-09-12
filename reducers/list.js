import {
  ADD_TASK,
} from '../constants/ActionTypes'

const initialState = {
  dataList: [
    {
      title: '小目标',
      intro: '快来添加你的第一个任务吧',
    }
  ]
}

export default function List(state=initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
          dataList: [
            ...state.dataList,
            {
              title: action.title,
              intro: action.intro
            }
          ]
        }

    default:
      return state
  }
}
