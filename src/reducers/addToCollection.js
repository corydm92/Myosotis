const addToCollection = (state = [], action) => {
	switch (action.type) {
		case "ADD_TO_COLLECTION":
			return [...state, action.payload];
		case "REMOVE_FROM_COLLECTION":
			return [...state].filter(item => item.id !== action.payload);
		default:
			return state;
	}
};

export default addToCollection;
