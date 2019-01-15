import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { tasks } from './reducers/tasks'
import logger from 'redux-logger'



const reducers = combineReducers({
  tasks
})


const middleware = [
  logger,
  thunk,
]


export default createStore(reducers, applyMiddleware(...middleware))