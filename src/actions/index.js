import trefle from "../apis/trefle";

export const searchTerm = term => {
	console.log(term);
	return {
		type: "SEARCH_TERM",
		payload: term
	};
};

export const isLoading = () => {
	return {
		type: "IS_LOADING"
	};
};

export const isLoadingDetails = id => {
	return {
		type: "ITEM_DETAILS_LOADING",
		payload: id
	};
};

export const removeFromCollection = id => {
	return {
		type: "REMOVE_FROM_COLLECTION",
		payload: id
	};
};

export const trefleQuery = query => async dispatch => {
	const response = await trefle.get("", { params: { q: query } });
	dispatch({ type: "TREFLE_QUERY", payload: response.data });
	dispatch({ type: "DONE_LOADING" });
};

export const plantListItem = id => async (dispatch, getState) => {
	if (getState().previousDetailIds.includes(id)) {
		dispatch({ type: "ITEM_DETAILS_DONE" });
		return null;
	}

	dispatch({ type: "PREVIOUS_DETAIL_IDS", payload: id });
	const response = await trefle.get(`/${id}`);
	dispatch({ type: "PLANT_LIST_ITEM", payload: response.data });
	dispatch({ type: "ITEM_DETAILS_DONE" });
};

export const addToCollection = item => {
	return {
		type: "ADD_TO_COLLECTION",
		payload: item
	};
};
