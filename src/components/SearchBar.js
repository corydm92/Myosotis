import React from "react";
import { connect } from "react-redux";

import { searchTerm, trefleQuery, isLoading } from "../actions";

import "../css/SearchBar.css";

class SearchBar extends React.Component {
	componentDidMount() {
		// Turn this off, just for testing
		// this.props.isLoading();
		// this.props.trefleQuery(this.props.searchTerm);
	}
	handleOnChange(term) {
		this.props.searchTerm(term);
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.isLoading();
		this.props.trefleQuery(this.props.searchTerm);
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
	{ searchTerm, trefleQuery, isLoading }
)(SearchBar);
