import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import queryString from 'query-string'
import axios from 'axios'
import TrackList from './TrackList'

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

const App = () => {
  const [accessToken, setAccessToken] = useState('')
  const [spotifyData, setSpotifyData] = useState({})

  useEffect(() => {
    setAccessToken(queryString.parse(window.location.search).access_token)
    axios
      .get('http://localhost:3001/spotify')
      .then(response => setSpotifyData(response.data))
  }, [])

  return (
    <Page>
      <a href='https://setlisted-oauth-service.herokuapp.com/login'>
        <Button>Login with Spotify</Button>
      </a>
      <div>
        <h1>Welcome to Setlisted</h1>
        <TrackList spotifyData={spotifyData} />
      </div>
    </Page>
  )
}

export default App
