const previousDetailsIdsReducer = (state = [], action) => {
	switch (action.type) {
		case "PREVIOUS_DETAIL_IDS":
			return [...state, action.payload];
		default:
			return state;
	}
};

export default previousDetailsIdsReducer;
