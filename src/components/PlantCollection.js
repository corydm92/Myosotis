import React from "react";
import PlantListItem from "./PlantListItem";
import { connect } from "react-redux";

class PlantCollection extends React.Component {
	handleNoResults() {
		return (
			<div className='plant-results no-results font-disabled med-font ui header'>
				No Results
			</div>
		);
	}

	handleResults(collection) {
		if (collection.length < 1) {
			return this.handleNoResults();
		}

		return collection.map(item => {
			console.log(item);
			return <PlantListItem key={item.id} item={item} />;
		});
	}

	render() {
		let { collection } = this.props;

		if (!collection) {
			return this.handleNoResults();
		}

		return (
			<div className='plant-results-wrapper ui middle aligned divided list'>
				{this.handleResults(collection)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		collection: state.collection
	};
};

export default connect(mapStateToProps)(PlantCollection);
