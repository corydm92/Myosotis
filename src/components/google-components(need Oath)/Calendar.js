import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import getEvents from "./gcal";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
	state = { events: [] };

	componentDidMount() {
		getEvents(event => {
			this.setState({ events: event });
		});
	}

	render() {
		console.log(this.state.events);
		// console.log(oathClient);

		// let {
		// 	client_id,
		// 	client_secret,
		// 	auth_uri,
		// 	token_uri,
		// 	redirect_uris
		// } = oathClient.web;

		// console.log(client_id);

		// var ClientOAuth2 = require("client-oauth2");
		// var googleAuth = new ClientOAuth2({
		// 	clientId: client_id,
		// 	clientSecret: client_secret,
		// 	accessTokenUri: token_uri,
		// 	authorizationUri: auth_uri,
		// 	redirectUri: "http://localhost:3000",
		// 	scopes: ["https://www.googleapis.com/auth/calendar"]
		// });

		// console.log(googleAuth);

		return (
			<div>
				<button onClick={() => console.log(this.state)}>Button</button>
				<BigCalendar
					localizer={localizer}
					events={this.state.events}
					style={{ height: "100vh" }}
				/>
			</div>
		);
	}
}

export default Calendar;
