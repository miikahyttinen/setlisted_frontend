import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import './styles/popup.css'
import songService from './services/songService'

const Button = styled.button`
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
  left-margin: 10px;
`

const inputStyle =
  'border: 2px solid palevioletred; 1em;border-radius: 3px; margin: 10px;'

const Input = styled.input`
  ${inputStyle}
`
const KeyInput = styled.input`
  ${inputStyle}
  margin-left: 20px;
`

const NewSongPopup = () => {
  const [newSongName, setNewSongName] = useState('')
  const [newSongArtist, setNewSongArtist] = useState('')
  const [newSongKey, setNewSongKey] = useState('')

  const handleNewSongNameChange = event => {
    const newSongName = event.target.value
    setNewSongName(newSongName)
  }

  const handleNewSongArtistChange = event => {
    const newSongArtist = event.target.value
    setNewSongArtist(newSongArtist)
  }

  const handleNewSongKeyChange = event => {
    const newSongKey = event.target.value
    setNewSongKey(newSongKey)
  }

  const saveSong = () => {
    const newSong = {
      name: newSongName,
      artist: newSongArtist,
      key: newSongKey
    }
    songService.sendOneSong(newSong)
  }

  return (
    <Popup position='bottom center' trigger={<Button>NEW SONG</Button>}>
      Name:
      <Input
        type='text'
        value={newSongName}
        onChange={handleNewSongNameChange}
      ></Input>
      Artist:
      <Input
        type='text'
        value={newSongArtist}
        onChange={handleNewSongArtistChange}
      ></Input>
      Key:
      <KeyInput
        type='text'
        value={newSongKey}
        onChange={handleNewSongKeyChange}
      ></KeyInput>
      <Button onClick={saveSong}>SAVE</Button>
    </Popup>
  )
}

export default NewSongPopup
