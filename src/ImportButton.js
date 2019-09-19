import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`

const ImportButton = () => {
  return (
    <div>
      <a href='https://setlisted-oauth-service.herokuapp.com/login'>
        <Button>Import playlist from Spotify</Button>
      </a>
    </div>
  )
}

export default ImportButton
