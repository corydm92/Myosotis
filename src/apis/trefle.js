import axios from "axios";
import config from "../config.json";

var corsAnywhere = "https://cors-anywhere.herokuapp.com"; // used as proxy server
var baseUrl = "https://trefle.io/api/plants"; // base url
var TOKEN = config.trefle.TOKEN;

export default axios.create({
	baseURL: corsAnywhere + "/" + baseUrl,
	headers: {
		Authorization: `Bearer ${TOKEN}`
	}
});
