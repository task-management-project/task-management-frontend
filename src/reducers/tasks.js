import {GET_ALL_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK} from '../actions/tasks'

const initialState = []

const tasks = (state = initialState, {type, payload}) => {
  switch(type) {
    case GET_ALL_TASKS:
      return payload
    case ADD_TASK:
      return [...state, payload]
    case DELETE_TASK:
      return state.filter(task => task.id !== payload.id)
    case UPDATE_TASK:
      return state // This needs more work to function appropriately.
    default: 
      return state
  }
}

export default tasks