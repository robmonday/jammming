import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

const exampleTrack = {
  name: "Satellite", 
  artist: "Dave Matthews Band",
  album: "Under the Table and Dreaming",
  id: 0
};

const exampleSearchResults = [exampleTrack, exampleTrack, exampleTrack, exampleTrack, exampleTrack, exampleTrack];
const examplePlaylistTracks = [exampleTrack];

const examplePlaylistName = "Example Playlist Name";

function App(props) {
  const [searchResults, setSearchResults] = useState(exampleSearchResults);
  const [playlistTracks, setPlaylistTracks] = useState(examplePlaylistTracks);
  const [playlistName, setPlaylistName] = useState(examplePlaylistName);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults tracks={searchResults} />
          <Playlist tracks={playlistTracks} playlistName={playlistName} />
        </div>
      </div>
    </div>
  );
}

export default App;
