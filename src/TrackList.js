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
  const [allSetlists, setAllSetlists] = useState([])
  const [listLeft, setListLeft] = useState([])
  const [listRight, setListRight] = useState([])

  useEffect(() => {
    setAllSetlists(props.setlists)
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

  const generateTrackList = list => {
    if (list === 'left') {
      return (
        <List>
          {listLeft.map(item => {
            return (
              <Track onClick={() => transferToList(item, list)}>
                {item.name} - {item.key}
              </Track>
            )
          })}
        </List>
      )
    }
    if (list === 'right') {
      return (
        <List>
          {listRight.map(item => {
            return (
              <Track onClick={() => transferToList(item, list)}>
                {item.name} - {item.key}
              </Track>
            )
          })}
        </List>
      )
    }
  }

  const handleSetlistChange = event => {
    const setlistName = event.target.value
    setListLeft(
      allSetlists.filter(setlist => setlist.name === setlistName)[0].tracks
    )
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
        {generateTrackList('left')}
      </ContainerLeft>
      <ContainerRight>
        <h5>NEW SETLIST</h5>
        {generateTrackList('right')}
      </ContainerRight>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    setlists: state.setlists
  }
}

export default connect(mapStateToProps)(TrackList)
