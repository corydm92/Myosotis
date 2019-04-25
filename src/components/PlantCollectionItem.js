import React from "react";
import { connect } from "react-redux";
import { plantListItem, isLoadingDetails } from "../actions";
import PlantCollectionItemDetails from "./PlantCollectionItemDetails";

import "../css/PlantListItem.css";

const styles = {
	// Used for setting item height, allowing flex for loader / button. Not working so far.
	contentHeight: {
		height: "64px"
	}
};

class PlantListItem extends React.Component {
	handleShowHide(id) {
		document.getElementById(id).classList.toggle("hide");
	}

	componentDidMount() {
		document.getElementById(this.props.item.id).classList.toggle("hide");
	}

	render() {
		let { item } = this.props;

		return (
			<div className='plant-list-item item'>
				<div className='content'>
					<div key='show/hide' className='right floated content'>
						<button
							onClick={() => this.handleShowHide(item.id)}
							className='ui button show font-main-white bg-main-blue'
						>
							Show / Hide
						</button>
					</div>
					<div
						style={{
							// INLINE STYLING
							display: "inline-block",
							lineHeight: "1.2em"
						}}
						className='plant-results plant-name header font-main-green med-font'
					>
						{item.common_name ? item.common_name : item.scientific_name}
					</div>

					<div className='description font-disabled sm-font'>
						{item.common_name ? "Common Name" : "Scientific Name"}
					</div>

					<div key={item.id} id={item.id}>
						<PlantCollectionItemDetails key={item.id} selectedItem={item} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		selectedItems: state.plantListItems,
		isLoadingDetails: state.isLoadingDetails
	};
};

export default connect(
	mapStateToProps,
	{ plantListItem, isLoadingDetails }
)(PlantListItem);
