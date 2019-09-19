import React, { useEffect } from 'react'
import queryString from 'query-string'
import TrackList from './TrackList'
import { connect } from 'react-redux'
import { initializeTracks } from './reducers/spotifyReducer'
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
    if (queryString.parse(window.location.search).access_token !== undefined) {
      props.initializeTracks()
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
            <Link style={linkStyle} to='/playlists'>
              PLAYLISTS
            </Link>
          </div>

          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/playlists' render={() => <TrackList />} />
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
  { initializeTracks }
)(App)
