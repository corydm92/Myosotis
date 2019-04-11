import React from "react";
import ReactDOM from "react-dom";
import config from "./config.json";
import axios from "axios";
// config.TOKEN for Trefle api key

class App extends React.Component {
	componentDidMount() {
		var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
		axios
			.get(corsAnywhere + "https://trefle.io/api/plants", {
				headers: {
					Authorization: "Bearer a2NscWtXRkx4dEI5UlpIQ01FWVJOdz09"
				}
			})
			.then(res => console.log(res))
			.catch(err => console.log(err));
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
