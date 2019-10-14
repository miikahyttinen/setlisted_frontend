import setlistService from '../services/setlistService'

export const initializeSetlists = () => {
  return async dispatch => {
    const setlist = await setlistService.getSetlist()
    dispatch({
      type: 'INIT_SETLIST',
      content: setlist
    })
  }
}

const setlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_SETLIST':
      return state.concat(action.content)
    default:
      return state
  }
}

export default setlistReducer
