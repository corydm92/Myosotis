const addToCollectionReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_TO_COLLECTION":
			console.log(action.payload);
			return [...state, action.payload];
		default:
			return state;
	}
};

export default addToCollectionReducer;
