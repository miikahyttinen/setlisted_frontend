import spotifyService from '../services/spotifyService'

export const initializeSpotifyTracks = () => {
  return async dispatch => {
    const tracks = await spotifyService.getPlaylist()
    dispatch({
      type: 'INIT_SPOTIFY',
      content: tracks
    })
  }
}

const spotifyReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_SPOTIFY':
      return state.concat(action.content)
    default:
      return state
  }
}

export default spotifyReducer
