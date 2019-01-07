import axios from 'axios';

export const defaultFetch = axios.create({
	baseURL: `https://uxcandy.com/~shapoval/test-task-backend`,
	method: 'GET',
});

export const fetchTasks = query => defaultFetch('' + query);
