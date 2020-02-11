import axios from 'axios'

const baseApiUrl = 'http://localhost:3001/api'

const sendSongs = async songs => {
  songs.forEach(async song => {
    await axios.post(`${baseApiUrl}/song`, song)
  })
  return //await response.data
}

const sendOneSong = async song => {
  const response = await axios.post(`${baseApiUrl}/song`, song)
  return response.data
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
  return response.data
}

const sendEditedSong = async song => {
  const response = await axios.put(`${baseApiUrl}/song`, song)
  return response.data
}

export default {
  sendSongs,
  getAllSongs,
  sendOneSong,
  deleteSong,
  sendEditedSong
}
