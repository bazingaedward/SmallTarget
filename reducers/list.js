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

    case ADD_TASK: { // 添加任务
      return {
        dataList: [
          ...state.dataList,
          {
            title: action.title,
            intro: action.intro
          }
        ]
      }
    }
      
    case DELETE_TASK: { // 删除任务
      let filterList = [];

      state.dataList.forEach((task, idx) => {

        if(idx !== action._taskId){
          filterList.push(task);
        }

      })

      return {
        dataList: filterList
      }
    }

    case EDIT_TASK: { // 编辑任务
      let filterList = state.dataList.map((task, idx) => {

        if(idx === action._taskId){
          return Object.assign({}, task, {
            title: action.title,
            intro: action.intro
          })
        }else {
          return task;
        }

      })

      return {
        dataList: filterList
      }

    }
  
    default:
      return state
  }
}
