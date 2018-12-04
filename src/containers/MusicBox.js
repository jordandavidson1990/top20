import React from 'react';
// import DisplaySongs from '../components/DisplaySongs';
import SongList from '../components/SongList'
import Header from '../components/Header'

class MusicBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs:[],
    }
    // console.log(this.state.data);
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs:data.feed.entry}))
  }


  render(){
    // console.log("this.state:", this.state);
    return(
      <div className="chart">
      <Header />
      <SongList data={this.state.songs}/>
      </div>
    )
  }




}

export default MusicBox;
