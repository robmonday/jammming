import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

  const search = (input) => {
    console.log(input);
  }

	const handleTermChange = (event) => {
		search(event.target.value);
	}

	return (
		<div className="SearchBar">
		  <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
		  <button className="SearchButton">SEARCH</button>
		</div>
	);
}

export default SearchBar;