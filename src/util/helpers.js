import { parse } from 'path'

export const spotifyImportSongParser = importedList => {
  const parsedSongs = importedList.map(item => {
    // remove unwanted parenthisis
    let parsedName = item.track.name.includes(' (')
      ? item.track.name.split(' (')[0]
      : item.track.name
    // remove unwanted hyphens
    parsedName = parsedName.includes(' -')
      ? parsedName.split(' -')[0]
      : parsedName
    return {
      name: parsedName,
      artist: item.track.artists[0].name,
      key: 'Assign key'
    }
  })
  return parsedSongs
}
