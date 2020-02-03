import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import { connect } from 'react-redux'
import './styles/popup.css'
import { setSelectSetlist } from './reducers/selectSetlistReducer'

const Button = styled.button`
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
  float: right;
`

const SelectSetlistPopup = props => {
  const handleSetlistChange = name => {
    props.setSelectSetlist(name)
  }

  return (
    <Popup position='bottom center' trigger={<Button>SELECT SETLIST</Button>}>
      <div className='menu'>
        <div
          className='menu-item'
          onClick={() => handleSetlistChange(props.songs.name)}
        >
          {props.songs.name}
        </div>
        {props.setlists.map(setlist => {
          return (
            <div
              key={setlist.id}
              className='menu-item'
              onClick={() => handleSetlistChange(setlist.name)}
            >
              {setlist.name}
            </div>
          )
        })}
      </div>
    </Popup>
  )
}

const mapStateToProps = state => {
  return {
    setlists: state.setlists,
    songs: state.songs,
    selectSetlist: state.selectSetlist
  }
}

export default connect(mapStateToProps, {
  setSelectSetlist
})(SelectSetlistPopup)
