const plantListItemReducer = (state = [], action) => {
	switch (action.type) {
		case "PLANT_LIST_ITEM":
			return [...state, action.payload];
		default:
			return state;
	}
};

export default plantListItemReducer;
