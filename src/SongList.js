import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import setlistService from './services/setlistService'

const ContainerRight = styled.div`
  float: right;
  width: 50%;
  background: #daf7a6;
`

const ContainerLeft = styled.div`
  float: left;
  width: 50%;
  background: #daf7a6;
`

const List = styled.ul``

const Song = styled.li`
  list-style-type: none;
  border: 2px solid palevioletred;
  border-radius: 5px;
  margin: 2px;
`
const Button = styled.button`
  border: 2px solid palevioletred;
  border-radius: 5px;
  margin: 2px;
`

const SongList = props => {
  const [existingList, setExistingList] = useState([])
  const [listBuilder, setListBuilder] = useState([])
  const [newListName, setNewListName] = useState('')

  const transferToList = (item, origin) => {
    if (origin === 'left') {
      setExistingList(existingList.filter(listItem => listItem !== item))
      setListBuilder(listBuilder.concat(item))
    }
    if (origin === 'right') {
      setListBuilder(listBuilder.filter(listItem => listItem !== item))
      setExistingList(existingList.concat(item))
    }
  }

  const generateSongList = list => {
    if (list === 'left') {
      return (
        <List>
          {existingList.map(item => {
            return (
              <Song onClick={() => transferToList(item, list)}>
                {item.name} - {item.key}
              </Song>
            )
          })}
        </List>
      )
    }
    if (list === 'right') {
      return (
        <List>
          {listBuilder.map(item => {
            return (
              <Song onClick={() => transferToList(item, list)}>
                {item.name} - {item.key}
              </Song>
            )
          })}
        </List>
      )
    }
  }

  const handleSetlistChange = event => {
    const setlistName = event.target.value
    setExistingList(
      props.setlists.filter(setlist => setlist.name === setlistName)[0].songs
    )
  }

  const handListNewNameChange = event => {
    const newListName = event.target.value
    setNewListName(newListName)
  }

  const saveSetlist = () => {
    setlistService.sendSetlist(listBuilder, newListName)
    setListBuilder([])
  }

  return (
    <div>
      <ContainerLeft>
        <div>
          <select onChange={handleSetlistChange}>
            {props.setlists.map(setlist => {
              return <option value={setlist.name}>{setlist.name}</option>
            })}
          </select>
        </div>
        {generateSongList('left')}
      </ContainerLeft>
      <ContainerRight>
        <div>
          New setlist:
          <input
            type='text'
            value={newListName}
            onChange={handListNewNameChange}
          ></input>
          <Button onClick={saveSetlist}>SAVE SETLIST</Button>
        </div>
        {generateSongList('right')}
      </ContainerRight>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    setlists: state.setlists
  }
}

export default connect(mapStateToProps)(SongList)
