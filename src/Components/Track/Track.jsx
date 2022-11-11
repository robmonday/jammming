import React, { useState } from 'react';

import './Track.css';

const Track = (props) => {

	const addTrack = props.onAdd;

	const renderAction = () => {
		return (
			<button className="Track-action" onClick={() => addTrack(props.id)}>
				{ props.isRemoval ? '-' : '+' }
			</button>
		);
	}

	return (
		<div className="Track" >
		  <div className="Track-information">
		    <h3>{props.track.name}</h3>
		    <p>{props.track.artist} | {props.track.album}</p>
		  </div>
		  {renderAction()}
		</div>
	);
}

export default Track;