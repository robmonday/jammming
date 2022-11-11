import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

const exampleTrack = {
  id: 0, 
  name: "Satellite", 
  artist: "Dave Matthews Band",
  album: "Under the Table and Dreaming"

};
const exampleTracks = [exampleTrack, exampleTrack, exampleTrack];

function App(props) {
  const [tracks, setTracks] = useState(exampleTracks);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults tracks={tracks} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
