import axios from 'axios'

const baseURL = "localhost:5000"

export const GET_MEMBER_TASKS = 'GET_MEMBER_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'




export const getMemberTasks = (memberId) => {
  return (dispatch) => {
    axios.get(`http://${baseURL}/users/${memberId}/tasks`)
      .then(result => dispatch({ type: GET_MEMBER_TASKS, payload: result.data }))
      .catch(err => console.log(err))
  }
}

export const addTask = (memberId, taskObj) => {
  return (dispatch) => {
    axios.post(`http://${baseURL}/users/${memberId}/tasks`, taskObj)
      .then(result => dispatch({ type: ADD_TASK, payload: result.data }))
      .catch(err => console.log(err))
  }
}

export const deleteTask = (memberId, taskId) => {
  return (dispatch) => {
    axios.delete(`http://${baseURL}/users/${memberId}/tasks/${taskId}`)
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