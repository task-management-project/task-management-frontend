import request from '../utils/request';

export const VIEW_ALL_TEAM = 'VIEW_ALL_TEAM'
export const CREATE_TEAM = 'CREATE_TEAM'
export const DELETE_USER_FROM_TEAM = 'DELETE_USER_FROM_TEAM'
export const BUILD_TEAM = 'BUILD_TEAM'

export const buildTeam = () => {
  return (dispatch) => {
    request('/users')
    .then(result => dispatch({type: BUILD_TEAM, payload: result.data}))
    .catch(err => console.log(err))
  }
}

export const viewAllTeam = (teamId) => {
  return (dispatch) => {
    request(`/`)
    .then(result => dispatch({type: VIEW_ALL_TEAM, payload: result.data}))
    .catch(err => console.log(err))
  }
}

export const createTeam = (userIds, teamName, teamDesc, id) => {
  return (dispatch) => {
    request(`/users/${id}/team`, 'post', {
      name: teamName,
      description: teamDesc
    })
    .then(result => dispatch({type: CREATE_TEAM, payload: result.data}))
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