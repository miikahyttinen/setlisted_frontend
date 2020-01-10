import axios from 'axios'

const baseApiUrl = 'http://localhost:3001'

const sendSongs = async songs => {
  songs.forEach(async song => {
    await axios.post(`${baseApiUrl}/song`, song)
  })
  return //await response.data
}

const sendOneSong = async song => {
  console.log('HERE FRONT')
  const response = await axios.post(`${baseApiUrl}/song`, song)
  console.log('RESPONSE: ', response.data)
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

export default { sendSongs, getAllSongs, sendOneSong }
