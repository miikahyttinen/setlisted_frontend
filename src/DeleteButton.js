import React from 'react'
import styled from 'styled-components'
import songService from './services/songService'

const Button = styled.button`
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: inline-block;
`
const Image = styled.img`
  widht: 30px;
  height: 30px;
`

const ButtonContainer = styled.div``

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
