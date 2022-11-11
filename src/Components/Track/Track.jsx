import React, { useState } from 'react';

import './Track.css';

const Track = (props) => {

	const renderAction = () => {
		const isRemoval = false; //this is just a placeholder
		return (
			<button className="Track-action">
				{ isRemoval ? '-' : '+' }
			</button>
		);
	}

	return (
		<div className="Track">
		  <div className="Track-information">
		    <h3>{props.track.name}</h3>
		    <p>{props.track.artist} | {props.track.album}</p>
		  </div>
		  {renderAction()}
		</div>
	);
}

export default Track;