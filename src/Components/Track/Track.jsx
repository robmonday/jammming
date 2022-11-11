import React, { useState } from 'react';

import './Track.css';

const Track = (props) => {

	const addTrack = props.onAdd;
	const removeTrack = props.onRemove;

	const handleClick = () => {
		if (props.isRemoval === false) {
			addTrack(props.id);
		} else if (props.isRemoval === true) {
			removeTrack(props.id);
		}
	}

	const renderAction = () => {
		return (
			<button className="Track-action" onClick={handleClick}>
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