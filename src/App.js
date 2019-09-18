import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import queryString from 'query-string'
import TrackList from './TrackList'
import { connect } from 'react-redux'
import { initializeTracks } from './reducers/spotifyReducer'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`

const Page = styled.div`
  background: #daf7a6;
  height: 100%;
  text-align: center;
`

const App = props => {
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    setAccessToken(queryString.parse(window.location.search).access_token)
    props.initializeTracks()
  }, [])

  console.log('ROW 31 APP', props)

  return (
    <Page>
      <a href='https://setlisted-oauth-service.herokuapp.com/login'>
        <Button>Login with Spotify</Button>
      </a>
      <div>
        <h1>Welcome to Setlisted</h1>
        <TrackList tracks={props.tracks} />
      </div>
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
