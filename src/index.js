import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import addInfoReducer from './reducers/addInfoReducer'
import App from './App'

const store = createStore(addInfoReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)