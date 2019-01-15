import {VIEW_ALL_TEAM, UPDATE_TEAM, DELETE_USER_FROM_TEAM} from '../actions/manager'

const initialState = []

const manager = (state = initialState, {type, payload}) => {
  switch(type) {
    case VIEW_ALL_TEAM:
      return state //Needs to be updated
    case UPDATE_TEAM:
      return state //Needs to be updated
    case DELETE_USER_FROM_TEAM:
      return state //Needs to be updated
    default:
      return state
  }
}

export default manager