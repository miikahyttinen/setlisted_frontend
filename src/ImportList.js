import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AuthButton from './AuthButton'
import { initializeSpotifyTracks } from './reducers/spotifyReducer'
import spotifyReducer from './reducers/spotifyReducer'

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

const Track = styled.li`
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

const ImportList = props => {
  const [listLeft, setListLeft] = useState([])
  const [listRight, setListRight] = useState([])
  const [spotifyPlaylistId, setSpotifyPlaylistId] = useState('')

  useEffect(() => {
    setListLeft(props.tracks)
  }, [])

  const transferToList = (item, origin) => {
    if (origin === 'left') {
      setListLeft(listLeft.filter(listItem => listItem !== item))
      setListRight(listRight.concat(item))
    }
    if (origin === 'right') {
      setListRight(listRight.filter(listItem => listItem !== item))
      setListLeft(listLeft.concat(item))
    }
  }

  if (props.accessToken === '') {
    return (
      <div>
        <AuthButton />
      </div>
    )
  }

  const handleSpotifyPlaylistIdChange = event => {
    const id = event.target.value
    setSpotifyPlaylistId(id)
  }

  const importPlaylist = async () => {
    const token = props.accessToken
    props.initializeSpotifyTracks(spotifyPlaylistId, token)
  }

  const generateTrackList = (trackList, origin) => {
    return (
      <List>
        {trackList.map(item => {
          var track = item.track.name.split(' - ')[0]
          return track.includes('(') ? (
            <Track onClick={() => transferToList(item, origin)}>
              {track.split('(')[0]}{' '}
            </Track>
          ) : (
            <Track onClick={() => transferToList(item, origin)}>{track}</Track>
          )
        })}
      </List>
    )
  }

  return (
    <div>
      Playlist ID:
      <input
        type='text'
        value={spotifyPlaylistId}
        onChange={handleSpotifyPlaylistIdChange}
      ></input>
      <Button onClick={importPlaylist}>IMPORT PLAYLIST</Button>
      <ContainerLeft>{generateTrackList(listLeft, 'left')}</ContainerLeft>
      <ContainerRight>{generateTrackList(listRight, 'right')}</ContainerRight>
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

export default connect(
  mapStateToProps,
  { initializeSpotifyTracks }
)(ImportList)
