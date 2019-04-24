import React from "react";

import SearchBar from "./SearchBar";
import PlantResults from "./PlantResults";
import Header from "./Header";
import "../css/main.css";
import "../css/App.css";

class App extends React.Component {
	render() {
		return (
			<div className='app-wrapper'>
				<Header />
				<div className='ui container main-content'>
					<SearchBar />
					<div className='plant-results-wrapper'>
						<PlantResults />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
