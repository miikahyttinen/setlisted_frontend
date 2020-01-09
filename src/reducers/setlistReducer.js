import setlistService from '../services/setlistService'

export const initializeSetlists = () => {
  return async dispatch => {
    const setlist = await setlistService.getAllSetlists()
    dispatch({
      type: 'INIT_SETLISTS',
      content: setlist
    })
  }
}

const setlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_SETLISTS':
      return state.concat(action.content)
    default:
      return state
  }
}

export default setlistReducer
