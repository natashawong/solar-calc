import { combineReducers, createStore } from 'redux'
import addInfo from './addInfo'
import submit from './submit'

const rootReducer = combineReducers({
  addInfo,
  submit
}) 

const store = createStore(addInfo, submit)

export {
  rootReducer,
  store
}