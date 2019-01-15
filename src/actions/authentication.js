export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'

export const setAuthetication = claim => ({
  type: SET_AUTHENTICATION,
  payload: claim
})