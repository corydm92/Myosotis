import React from "react";

import "../css/PlantListItemDetails.css";

const PlantListItemDetails = props => {
	let { selectedItem } = props;

	function isNull(str) {
		if (!str) {
			return "Not Available";
		}

		return str;
	}

	function handlePictures(picList) {
		// checks for pictures in endpoint

		if (picList.length > 0) {
			let tempList = [];
			picList.forEach(pic => {
				tempList.push(<img alt={pic.url} src={pic.url} />);
			});
			return tempList;
		}
		return <p>Image: Not Available</p>;
	}

	return (
		<div
			style={{ marginRight: "1em", marginBottom: "1em" }} // Gives card space on right and bottom
			key={selectedItem.id}
			className='plant-details ui segment'
		>
			<div className='img-wrapper'>{handlePictures(selectedItem.images)}</div>

			<p>Duration: {isNull(selectedItem.duration)}</p>
			<p>Family: {isNull(selectedItem.family_common_name)}</p>
		</div>
	);
};

export default PlantListItemDetails;
