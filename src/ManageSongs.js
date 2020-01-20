import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import NewSongPopup from './NewSongPopup'
import DeleteButton from './DeleteButton'
import EditSongPopup from './EditSongPopup'

const Container = styled.div`
  width: auto;
  padding-left: 12%;
  padding-right: 16%;
  height: auto;
  background: #daf7a6;
`

const List = styled.ul`
  margin: auto;
`

const Song = styled.div`
  display: inline-block;
  width: 70%;
  height: 100%;
`

const ListItem = styled.li`
  list-style-type: none;
  border: 2px solid palevioletred;
  border-radius: 5px;
  margin: 2px;
`

const SongContainer = styled.div`
  display: block;
  width: auto;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
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
                  <EditSongPopup
                    name={item.name}
                    artist={item.artist}
                    songey={item.key}
                    id={item.id}
                  />
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
