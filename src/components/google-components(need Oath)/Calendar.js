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
		return (
			<div>
				<button onClick={() => console.log(this.state)}>Button</button>
				<BigCalendar localizer={localizer} events={this.state.events} style={{ height: "100vh" }} />
			</div>
		);
	}
}

export default Calendar;
