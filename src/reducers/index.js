import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import addInfo from './addInfo'
import submit from './submit'

const rootReducer = combineReducers({
  addInfo,
  submit
}) 

const sagas = {
  // list all sagas
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(sagas)

export {
  rootReducer,
  store
}