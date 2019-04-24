import trefle from "../apis/trefle";

export const searchTermAction = term => {
	return {
		type: "SEARCH_TERM",
		payload: term
	};
};

export const isLoadingAction = () => {
	return {
		type: "IS_LOADING"
	};
};

export const isLoadingDetailsAction = id => {
	return {
		type: "ITEM_DETAILS_LOADING",
		payload: id
	};
};

export const trefleQueryAction = query => async dispatch => {
	const response = await trefle.get("", { params: { q: query } });
	dispatch({ type: "TREFLE_QUERY", payload: response.data });
	dispatch({ type: "DONE_LOADING" });
};

export const plantListItemAction = id => async (dispatch, getState) => {
	if (getState().previousDetailIds.includes(id)) {
		dispatch({ type: "ITEM_DETAILS_DONE" });
		return null;
	}

	dispatch({ type: "PREVIOUS_DETAIL_IDS", payload: id });
	const response = await trefle.get(`/${id}`);
	dispatch({ type: "PLANT_LIST_ITEM", payload: response.data });
	dispatch({ type: "ITEM_DETAILS_DONE" });
};
