import React, { useState } from 'react';
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = () => {
	return (
		<div className="TrackList">
		  {/*<!-- You will add a map method that renders a set of Track components  -->*/}
		  <Track />
		  <Track />
		  <Track />
		</div>
	);
}

export default TrackList;