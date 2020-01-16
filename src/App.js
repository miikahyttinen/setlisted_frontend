import React, { useEffect } from 'react'
import queryString from 'query-string'
import SongList from './SongList'
import ImportList from './ImportList'
import ManageSongs from './ManageSongs'
import { connect } from 'react-redux'
import { initializeSpotifyTracks } from './reducers/spotifyReducer'
import { initializeSetlists } from './reducers/setlistReducer'
import { initializeSongs } from './reducers/songReducer'
import { createAccessToken } from './reducers/accessTokenReducer'
import { setSelectSetlist } from './reducers/selectSetlistReducer'
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
  height: 1000px;
  text-align: center;
`

const NavBar = styled.div`
  padding: 20px;
`

const linkStyle = {
  textDecoration: 'none',
  padding: '10px'
}

const App = props => {
  useEffect(() => {
    props.initializeSetlists()
    props.initializeSongs()
    props.setSelectSetlist('default')
    if (queryString.parse(window.location.search).access_token !== undefined) {
      props.createAccessToken(
        queryString.parse(window.location.search).access_token
      )
    }
  }, [])

  return (
    <Page>
      <Router>
        <div>
          <NavBar>
            <Link style={linkStyle} to='/'>
              HOME
            </Link>
            <Link style={linkStyle} to='/setlists'>
              SETLISTS
            </Link>
            <Link style={linkStyle} to='/import'>
              IMPORT
            </Link>
            <Link style={linkStyle} to='/manage'>
              MANAGE SONGS
            </Link>
          </NavBar>

          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/setlists' render={() => <SongList />} />
          <Route exact path='/import' render={() => <ImportList />} />
          <Route exact path='/manage' render={() => <ManageSongs />} />
        </div>
      </Router>
    </Page>
  )
}

const mapStateToProps = state => {
  return {
    spotifyPlaylistId: state.playlistId,
    accessToken: state.accessToken
  }
}

export default connect(mapStateToProps, {
  initializeSpotifyTracks,
  initializeSetlists,
  initializeSongs,
  createAccessToken,
  setSelectSetlist
})(App)
