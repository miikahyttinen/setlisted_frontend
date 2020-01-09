import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import setlistService from './services/setlistService'
import NewSongPopup from './NewSongPopup'
import SelectSetlistPopup from './SelectSetlistPopup'
import SaveSetlistPopup from './SaveSetlistPopup'

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
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
`

const SelectorContainer = styled.div`
  height: 24px;
`

const SongList = props => {
  // TODO: Replace these with Redux
  const [existingList, setExistingList] = useState([])
  const [listBuilder, setListBuilder] = useState([])

  useEffect(() => {
    if (props.selectSetlist === 'All Songs') {
      console.log('IF')
      setExistingList(props.allSongs.songs)
    } else {
      const selected = props.setlists.filter(
        setlist => setlist.name === props.selectSetlist
      )
      if (selected.length > 0) {
        setExistingList(selected[0].songs)
      }
    }
  }, [props])

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

  return (
    <div>
      <ContainerLeft>
        <SelectorContainer>
          <SelectSetlistPopup />
          <NewSongPopup />
        </SelectorContainer>
        {generateSongList('left')}
      </ContainerLeft>
      <ContainerRight>
        <SelectorContainer>
          <SaveSetlistPopup songs={listBuilder} />
        </SelectorContainer>
        {generateSongList('right')}
      </ContainerRight>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    setlists: state.setlists,
    allSongs: state.songs,
    selectSetlist: state.selectSetlist
  }
}

export default connect(mapStateToProps)(SongList)
