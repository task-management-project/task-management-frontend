
import request from '../utils/request'

export const GET_MEMBER_TASKS = 'GET_MEMBER_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const ADD_TASK_FAILED = 'ADD_TASK_FAILED'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'


export const getMemberTasks = (memberId) => {
  return (dispatch) => {
    request(`/users/${memberId}/tasks`)
      .then(result => dispatch({ type: GET_MEMBER_TASKS, payload: result.data.data }))
      .catch(err => console.log(err))
  }
}


export const addTask = (memberId, taskObj, callback) => {
  console.log(taskObj)
  return (dispatch) => {
    request(`/users/${memberId}/tasks`,'post', taskObj)
      .then(result => dispatch({ type: ADD_TASK, payload: result.data.data }))
      .then(callback)
      .catch(err => console.log(err))
  }
}

export const deleteTask = (memberId, taskId) => {
  return (dispatch) => {
    request(`/users/${memberId}/tasks/${taskId}`, 'delete')
      .then(result => dispatch({ type: DELETE_TASK, payload: result.data }))
      .then(_ => dispatch(getMemberTasks(memberId)))
      .catch(err => console.log(err))
  }
}

export const updateTask = (memberId, taskId, taskObj) => {
  return (dispatch) => {
    request(`/users/${memberId}/tasks/${taskId}`, 'put', taskObj)
    .then(result => dispatch({type: UPDATE_TASK, payload: result.data}))
    .then(_ => dispatch(getMemberTasks(memberId)))
    .catch(err => console.log(err))
  }
}