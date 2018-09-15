import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK
} from '../constants/ActionTypes'

const initialState = {
  dataList: [
    {
      title: '小目标',
      intro: '快来添加你的第一个任务吧',
    }
  ]
}

export default function ListReducer(state=initialState, action) {

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
      
    // case DELETE_TASK:
    //     return {

    //     }
      //   case DELETE_TODO:
      //   return state.filter(todo =>
      //     todo.id !== action.id
      //   )
  
      // case EDIT_TODO:
      //   return state.map(todo =>
      //     todo.id === action.id ?
      //       { ...todo, text: action.text } :
      //       todo
      //   )
    default:
      return state
  }
}
