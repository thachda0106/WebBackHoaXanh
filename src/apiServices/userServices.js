import { data } from 'autoprefixer';
import * as request from '../utils/request';

export const searchAllUsers = async () => {
	try {
		const res = await request.get('users/all');
		return res.data
	} catch (error) {
		console.log(error);
	}
};

export const deleleUserCart = async (userID, productID) => {
	try {
		const res = await request.get(`users/delete-product-from-cart/${userID}/${productID}`);
		return res.data
	} catch (error) {
		console.log(error);
		return error.response
	}
};


export const updateUser = async (user) => {
	try {
		const res = await request.put(`users/update/${user.userID}`, JSON.stringify(user));
		return res
	} catch (error) {
		console.log(error);
		return error.response
	}
};

export const addUser = async ( user ) => {
	try {
		const res = await request.post('users/add', JSON.stringify(data))
		return res
	} catch (error) {
		console.log(error.response);
		return error.response
	}
};

export const updateAvatar = async(userID, file) => {
	try {
		const res = await request.post(`/users/upload-photo/${userID}`, JSON.stringify(file))
		return res
	} catch (error) {
		console.log(error.response);
		return error.response
	}
};