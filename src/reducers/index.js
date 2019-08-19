import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import addInfo from './addInfo'
import collectInfoSagaRuntime from '../sagas/collectInfoSagas'

const rootReducer = addInfo

const sagas = {
  collectInfoSagaRuntime
}

// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
)

// // then run the saga
// sagaMiddleware.run(sagas)

export {
  rootReducer,
  store
}