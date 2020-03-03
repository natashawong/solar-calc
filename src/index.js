import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import addInfoReducer from './reducers/addInfoReducer'
import App from './App'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  addInfoReducer,
  applyMiddleware(sagaMiddleware)
  )

sagaMiddleware.run(/*my middleware*/)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)