import * as request from '../utils/request';

export const searchAllUsers = async () => {
	try {
		const res = await request.get('users/all');
		return res.data
	} catch (error) {
		console.log(error);
	}
};

