export const createAccessToken = content => {
  return {
    type: 'CREATE_TOKEN',
    content: content
  }
}

const accessTokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'CREATE_TOKEN':
      return action.content
    default:
      return state
  }
}

export default accessTokenReducer
