import axios from 'axios'

const baseUrl = 'http://localhost:3001'

const getSetlist = async () => {
  const response = await axios.get(`${baseUrl}/setlist/all`)
  return await response.data
}

const sendSetlist = async (list, name) => {
  const setlist = {
    name: name,
    songs: list.map(song => song.id)
  }
  const response = await axios.post(`${baseUrl}/setlist/`, setlist)
  return await response.data
}

export default { getSetlist, sendSetlist }
