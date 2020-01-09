import axios from 'axios'

const baseApiUrl = 'http://localhost:3001'

const sendSongs = async songs => {
  songs.forEach(async song => {
    console.log('SONG', song)
    await axios.post(`${baseApiUrl}/song`, song)
  })
  return //await response.data
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

export default { sendSongs, getAllSongs }
