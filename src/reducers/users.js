import {CREATE_USER, GET_ONE_USER} from '../actions/users'

const initialState = []

const users = (state = initialState, {type, payload}) => {
  switch(type) {
    case CREATE_USER: //Does create user need to be part of auth and not users?
      return [...state, payload]
    case GET_ONE_USER:
      return [...state, payload]
    default:
      return state
  }
}

export default users