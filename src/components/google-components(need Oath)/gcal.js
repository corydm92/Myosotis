import request from "superagent";
import axios from "axios";

const CALENDAR_ID =
	"corymorrissey.com_vl11st3h0gptg9kadpgj7o5il4@group.calendar.google.com";
const API_KEY = "apikey";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
	// exporting a function, not a component
	axios
		.get(url)
		.then(res => {
			const events = [];
			res.data.items.map(event => {
				events.push({
					start: event.start.date || event.start.dateTime,
					end: event.end.date || event.end.dateTime,
					title: event.summary
				});
			});

			callback(events); // Whats this doing?
			// getEvents( ( callback(events) goes here, returns the event array ) ... event => {
			// 	this.setState({ events: event });
			// });
		})
		.catch(err => console.log(err));
}

export default getEvents;

// request.get(url).end((err, resp) => {
// 	if (!err) {
// 		const events = [];
// 		JSON.parse(resp.text).items.map(event => {
// 			events.push({
// 				start: event.start.date || event.start.dateTime,
// 				end: event.end.date || event.end.dateTime,
// 				title: event.summary
// 			});
// 		});
// 		callback(events);
// 	}
// });
