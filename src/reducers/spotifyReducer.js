import spotifyService from '../services/spotifyService'

export const initializeSpotifyTracks = (id, token) => {
  return async dispatch => {
    const tracks = await spotifyService.getPlaylist(id, token)
    dispatch({
      type: 'INIT_SPOTIFY_TRACKS',
      content: tracks
    })
  }
}

const spotifyReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_SPOTIFY_TRACKS':
      return state.concat(action.content)
    default:
      return state
  }
}

export default spotifyReducer
