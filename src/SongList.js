import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import NewSongPopup from './NewSongPopup'
import SelectSetlistPopup from './SelectSetlistPopup'
import SaveSetlistPopup from './SaveSetlistPopup'
import { removeDuplicateSongs } from './util/helpers'

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

const Song = styled.div`
  widht: 50%;
`

const ListItem = styled.li`
  list-style-type: none;
  border: 2px solid palevioletred;
  border-radius: 5px;
  margin: 2px;
`

const SongContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
`

const SelectorContainer = styled.div`
  height: 24px;
`

const SongList = props => {
  const [existingList, setExistingList] = useState([])
  const [listBuilder, setListBuilder] = useState([])

  useEffect(() => {
    if (props.selectSetlist === 'All Songs') {
      setExistingList(removeDuplicateSongs(props.allSongs.songs, listBuilder))
    } else {
      const selected = props.setlists.filter(
        setlist => setlist.name === props.selectSetlist
      )
      if (selected.length > 0) {
        setExistingList(removeDuplicateSongs(selected[0].songs, listBuilder))
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
              <ListItem>
                <SongContainer>
                  <Song onClick={() => transferToList(item, list)}>
                    {item.name} - {item.key}
                  </Song>
                </SongContainer>
              </ListItem>
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
              <ListItem>
                <SongContainer>
                  <Song onClick={() => transferToList(item, list)}>
                    {item.name} - {item.key}
                  </Song>
                </SongContainer>
              </ListItem>
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
