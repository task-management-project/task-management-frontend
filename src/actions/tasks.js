import axios from 'axios'
import request from '../utils/request'

const baseURL = "localhost:5000"

export const GET_MEMBER_TASKS = 'GET_MEMBER_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'




export const getMemberTasks = (memberId) => {
  return (dispatch) => {
    request(`/users/${memberId}/tasks`)
      .then(result => dispatch({ type: GET_MEMBER_TASKS, payload: result.data.data }))
      .catch(err => console.log(err))
  }
}

export const addTask = (memberId, taskObj) => {
  console.log(taskObj)
  return (dispatch) => {
    request(`/users/${memberId}/tasks`,'post', taskObj)
      .then(result => dispatch({ type: ADD_TASK, payload: result.data.data }))
      .catch(err => console.log(err))
  }
}

export const deleteTask = (memberId, taskId) => {
  return (dispatch) => {
    request(`/users/${memberId}/tasks/${taskId}`, 'delete')
      .then(result => dispatch({ type: DELETE_TASK, payload: result.data }))
      .catch(err => console.log(err))
  }
}

export const updateTask = (memberId, taskId, taskObj) => {
  return (dispatch) => {
    axios.put(`http://${baseURL}/users/${memberId}/tasks/${taskId}`, taskObj)
    .then(result => dispatch({type: ADD_TASK, payload: result.data}))
    .catch(err => console.log(err))
  }
}