import React from 'react';
import Song from './Song'
// import SubTitle from './SubTitle'
import '../App.css'

const SongList = (props) => {

  const songNodes = props.data.map((song, index) => {
    return(
      <Song
      title = {song["im:name"].label}
      artist = {song["im:artist"].label}
      artwork={song["im:image"][2].label}
      sample={song.link[1].attributes.href}
      position = {index+1}
      key={index}
      genre={song.category.attributes.label}
      ></Song>
    )

  })

  return (
    <div className="song-list">
    {songNodes}
    </div>
  )
}

export default SongList
