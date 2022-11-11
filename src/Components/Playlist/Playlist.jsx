import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList'
import './Playlist.css';

const Playlist = (props) => {

	return (
		<div className="Playlist">
		  <input defaultValue={'New Playlist'} />
		  <TrackList tracks={props.tracks} />
		  <button className="Playlist-save">SAVE TO SPOTIFY</button>
		</div>
	);
}

export default Playlist;