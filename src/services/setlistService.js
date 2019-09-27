import axios from 'axios'

const baseUrl = 'http://localhost:3001/setlist'

const getSetlist = async () => {
  const response = await axios.get(baseUrl)
  return await response.data
}

export default { getSetlist }
