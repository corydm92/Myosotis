import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { Route, HashRouter } from "react-router-dom";
import App from "./components/App";

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.querySelector("#root")
);
