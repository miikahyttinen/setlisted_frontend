import axios from 'axios'

const baseApiUrl = 'http://localhost:3001'

const sendSongs = async songs => {
  songs.forEach(async song => {
    await axios.post(`${baseApiUrl}/song`, song)
  })
  return //await response.data
}

const sendOneSong = async song => {
  const response = await axios.post(`${baseApiUrl}/song`, song)
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

const deleteSong = async id => {
  const response = await axios.delete(`${baseApiUrl}/song/${id}`)
}

export default { sendSongs, getAllSongs, sendOneSong, deleteSong }
