import React, { useState } from 'react';

import './Track.css';

const Track = () => {

	const renderAction = () => {
		const isRemoval = true; //this is just a placeholder
		return (
			<button className="Track-action">
				{ isRemoval ? '-' : '+' }
			</button>
		);
	}

	return (
		<div className="Track">
		  <div className="Track-information">
		    <h3>{/*<!-- track name will go here -->*/}</h3>
		    <p>{/*<!-- track artist will go here-->*/} | {/*<!-- track album will go here -->*/}</p>
		  </div>
		  {renderAction()}
		</div>
	);
}

export default Track;