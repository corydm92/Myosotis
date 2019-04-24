import { combineReducers } from "redux";

import searchTermReducer from "./searchTermReducer";
import trefleQueryReducer from "./trefleQueryReducer";
import isLoadingReducer from "./isLoadingReducer";
import plantListItemReducer from "./plantListItemReducer";
import isLoadingDetailsReducer from "./isLoadingDetailsReducer";
import previousDetailIdsReducer from "./previousDetailIdsReducer";
import addToCollectionReducer from "./addToCollectionReducer";

export default combineReducers({
	searchTerm: searchTermReducer,
	currentSearch: trefleQueryReducer,
	isLoading: isLoadingReducer,
	plantListItems: plantListItemReducer,
	isLoadingDetails: isLoadingDetailsReducer,
	previousDetailIds: previousDetailIdsReducer,
	collection: addToCollectionReducer
});
