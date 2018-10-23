import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('list task actions', () => {

  it('should create ADD_TASK action', () => {
    expect({type: types.ADD_TASK}).toEqual({
      type: types.ADD_TASK,
    })
  })

})
