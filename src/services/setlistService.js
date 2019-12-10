import axios from 'axios'

const baseApiUrl = 'http://localhost:3001'

const getAllSetlists = async () => {
  const response = await axios.get(`${baseApiUrl}/setlist/all`)
  return await response.data
}

const getAllSongs = async () => {
  const response = await axios.get(`${baseApiUrl}/song/all`)
  const allSongs = {
    id: 'allsongs',
    name: 'All Songs',
    songs: response.data
  }
  return allSongs
}

const sendSetlist = async (list, name) => {
  const setlist = {
    name: name,
    songs: list.map(song => song.id)
  }
  const response = await axios.post(`${baseApiUrl}/setlist/`, setlist)
  return await response.data
}

export default { getAllSetlists, sendSetlist, getAllSongs }
