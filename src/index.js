import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import spotifyReducer from './reducers/spotifyReducer'
import setlistReducer from './reducers/setlistReducer'
import accessTokenReducer from './reducers/accessTokenReducer'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  spotifyTracks: spotifyReducer,
  setlists: setlistReducer,
  accessToken: accessTokenReducer
})

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

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
