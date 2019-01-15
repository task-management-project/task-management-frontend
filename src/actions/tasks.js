import axios from 'axios'

export const GET_ALL_TASKS = 'GET_ALL_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

export const getAllTasks = () => {
  return (dispatch) => {
    axios.get('serverPath')
    .then(result => dispatch({type: GET_ALL_TASKS, payload: result.data}))
    .catch(err => console.log(err))
  }
}

export const addTask = (taskObj) => {
  return (dispatch) => {
    axios.post('serverPath', taskObj)
    .then(result => dispatch({type: ADD_TASK, payload: result.data}))
    .catch(err => console.log(err))
  }
}

export const deleteTask = (id) => {
  return (dispatch) => {
    axios.delete('serverPath')
    .then(result => dispatch({type: DELETE_TASK, payload: id}))
    .catch(err => console.log(err))
  }
}

export const updateTask = (taskObj) => {
  return (dispatch) => {
    //axios call here
    //axios.action('serverPath', taskObj)
    //.then(result => dispatch({type: ADD_TASK, payload: result.data}))
    //.catch(err => console.log(err))
  }
}