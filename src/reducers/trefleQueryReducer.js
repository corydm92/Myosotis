const trefleQueryReducer = (state = null, action) => {
	switch (action.type) {
		case "TREFLE_QUERY":
			return action.payload;
		default:
			return state;
	}
};

export default trefleQueryReducer;
