import axios from 'axios'

const baseApiUrl = 'http://localhost:3001/'

const getPlaylist = async (id, token) => {
  const response = await axios.get(`${baseApiUrl}spotify/${id}`, {
    headers: { Authorization: token }
  })
  console.log('RESPONSE DATA', response.data)
  return await response.data
}

export default { getPlaylist }
