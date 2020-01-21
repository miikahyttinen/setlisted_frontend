import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import './styles/popup.css'
import songService from './services/songService'

const Button = styled.button`
  background: #e6f2ff;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: inline-block;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`

const inputStyle =
  'border: 2px solid palevioletred; 1em;border-radius: 3px; margin: 10px; display: block !important;'

const Input = styled.input`
  ${inputStyle}
`
const KeyInput = styled.input`
  ${inputStyle}
  margin-left: 20px;
`

const EditSongPopup = props => {
  const [songName, setSongName] = useState(props.name)
  const [songArtist, setSongArtist] = useState(props.artist)
  const [songKey, setSongKey] = useState(props.songKey)

  const handleSongNameChange = event => {
    const songName = event.target.value
    setSongName(songName)
  }

  const handleSongArtistChange = event => {
    const songArtist = event.target.value
    setSongArtist(songArtist)
  }

  const handleSongKeyChange = event => {
    const songKey = event.target.value
    setSongKey(songKey)
  }

  const saveEditedSong = () => {
    const Song = {
      id: props.id,
      name: songName,
      artist: songArtist,
      key: songKey
    }
    songService.sendEditedSong(Song)
  }

  return (
    <Popup position='bottom center' trigger={<Button>EDIT</Button>}>
      Name:
      <Input
        type='text'
        value={songName}
        onChange={handleSongNameChange}
      ></Input>
      Artist:
      <Input
        type='text'
        value={songArtist}
        onChange={handleSongArtistChange}
      ></Input>
      Key:
      <Input type='text' value={songKey} onChange={handleSongKeyChange}></Input>
      <Button onClick={saveEditedSong}>SAVE</Button>
    </Popup>
  )
}

export default EditSongPopup
