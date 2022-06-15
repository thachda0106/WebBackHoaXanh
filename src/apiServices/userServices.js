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

export const deleleUserCart = async ({ userID, productID }) => {
	try {
		const res = await request.get(`delete-product-from-cart/${userID}/${productID}`);
		return res.data
	} catch (error) {
		return error.response
		console.log(error);
	}
};


export const updateUser = async ({ user }) => {
	try {
		const res = await request.put(`users/update/${user.userID}`, JSON.stringify(user));
		return res
	} catch (error) {
		return error.response
		console.log(error);
	}
};

export const addUser = async (user) => {
	let data = JSON.stringify({
		userID: user.userID,
		// userImage: user.userImage,
		fullName: user.fullName,
		emailAddress: user.emailAddress,
		username: user.username,
		password: user.password,
		address: "",
		phoneNumber: user.phoneNumber,

		userType: "USER",

		shippingAddress: "",
	})
	console.log("data: " + data)
	try {
		const res = await request.post('users/add', JSON.stringify(data))
		return res
	} catch (error) {
		console.log(error.response);
		return error.response
	}
};