import React from 'react'
import styled from 'styled-components'
import songService from './services/songService'

const Button = styled.button`
  background: red;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: inline-block;
`
const ButtonContainer = styled.div`
  display: inline-block;
  width: auto%;
  height: 100%;
`

const deleteSong = id => {
  songService.deleteSong(id)
}

const DeleteButton = props => {
  console.log('PROPS', props)
  return (
    <ButtonContainer>
      <a onClick={() => deleteSong(props.id)}>
        <Button>DELETE</Button>
      </a>
    </ButtonContainer>
  )
}

export default DeleteButton
