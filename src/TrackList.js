import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 20%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

const Track = styled.li`
  list-style-type: none;
  border: 2px solid palevioletred;
  border-radius: 5px;
  margin: 2px;
`

const List = styled.ul`
  widht: 50%;
`

const TrackList = ({ tracks }) => {
  if (!Array.isArray(tracks)) {
    return <div> </div>
  }

  console.log('spotify data', tracks)

  return (
    <Container>
      <List>
        {tracks.map(item => (
          <Track> {item.track.name.split(' - ')[0]} </Track>
        ))}
      </List>
    </Container>
  )
}

export default TrackList
