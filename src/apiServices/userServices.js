import * as request from '../utils/request';

export const searchAllUsers = async () => {
	try {
		const res = await request.get('users/all');
		return res.data
	} catch (error) {
		console.log(error);
	}
};

export const deleleUserCart = async ({userID, productID}) => {
	try {
		const res = await request.get(`delete-product-from-cart/${userID}/${productID}`);
		return res.data
	} catch (error) {
		return error.response
		console.log(error);
	}
};