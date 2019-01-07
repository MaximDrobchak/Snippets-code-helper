let obj = {};
function isfather(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 500);
	});
}
function isname(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 500);
	});
}
function ismather(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 500);
	});
}
const myAsync = async (object) => {
	try {
		object.mather = await ismather('Ludmila');

		object.father = await isfather('Vitaliy');

		object.name = await isname('Maksim');
	} catch (error) {

		throw new Error('Ops')
	}

}


myAsync(obj)
	.then(() => console.log(obj))


