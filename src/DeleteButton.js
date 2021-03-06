import React from 'react'
import styled from 'styled-components'
import songService from './services/songService'
import { connect } from 'react-redux'
import { deleteSong } from './reducers/songReducer'

const Button = styled.button`
  background: #ff4d4d;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: inline-block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`
const ButtonContainer = styled.div`
  display: inline-block;
  width: auto%;
  height: 100%;
`

const DeleteButton = props => {
  const handleDeleteSong = id => {
    props.deleteSong(id)
    songService.deleteSong(id)
  }

  return (
    <ButtonContainer>
      <div onClick={() => handleDeleteSong(props.id)}>
        <Button>DELETE</Button>
      </div>
    </ButtonContainer>
  )
}

const mapStateToProps = state => {
  return {
    allSongs: state.songs
  }
}

export default connect(mapStateToProps, { deleteSong })(DeleteButton)
