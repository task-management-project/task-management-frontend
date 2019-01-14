import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { tasks } from './reducers/tasks'



const reducers = combineReducers({
  tasks
})


export default createStore(reducers, applyMiddleware(thunk))