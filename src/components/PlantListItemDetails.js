import React from "react";
import { connect } from "react-redux";
import { addToCollectionAction } from "../actions";

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
				tempList.push(<img key={pic.url} alt={pic.url} src={pic.url} />);
			});
			return tempList;
		}
		return <p>Image: Not Available</p>;
	}

	console.log(props);

	return (
		<div
			style={{ margin: "1em 0" }} // Gives card space on top and bottom
			key={selectedItem.id}
			className='plant-details ui segment'
		>
			<div className='img-wrapper'>{handlePictures(selectedItem.images)}</div>

			<p>Duration: {isNull(selectedItem.duration)}</p>
			<p>Family: {isNull(selectedItem.family_common_name)}</p>
			<button onClick={() => props.addToCollectionAction(props.selectedItem)}>
				Add To Collection
			</button>
		</div>
	);
};

export default connect(
	null,
	{ addToCollectionAction }
)(PlantListItemDetails);
