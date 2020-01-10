import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AuthButton from './AuthButton'
import { initializeSpotifyTracks } from './reducers/spotifyReducer'
import { spotifyImportSongParser } from './util/helpers'
import songService from './services/songService'

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

const SaveButton = styled.button`
  border: 2px solid palevioletred;
  border-radius: 5px;
  margin-left: 45%;
  margin-right 45%;
`

const ImportList = props => {
  const [existingList, setExistingList] = useState([])
  const [listBuilder, setListBuilder] = useState([])
  const [spotifyPlaylistId, setSpotifyPlaylistId] = useState('')

  useEffect(() => {
    const parsedSongs = spotifyImportSongParser(props.tracks)
    setExistingList(parsedSongs)
  }, [])

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

  // Check if Spotify is authorized
  if (props.accessToken === '') {
    return (
      <div>
        <AuthButton />
      </div>
    )
  }

  const saveSongs = () => {
    songService.sendSongs(listBuilder)
  }

  const changeSongKey = event => {
    const key = event.target.value
    const song = event.target.name
    var i
    for (i = 0; i < listBuilder.length; i++) {
      if (listBuilder[i].name === song) break
    }
    const leftPart = listBuilder.slice(0, i)
    const rightPart = listBuilder.slice(i + 1, listBuilder.length)
    const songToUpdate = {
      name: listBuilder[i].name,
      artist: listBuilder[i].artist,
      key: key
    }
    const updatedArray = leftPart.concat([songToUpdate]).concat(rightPart)
    setListBuilder(updatedArray)
  }

  const handleSpotifyPlaylistIdChange = event => {
    const id = event.target.value
    setSpotifyPlaylistId(id)
  }

  const importPlaylist = async () => {
    const token = props.accessToken
    props.initializeSpotifyTracks(spotifyPlaylistId, token)
  }

  const generateSongList = list => {
    if (list === 'left') {
      return (
        <List>
          {existingList.map(item => {
            return (
              <Song onClick={() => transferToList(item, list)}>
                {item.name}
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
              <React.Fragment>
                <Song onClick={() => transferToList(item, list)}>
                  {item.name}
                </Song>
                <input
                  type='text'
                  value={item.key}
                  name={item.name}
                  onChange={changeSongKey}
                ></input>
              </React.Fragment>
            )
          })}
        </List>
      )
    }
  }

  const generateButton = () => {
    if (existingList.length === 0 && listBuilder.length === 0) {
      return (
        <div>
          Playlist ID:
          <input
            type='text'
            value={spotifyPlaylistId}
            onChange={handleSpotifyPlaylistIdChange}
          ></input>
          <Button onClick={importPlaylist}>IMPORT PLAYLIST</Button>
        </div>
      )
    } else {
      return <SaveButton onClick={saveSongs}>Save Songs</SaveButton>
    }
  }

  return (
    <div>
      {generateButton()}
      <ContainerLeft>{generateSongList('left')}</ContainerLeft>
      <ContainerRight>{generateSongList('right')}</ContainerRight>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tracks: state.spotifyTracks,
    playlistId: state.platlistId,
    accessToken: state.accessToken
  }
}

export default connect(mapStateToProps, { initializeSpotifyTracks })(ImportList)
