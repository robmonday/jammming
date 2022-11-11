import React, { useState } from 'react';
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = (props) => {
	return (
		<div className="TrackList">
			{props.tracks.map(
				track => {return (
					<Track id={track.id} track={track} onAdd={props.onAdd} isRemoval={props.isRemoval} />
				);}
			)}
		</div>
	);
}

export default TrackList;