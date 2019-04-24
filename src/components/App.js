import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import HomeLink from "./HomeLink";
import CollectionLink from "./CollectionLink";
import "../css/main.css";
import "../css/App.css";

class App extends React.Component {
	render() {
		return (
			<div className='app-wrapper bg-main-white'>
				<Header />
				<div className='ui container main-content'>
					<Route exact path='/' component={HomeLink} />
					<Route path='/collection' component={CollectionLink} />
				</div>
			</div>
		);
	}
}

export default App;
