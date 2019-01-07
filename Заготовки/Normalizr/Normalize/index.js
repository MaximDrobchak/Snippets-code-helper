// https://github.com/taming-the-state-in-react/taming-the-state-in-react-portuguese/blob/master/manuscript/05-redux-advanced/00a-redux-state.md
//https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#normalizedata-schema
import { schema, normalize } from 'normalizr';

const todos = [
	{
		id: '0',
		name: 'create redux',
		completed: true,
		assignedTo: {
			id: '99',
			name: 'Dan Abramov',
		},
	},
	{
		id: '1',
		name: 'create mobx',
		completed: true,
		assignedTo: {
			id: '77',
			name: 'Michel Weststrate',
		},
	},
];

const assignedToSchema = new schema.Entity('assignedTo');

const todoSchema = new schema.Entity('todo', {
	assignedTo: assignedToSchema,
});

const normalizeData = normalize(todos, [todoSchema]);
console.log(normalizeData);