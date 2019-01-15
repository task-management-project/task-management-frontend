import {SET_AUTHENTICATION} from '../actions/authentication'

const AUTHETICATION_INITIAL_STATE = {
  user: null,
  pending: true
}

export const authentication = (state = AUTHETICATION_INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case SET_AUTHENTICATION:
      return {user: payload, pending: false}
    default:
    return state
  }
} // Call this with the information from the server, not locally.