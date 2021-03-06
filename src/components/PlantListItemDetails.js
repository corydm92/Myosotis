import React from "react";
import { connect } from "react-redux";
import { addToCollection } from "../actions";

import "../css/PlantListItemDetails.css";

const PlantListItemDetails = props => {
	let { selectedItem } = props;

	function isNull(str) {
		if (!str) {
			return "Not Available";
		}
		return str;
	}

	function handleAddToCollection() {
		let pass = false;

		if (props.collection.length > 0) {
			props.collection.map(item => {
				if (item.id === props.selectedItem.id) {
					pass = true;
				}
			});
		}

		if (pass === true) {
			return (
				<p className='sm-font font-main-green'>
					Item in Collection <i class='check icon' />
				</p>
			);
		}

		return (
			<button
				className='ui button bg-main-green font-main-white'
				onClick={() => props.addToCollection(props.selectedItem)}
			>
				Add To Collection
			</button>
		);
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
			<div className='add-to-collection-wrapper'>{handleAddToCollection()}</div>
		</div>
	);
};

const mapStateToProps = state => {
	return { collection: state.collection };
};

export default connect(
	mapStateToProps,
	{ addToCollection }
)(PlantListItemDetails);
