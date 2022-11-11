import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList'
import './SearchResults.css';

const SearchResults = (props) => {
	
	const isRemoval = false; // buttons should be '+' in search results 

	return (
		<div className="SearchResults">
		  <h2>Results</h2>
		  <TrackList tracks={props.tracks} onAdd={props.onAdd} isRemoval={isRemoval} />
		</div>
	);
};

export default SearchResults;