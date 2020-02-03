import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import spotifyReducer from './reducers/spotifyReducer'
import setlistReducer from './reducers/setlistReducer'
import accessTokenReducer from './reducers/accessTokenReducer'
import songReducer from './reducers/songReducer'
import selectSetlistReducer from './reducers/selectSetlistReducer'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  spotifyTracks: spotifyReducer,
  setlists: setlistReducer,
  accessToken: accessTokenReducer,
  songs: songReducer,
  selectSetlist: selectSetlistReducer
})

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
