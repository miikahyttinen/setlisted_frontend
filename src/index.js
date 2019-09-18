import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import spotifyReducer from './reducers/spotifyReducer'
import { createStore, compose, applyMiddleware } from 'redux'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  spotifyReducer,
  composeEnhancer(applyMiddleware(thunk))
)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
