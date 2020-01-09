import songService from '../services/songService'

export const initializeSongs = () => {
  return async dispatch => {
    const songs = await songService.getAllSongs()
    dispatch({
      type: 'INIT_SONGS',
      content: songs
    })
  }
}

const songReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_SONGS':
      return action.content
    default:
      return state
  }
}

export default songReducer
