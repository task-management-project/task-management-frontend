import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tasks from './reducers/tasks'
import manager from './reducers/manager'
import users from './reducers/users'
import authentication from './reducers/authentication'
import logger from 'redux-logger'



const reducers = combineReducers({
  tasks,
  manager,
  users,
  authentication
})


const middleware = [
  logger,
  thunk,
]


export default createStore(reducers, applyMiddleware(...middleware))