import React from 'react';
import VoucherItem from './VoucherItem';
import { Functions } from '../../../utils/Function';

const VouchersOfType = ({ vouchers }) => {
	if(!vouchers.length) return <div><h1>Hiện không có voucher nào cho danh mục này!</h1></div>
    return (
		<div>
			{vouchers.map((voucher) => {
                if(voucher.quantity === 0 || !Functions.compareTimeNow(voucher.dateStart, voucher.dateEnd)) return <></>
				return <VoucherItem voucher={voucher} />;
			})}
		</div>
	);
};

export default VouchersOfType;
