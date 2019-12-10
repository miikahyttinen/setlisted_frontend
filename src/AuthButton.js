import React from 'react'
import styled from 'styled-components'
import SpotifyLogo from './graphics/spotify_logo.png'

const Button = styled.button`
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
`
const Image = styled.img`
  widht: 30px;
  height: 30px;
`

const ButtonContainer = styled.div`
  height: auto;
`

const AuthButton = props => {
  return (
    <ButtonContainer>
      <a href='https://setlisted-oauth-service.herokuapp.com/login'>
        <Button>Authorize Setlisted to import playlists from Spotify</Button>
        <Image src={SpotifyLogo} />
      </a>
    </ButtonContainer>
  )
}

export default AuthButton
