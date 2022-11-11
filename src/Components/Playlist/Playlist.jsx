import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList'
import './Playlist.css';

const Playlist = (props) => {

	const isRemoval = true; // buttons should be '-' in playlist

	const handleNameChange = (event) => {
		props.onNameChange(event.target.value);
	}

	return (
		<div className="Playlist">
		  <input defaultValue={'New Playlist'} onChange={handleNameChange}  />
		  <TrackList tracks={props.tracks} onRemove={props.onRemove} isRemoval={isRemoval} />
		  <button className="Playlist-save">SAVE TO SPOTIFY</button>
		</div>
	);
}

export default Playlist;