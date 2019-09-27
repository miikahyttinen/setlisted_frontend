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

const TrackList = props => {
  const [listLeft, setListLeft] = useState([])
  const [listRight, setListRight] = useState([])

  useEffect(() => {
    setListLeft(props.setlists)
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

  if (!Array.isArray(props.setlists) || props.setlists.length === 0) {
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
          console.log('ITEM:', item)
          return (
            <Track onClick={() => transferToList(item, origin)}>
              {item.song} - {item.key}
            </Track>
          )
        })}
      </List>
    )
  }

  const handleSetlistChange = event => {
    console.log('EVENT: ')
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
        {generateTrackList(listLeft, 'left')}
      </ContainerLeft>
      <ContainerRight>{generateTrackList(listRight, 'right')}</ContainerRight>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    setlists: state.setlists
  }
}

export default connect(mapStateToProps)(TrackList)
