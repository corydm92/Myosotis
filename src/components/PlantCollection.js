import React from "react";
import PlantCollectionItem from "./PlantCollectionItem";
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
			return <PlantCollectionItem key={item.id} item={item} />;
		});
	}

	render() {
		console.log(this.props);
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
