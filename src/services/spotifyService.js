import axios from 'axios'

const baseApiUrl = 'http://localhost:3001/api'

const getPlaylist = async (id, token) => {
  const response = await axios.get(`${baseApiUrl}/spotify/${id}`, {
    headers: { Authorization: token }
  })
  return await response.data
}

export default { getPlaylist }
