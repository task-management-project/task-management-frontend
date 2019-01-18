import axios from 'axios'
const baseURL = 'https://polar-savannah-90234.herokuapp.com'
export const CREATE_USER = 'CREATE_USER'
export const GET_ONE_USER = 'GET_ONE_USER'

export const createUser = (userObj, callback) => {
  return (dispatch) => {
    axios.post(`${baseURL}/users`, userObj)
    .then(result => dispatch({type: CREATE_USER, payload: result.data}))
    .then(callback)
    .catch(err => console.log(err))
  }
}

export const getOneUser = (id) => {
  return (dispatch) => {
    axios.get('serverPath')
    .then(result => dispatch({type: GET_ONE_USER, payload: result.data}))
    .catch(err => console.log(err))
  }
}