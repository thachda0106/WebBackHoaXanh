import * as request from '../utils/request';

export const searchAllProducts = async (type, categoryID) => {
	try {
		const res = await request.get('products/all');
		return res.data
	} catch (error) {
		console.log(error);
	}
};

export const searchProductsByCategory = async (type, categoryID) => {
	try {
		const res = await request.get('products/all');
		if (type == 'discount') return res.data.filter((product) => product.discountPercent > 0);
		else return res.data.filter((product) => product.categoryID == categoryID);
	} catch (error) {
		console.log(error);
	}
};
