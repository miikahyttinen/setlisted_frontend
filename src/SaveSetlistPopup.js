import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { connect } from 'react-redux'
import styled from 'styled-components'
import setlistService from './services/setlistService'
import './styles/popup.css'

const Button = styled.button`
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
`

const inputStyle =
  'border: 2px solid palevioletred; 1em;border-radius: 3px; margin: 10px;'

const Input = styled.input`
  ${inputStyle}
`

const SaveSetlistPopup = props => {
  const [newSetlistName, setNewSetlistName] = useState('')

  const handleNewSetlistNameChange = event => {
    const newSetlistName = event.target.value
    setNewSetlistName(newSetlistName)
  }

  const saveSetlist = () => {
    setlistService.sendSetlist(props.songs, newSetlistName)
  }

  return (
    <Popup position='right center' trigger={<Button>SAVE SETLIST</Button>}>
      Setlist name:
      <Input
        type='text'
        value={newSetlistName}
        onChange={handleNewSetlistNameChange}
      ></Input>
      <Button onClick={saveSetlist}>Save setlist</Button>
    </Popup>
  )
}

const mapStateToProps = state => {
  return {
    setlists: state.setlists
  }
}

export default connect(mapStateToProps)(SaveSetlistPopup)
