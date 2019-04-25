import React from "react";
import NavBar from "./NavBar";
import "../css/CollectionLink.css";
import PlantCollection from "./PlantCollection";

class CollectionLink extends React.Component {
	render() {
		return (
			<div className='collection-link'>
				<NavBar />
				<PlantCollection />
			</div>
		);
	}
}

export default CollectionLink;
