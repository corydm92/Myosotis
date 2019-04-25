const init = { bool: false, id: null };

const isLoadingDetails = (state = init, action) => {
	switch (action.type) {
		case "ITEM_DETAILS_LOADING":
			return { bool: true, id: action.payload };
		case "ITEM_DETAILS_DONE":
			return init;
		default:
			return state;
	}
};

export default isLoadingDetails;
