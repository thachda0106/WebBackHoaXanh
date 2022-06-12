import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../../../constants/Context';
import { Functions } from '../../../../utils/Function';
import {Actions} from '../../../../constants/Actions'
import {AddUserCollectedVoucher} from '../../../../apiServices/voucherServices'
import LoadingAwait from '../../../../components/Loading/LoadingAwait'
const VoucherItem = ({ voucher }) => {
	const [ state, dispatch ] = useContext(Context);
	const [ isCollected, setIsCollected ] = useState(() => {
		return Functions.findVoucherUser(voucher.voucherID, state.userLogin.info.userListVoucher);
	});
	const [ product, setProduct ] = useState(() => {
		return state.data.products.find((product) => product.productID == voucher.productID);
	});
    const handleCollect = async ()=>{
        // changed initial state
        dispatch(Actions.addVoucherToUser(voucher))
        setIsCollected(true)
        // api add to voucher user
		let res = await AddUserCollectedVoucher(state.userLogin.info.userID,voucher)
		if(res.status >= 200 && res.status < 300){
			console.log(res.data)
		}else window.alert('Lỗi đường truyền mạng')
    }
	return (
		//   Voucher Items container
		<div key={voucher.voucherID} className="w-full h-auto p-4 shadow-md my-1 ">
			{/* Items content title */}
			<div>
				<h3>{voucher.description}</h3>
			</div>
			{/* Items content main */}
			<div className="flex flex-row w-full h-auto items-center justify-self-auto gap-32 my-2 ">
				{/* image product */}
				<img src={product.productImage} width={60} height={60} />
				{/* voucher discount */}
				<p className="text-colorPrimary w-32 ">
					<span className="text-red-500 font-bold text-lg ">{voucher.discountValue}%</span> Giảm <br />tối đa{' '}
					<span className="text-red-500 font-bold ">{voucher.maxDiscountValue}VND</span>
				</p>
				{/* Button */}
				{isCollected ? (
					<Link to="/cart">
						<button className="w-auto h-auto text-white bg-colorPrimary px-4 py-1 rounded-full font-bold text-sm ">
							{' '}
							Sử dụng
						</button>
					</Link>
				) : (
					<button onClick={handleCollect} className="w-auto h-auto text-white bg-colorTextOrange px-4 py-1 rounded-full font-bold text-sm ">
						{' '}
						Thu thập
					</button>
				)}
			</div>

			{/* Items content timer */}
			<div>
				<p>
					Voucher có hiệu lực từ {Functions.timestampToDate(voucher.dateStart)} -{' '}
					{Functions.timestampToDate(voucher.dateEnd)}
				</p>
			</div>
		</div>
	);
};

export default VoucherItem;
