import React from "react";
import { connect } from "react-redux";
import { addToCollection, removeFromCollection } from "../actions";

import "../css/PlantListItemDetails.css";

const PlantCollectionItemDetails = props => {
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

	return (
		<div
			style={{ margin: "1em 0" }} // Gives card space on top and bottom
			key={selectedItem.id}
			className='plant-details ui segment'
		>
			<div className='img-wrapper'>{handlePictures(selectedItem.images)}</div>

			<p>Duration: {isNull(selectedItem.duration)}</p>
			<p>Family: {isNull(selectedItem.family_common_name)}</p>
			<div className='add-to-collection-wrapper'>
				<button
					className='ui button red font-main-white'
					onClick={() => props.removeFromCollection(props.selectedItem.id)}
				>
					Remove From Collection
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return { collection: state.collection };
};

export default connect(
	mapStateToProps,
	{ addToCollection, removeFromCollection }
)(PlantCollectionItemDetails);
