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
				<Link className='ui button' to='/'>
					Search
				</Link>

				<Link className='ui button' to='/collection'>
					Collection
				</Link>
			</div>
		);
	}
}

export default NavBar;
