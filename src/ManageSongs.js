import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import NewSongPopup from './NewSongPopup'
import DeleteButton from './DeleteButton'

const Container = styled.div`
  width: 100%;
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

const ManageSongs = props => {
  const [allSongs, setAllSongs] = useState([])

  useEffect(() => {
    setAllSongs(props.allSongs.songs)
  }, [props])

  const generateSongList = () => {
    if (allSongs !== undefined) {
      return (
        <List>
          {allSongs.map(item => {
            return (
              <ListItem>
                <SongContainer>
                  <Song>
                    {item.name} - {item.key}
                  </Song>
                  <DeleteButton id={item.id} />
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
      <Container>
        <SelectorContainer>
          <NewSongPopup />
        </SelectorContainer>
        {generateSongList()}
      </Container>
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

export default connect(mapStateToProps)(ManageSongs)
