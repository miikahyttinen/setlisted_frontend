import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import './styles/popup.css'
import { addSong } from './reducers/songReducer'
import { connect } from 'react-redux'

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

const NewSongPopup = props => {
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
    props.addSong(newSong)
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

const mapStateToProps = state => {
  return {
    allSongs: state.songs
  }
}

export default connect(mapStateToProps, { addSong })(NewSongPopup)
