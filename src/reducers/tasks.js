import {GET_MEMBER_TASKS, 
        ADD_TASK, 
        ADD_TASK_FAILED,
        DELETE_TASK, 
        UPDATE_TASK} from '../actions/tasks'

const initialState = []

const tasks = (state = initialState, {type, payload}) => {
  switch(type) {
    case GET_MEMBER_TASKS:
      return payload
    case ADD_TASK:
      return [...state, payload]
    case ADD_TASK_FAILED:
      return [{...state, showErrorMessage: true, payload}]
    case DELETE_TASK:
      return state.filter(task => task.id !== payload.id)
    case UPDATE_TASK:
      return state // This needs more work to function appropriately.
    default: 
      return state
  }
}

export default tasks