export const getNotifications = state => {
	return getArrayOfObject(state);
};

const getArrayOfObject = object => {
	const array = Object.keys(object).map(key => object[key]);
	return array;
};
