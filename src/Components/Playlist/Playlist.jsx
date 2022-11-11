import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList'
import './Playlist.css';

const Playlist = (props) => {

	const isRemoval = true; // buttons should be '-' in playlist

	return (
		<div className="Playlist">
		  <input defaultValue={'New Playlist'} />
		  <TrackList tracks={props.tracks} isRemoval={isRemoval} />
		  <button className="Playlist-save">SAVE TO SPOTIFY</button>
		</div>
	);
}

export default Playlist;