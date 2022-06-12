import * as request from '../utils/request';

export const addOrder = async (order) => {
	try {
		const res = await request.post('orders/add', JSON.stringify(order));
		return res
	} catch (error) {
        console.log(error.response);
        return error.response
	}
};

export const searchAllOrderUser = async (userID) => {
	try {
		const res = await request.get(`orders/load-order-user/${userID}`);
		return res
	} catch (error) {
        console.log(error.response);
        return error.response
	}
};