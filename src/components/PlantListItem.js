import React from "react";
import { connect } from "react-redux";
import { plantListItemAction, isLoadingDetailsAction } from "../actions";
import PlantListItemDetails from "./PlantListItemDetails";

import "../css/PlantListItem.css";
import { runInThisContext } from "vm";

const styles = {
	contentHeight: {
		height: "64px"
	}
};

class PlantListItem extends React.Component {
	state = { height: "64px" };
	handleSelectedItem = () => {
		this.props.isLoadingDetailsAction(this.props.item.id);
		this.props.plantListItemAction(this.props.item.id);
	};

	componentDidMount() {
		console.log("mount");
	}

	handleLoader() {
		let { isLoadingDetails, item } = this.props;

		if (isLoadingDetails.bool === true && item.id === isLoadingDetails.id) {
			return (
				<div class='loader-wrapper right floated content'>
					<div
						style={{ zIndex: "0", marginTop: "16px" }} // INLINE STYLING,
						class='ui active inline loader'
					/>
				</div>
			);
		}

		return null;
	}

	render() {
		let { item, selectedItems } = this.props;

		let selectedItemList = [];

		selectedItems.map(selectedItem => {
			if (item.id === selectedItem.id) {
				selectedItemList.push(
					<PlantListItemDetails
						key={selectedItem.id}
						selectedItem={selectedItem}
					/>
				);
			}
			return null;
		});

		return (
			<div className='item'>
				<div
					style={{ height: "auto" }} // Set height for loader, needed for flex
					className='content'
				>
					{this.handleLoader()}
					<div
						style={{
							display: "inline-block",
							maxWidth: "225px",
							lineHeight: "1.2em"
						}} // INLINE STYLING
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
	// console.log(state);
	return {
		selectedItems: state.plantListItems,
		isLoadingDetails: state.isLoadingDetails
	};
};

export default connect(
	mapStateToProps,
	{ plantListItemAction, isLoadingDetailsAction }
)(PlantListItem);
