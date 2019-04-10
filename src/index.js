import React from "react";
import ReactDOM from "react-dom";

import config from "./config.json";
// config.TOKEN for Trefle api key

class App extends React.Component {
	componentDidMount() {
		fetch("https://api.example.com/items")
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						items: result.items
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		return (
			<div>
				<h1>Myosotis</h1>
			</div>
		);
	}
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
