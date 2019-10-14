import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ImportButton from './ImportButton'

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

const ImportList = props => {
  const [listLeft, setListLeft] = useState([])
  const [listRight, setListRight] = useState([])

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

  if (!Array.isArray(props.tracks) || props.tracks.length === 0) {
    return (
      <div>
        <ImportButton />
      </div>
    )
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
      <ContainerLeft>{generateTrackList(listLeft, 'left')}</ContainerLeft>
      <ContainerRight>{generateTrackList(listRight, 'right')}</ContainerRight>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tracks: state.spotifyTracks
  }
}

export default connect(mapStateToProps)(ImportList)
