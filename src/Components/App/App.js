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

function App(props) {
  const [searchResults, setSearchResults] = useState(exampleSearchResults);
  const [playlistTracks, setPlaylistTracks] = useState(examplePlaylistTracks);
  const [playlistName, setPlaylistName] = useState();
  const [searchTerm, setSearchTerm] = useState();

  const addTrack = (searchResultsIndex) => {
    setPlaylistTracks(prev => [...prev, searchResults[searchResultsIndex]]);

    //THIS CONDITIONAL ENSURES A SONG CAN ONLY BE ADDED ONCE; HOWEVER THAT DOESN'T WORK FOR TESTING...ADD IT BACK WHEN YOU'RE READY.
    /*
    if (!playlistTracks.find(savedTrack => savedTrack.id === searchResultsIndex)) {
      // put your code here;
    }
    */
  }

  const removeTrack = (playlistIndex) => {
    setPlaylistTracks(prev => prev.filter(track => track.id !== playlistIndex));
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar searchTerm={searchTerm} />
        <div className="App-playlist">
          <SearchResults tracks={searchResults} onAdd={addTrack} />
          <Playlist tracks={playlistTracks} playlistName={playlistName} onNameChange={updatePlaylistName} onRemove={removeTrack} />
        </div>
      </div>
    </div>
  );
}

export default App;