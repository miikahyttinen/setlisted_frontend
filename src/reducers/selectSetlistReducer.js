export const setSelectSetlist = name => {
  return async dispatch => {
    dispatch({
      type: 'SELECT_SETLIST',
      content: name
    })
  }
}

const selectSetlistReducer = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_SETLIST':
      return action.content
    default:
      return state
  }
}

export default selectSetlistReducer
