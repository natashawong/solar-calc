import { createStore } from 'redux'

import addInfo from './addInfo'

const rootReducer = addInfo

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