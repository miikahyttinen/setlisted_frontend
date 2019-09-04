import React, { useState, useEffect } from 'react'

const App = () => {
  const [params, setParams] = useState('')

  console.log('REAL PARAMS', params)


  useEffect(() => {
    setParams(getHashParams())
  }, [])
    

  const getHashParams = () => {
    var hashParams = {}
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1)
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2])
    }
    return hashParams
  }

  return (
    <div className='App'>
      <a href='http://localhost:8888'>
        <button>Login with Spotify</button>
      </a>
    </div>
  )
}
/*
    <div>
      <h1>Welcome to Setlisted</h1>
      {songs.map(song => {
        return <div> {song.name} </div>
      })}
    </div> */

export default App
