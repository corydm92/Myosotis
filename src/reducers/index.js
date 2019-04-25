import { combineReducers } from "redux";

import searchTerm from "./searchTerm";
import trefleQuery from "./trefleQuery";
import isLoading from "./isLoading";
import plantListItem from "./plantListItem";
import isLoadingDetails from "./isLoadingDetails";
import previousDetailIds from "./previousDetailIds";
import addToCollection from "./addToCollection";

export default combineReducers({
	searchTerm: searchTerm,
	currentSearch: trefleQuery,
	isLoading: isLoading,
	plantListItems: plantListItem,
	isLoadingDetails: isLoadingDetails,
	previousDetailIds: previousDetailIds,
	collection: addToCollection
});
