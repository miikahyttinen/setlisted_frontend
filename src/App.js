import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    console.log('effect happened')
    axios.get('http://localhost:3001/songs').then(response => {
      setSongs(response.data)
    })
  }, [])

  return (
    <div>
      <h1>Welcome to Setlisted</h1>
      {songs.map(song => {
        return <div> {song.name} </div>
      })}
    </div>
  )
}

export default App
