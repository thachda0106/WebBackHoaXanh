import * as request from '../utils/request';

export const searchAllComments = async () => {
	try {
		const res = await request.get('comments/all');
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const searchCommentsByProductsID = async (productID) => {
	try {
		const res = await request.get(`comments/load/by-product/${productID}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const addComment = async (comment) => {
	try {
		const res = await request.post('comments/add',
			JSON.stringify(comment),
		);
		return res;
	} catch (error) {
		return error
	}
};
