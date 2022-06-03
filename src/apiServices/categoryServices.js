import * as request from '../utils/request';

export const searchCategories = async () => {
	try {
		const res = await request.get('categories/all');
		return res.data;
	} catch (error) {
		console.log(error);
	}
};


