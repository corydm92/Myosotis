import React from "react";
import { connect } from "react-redux";

import {
	searchTermAction,
	trefleQueryAction,
	isLoadingAction
} from "../actions";

import "../css/SearchBar.css";

class SearchBar extends React.Component {
	// Turn this off, just for testing
	componentDidMount() {
		// this.props.isLoadingAction();
		// this.props.trefleQueryAction(this.props.searchTerm);
	}
	handleOnChange(term) {
		this.props.searchTermAction(term);
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.isLoadingAction();
		this.props.trefleQueryAction(this.props.searchTerm);
	};

	render() {
		return (
			<div className='search-bar-wrapper bg-main-white'>
				<form onSubmit={this.handleSubmit}>
					<div className='ui fluid icon input'>
						<input
							onChange={e => this.handleOnChange(e.target.value)}
							value={this.props.searchTerm}
							type='text'
							placeholder='Search for a plant...'
						/>
						<i className='search icon' />
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchTerm: state.searchTerm
	};
};

export default connect(
	mapStateToProps,
	{ searchTermAction, trefleQueryAction, isLoadingAction }
)(SearchBar);
