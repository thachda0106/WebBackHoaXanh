import * as request from '../utils/request';

export const searchAllVouchers = async () => {
	try {
		const res = await request.get('vouchers/all');
		return res.data;
	} catch (error) {
		console.log(error);
	}
};


export const AddUserCollectedVoucher = async (userID,voucher) => {
	try {
		const res = await request.put(`vouchers/add-to-voucher/${userID}`, JSON.stringify(voucher));
		return res
	} catch (error) {
		console.log(error);
		return error.response
	}
};

