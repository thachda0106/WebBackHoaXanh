import axios from 'axios';

const request = axios.create({
	baseURL: 'https://bach-hoa.herokuapp.com/',
	headers: { "Content-Type": "application/json" },
});

export const get = async (path, options = {}) => {
	const response = await request.get(path, options);
	return response;
};

export const post = async (path, options = {}) => {
	const response = await request.post(path, options);
	return response;
}

export const del = async (path, options = {}) => {
	const response = await request.delete(path, options);
	return response;
}

export default request;
