import spotifyService from '../services/spotifyService'

export const initializeTracks = () => {
  return async dispatch => {
    const tracks = await spotifyService.getPlaylist()
    dispatch({
      type: 'INIT',
      content: tracks
    })
  }
}

const spotifyReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return state.concat(action.content)
    default:
      return state
  }
}

export default spotifyReducer
