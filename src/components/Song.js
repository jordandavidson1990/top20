import React from 'react'
import '../App.css';

const Song = (props)=> {
  return (
    <div className="song">
    <img id="artwork" src={props.artwork} alt="artwork"/>
    <h2>{props.position}. &nbsp;</h2>
    <h4>{props.title}&nbsp;</h4>
    <h4>{props.artist}&nbsp;</h4>
    <p>{props.genre}</p>
    <audio src={props.sample} controls="controls"/>
    </div>
  );
}

export default Song;
