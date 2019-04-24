import React from "react";
import "../css/NavBar.css";

import { Link } from "react-router-dom";

class NavBar extends React.Component {
	render() {
		return (
			<div
				style={{ marginTop: this.props.marginTop }}
				className='nav-bar two ui buttons'
			>
				<button className='ui button'>
					<Link to='/'>Search</Link>
				</button>

				<button className='ui button'>
					<Link to='/collection'>Collection</Link>
				</button>
			</div>
		);
	}
}

export default NavBar;
