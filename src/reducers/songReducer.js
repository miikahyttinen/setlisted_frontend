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

export const deleteSong = id => {
  return dispatch => {
    dispatch({
      type: 'DELETE_SONG',
      content: id
    })
  }
}

export const addSong = song => {
  return async dispatch => {
    const songWithId = await songService.sendOneSong(song)
    dispatch({
      type: 'ADD_SONG',
      content: songWithId
    })
  }
}

const songReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_SONGS':
      return action.content
    case 'DELETE_SONG':
      const newState_1 = {
        id: 'allsongs',
        name: 'All Songs',
        songs: state.songs.filter(item => item.id !== action.content)
      }
      return newState_1
    case 'ADD_SONG':
      const newState_2 = {
        id: 'allsongs',
        name: 'All Songs',
        songs: state.songs.concat(action.content)
      }
      return newState_2
    default:
      return state
  }
}

export default songReducer
