import React from "react";
import { connect } from "react-redux";
import { plantListItem, isLoadingDetails } from "../actions";
import PlantListItemDetails from "./PlantListItemDetails";

import "../css/PlantListItem.css";

const styles = {
	// Used for setting item height, allowing flex for loader / button. Not working so far.
	contentHeight: {
		height: "64px"
	}
};

class PlantListItem extends React.Component {
	handleSelectedItem = () => {
		this.props.isLoadingDetails(this.props.item.id);
		this.props.plantListItem(this.props.item.id);
	};

	handleLoader() {
		let { isLoadingDetails, item } = this.props;

		if (isLoadingDetails.bool === true && item.id === isLoadingDetails.id) {
			return (
				<div className='loader-wrapper right floated content'>
					<div
						style={{ zIndex: "0", marginTop: "16px" }} // INLINE STYLING,
						className='ui active inline loader'
					/>
				</div>
			);
		}

		return null;
	}

	handleShowHide(id) {
		document.getElementById(id).classList.toggle("hide");
	}

	render() {
		let { item, selectedItems } = this.props;

		let selectedItemList = [];
		let showHide = [];

		selectedItems.map(selectedItem => {
			if (item.id === selectedItem.id) {
				selectedItemList.push(
					<div key={selectedItem.id} id={selectedItem.id}>
						<PlantListItemDetails
							key={selectedItem.id}
							selectedItem={selectedItem}
						/>
					</div>
				);

				showHide.push(
					<div key='show/hide' className='right floated content'>
						<button
							onClick={() => this.handleShowHide(selectedItem.id)}
							className='ui button show font-main-white bg-main-blue'
						>
							Show / Hide
						</button>
					</div>
				);
			}
			return null;
		});

		return (
			<div className='plant-list-item item'>
				<div
					style={{ height: "auto" }} // Set height for loader, needed for flex
					className='content'
				>
					{this.handleLoader()}
					{showHide}
					<div
						style={{
							// INLINE STYLING
							display: "inline-block",
							// maxWidth: "225px",
							lineHeight: "1.2em"
						}}
						onClick={this.handleSelectedItem}
						className='plant-results plant-name header font-main-green med-font'
					>
						{item.common_name ? item.common_name : item.scientific_name}
					</div>

					<div className='description font-disabled sm-font'>
						{item.common_name ? "Common Name" : "Scientific Name"}
					</div>

					{selectedItemList}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedItems: state.plantListItems,
		isLoadingDetails: state.isLoadingDetails
	};
};

export default connect(
	mapStateToProps,
	{ plantListItem, isLoadingDetails }
)(PlantListItem);
