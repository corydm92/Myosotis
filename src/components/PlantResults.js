import React from "react";
import { connect } from "react-redux";

import PlantListItem from "./PlantListItem";

import "../css/PlantResults.css";

class PlantResults extends React.Component {
	handleIsLoading() {
		return (
			<div className='plant-results-loader ui segment'>
				<div className='ui active inverted dimmer'>
					<div className='ui text loader'>Loading</div>
				</div>
				<p />
			</div>
		);
	}

	handleNoResults() {
		return (
			<div
				style={{ marginTop: "1em" }}
				className='plant-results no-results font-disabled med-font ui header'
			>
				No Results
			</div>
		);
	}

	handleResults(plantResults) {
		if (plantResults.length < 1) {
			return this.handleNoResults();
		}

		return plantResults.map(item => {
			return <PlantListItem key={item.id} item={item} />;
		});
	}

	render() {
		let { plantResults, isLoading } = this.props;

		if (isLoading === true) {
			return this.handleIsLoading();
		}

		if (!plantResults) {
			return this.handleNoResults();
		}

		return (
			<div className='plant-results-wrapper ui middle aligned divided list'>
				{this.handleResults(plantResults)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		plantResults: state.currentSearch,
		isLoading: state.isLoading
	};
};

export default connect(mapStateToProps)(PlantResults);
