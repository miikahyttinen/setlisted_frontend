import React, { useEffect } from 'react'
import queryString from 'query-string'
import SongList from './SongList'
import ImportList from './ImportList'
import { connect } from 'react-redux'
import { initializeSpotifyTracks } from './reducers/spotifyReducer'
import { initializeSetlists } from './reducers/setlistReducer'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Home from './Home'
import styled from 'styled-components'

const Page = styled.div`
  background: #daf7a6;
  height: 100%;
  text-align: center;
`
const linkStyle = {
  textDecoration: 'none',
  padding: '10px'
}

const App = props => {
  useEffect(() => {
    props.initializeSetlists()
    if (queryString.parse(window.location.search).access_token !== undefined) {
      props.initializeSpotifyTracks()
    }
  }, [])

  return (
    <Page>
      <Router>
        <div>
          <div>
            <Link style={linkStyle} to='/'>
              HOME
            </Link>
            <Link style={linkStyle} to='/setlists'>
              SETLISTS
            </Link>
            <Link style={linkStyle} to='/import'>
              IMPORT
            </Link>
          </div>

          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/setlists' render={() => <SongList />} />
          <Route exact path='/import' render={() => <ImportList />} />
        </div>
      </Router>
    </Page>
  )
}

const mapStateToProps = state => {
  return {
    tracks: state
  }
}

export default connect(
  mapStateToProps,
  { initializeSpotifyTracks, initializeSetlists }
)(App)
