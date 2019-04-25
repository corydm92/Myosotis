import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import PlantResults from "./PlantResults";
const HomeLink = props => {
	return (
		<div style={{ maxWidth: "100%" }} className='home-link'>
			<SearchBar />
			<NavBar marginTop='66px' />
			<div className='plant-results-wrapper'>
				<PlantResults />
			</div>
		</div>
	);
};

export default HomeLink;
