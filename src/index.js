import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { Route, HashRouter } from "react-router-dom";
import App from "./components/App";
import { composeWithDevTools } from "redux-devtools-extension";

// let store = createStore(reducers, applyMiddleware(thunk));

const store = createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(thunk)
		// other store enhancers if any
	)
);

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.querySelector("#root")
);
