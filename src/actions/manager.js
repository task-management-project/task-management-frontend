import request from '../utils/request'

export const VIEW_ALL_TEAM = 'VIEW_ALL_TEAM'
export const UPDATE_TEAM = 'UPDATE_TEAM'
export const DELETE_USER_FROM_TEAM = 'DELETE_USER_FROM_TEAM'

export const viewAllTeam = (teamId) => {
  return (dispatch) => {
    request(`/`)
    .then(result => dispatch({type: VIEW_ALL_TEAM, payload: result.data}))
    .catch(err => console.log(err))
  }
}

export const addUserToTeam = (userId, teamId) => {
  return (dispatch) => {
    //axios call type?
    request('serverPath', 'post')
    .then(result => dispatch({type: UPDATE_TEAM, payload: result.data}))
    .catch(err => console.log(err))
  }
}

export const deleteUserFromTeam = (userId, teamId) => {
  return(dispatch) => {
    request(`/users/${userId}/teams/${teamId}/members`, 'delete')
    .then(result => dispatch({type: DELETE_USER_FROM_TEAM, payload: result.data}))
    .catch(err => console.log(err))
  }
}