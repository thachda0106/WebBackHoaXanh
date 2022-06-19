import React, { useContext, useState } from 'react';
import Context from '../../../constants/Context';
import { Functions } from '../../../utils/Function';
import {addOrder} from '../../../apiServices/orderServices'
import {updateUser} from '../../../apiServices/userServices'
import LoadingAwait from '../../../components/Loading/LoadingAwait'
import {Navigate} from 'react-router-dom'
import {Actions} from '../../../constants/Actions'
const Order = ({ orderDetailCart, onBackToCart }) => {
	const [ state, dispatch ] = useContext(Context);
	const [Loading, setLoading] = useState(false)
	const [isOrder,setIsOrder] = useState(false)
	if (!orderDetailCart) return <div />;
	const { listCartOrder, totalPrice, discountValue, voucher } = orderDetailCart;
	var listProductCart = listCartOrder.reduce((list, cart) => {
		if (!cart.checked) return list;
		let product = Functions.findProduct(state.data.products, cart.productID);
		return ([
			...list,
			{
				productID: product.productID,
				picture: product.productImage,
				productName: product.name,
				price: product.price,
				discountPercent: product.discountPercent,
				quantity: cart.data.quantity
			}
		]);
	},[]);

	var orderDetail = {
		userID: '1',
		orderStatus: 'PENDING',
		dateCreate: Math.floor(Date.now() / 1000),
		dateDelivery: 0,
		shippingAddress: state.userLogin.info.address,
		listProductCart,
		voucherDiscount: discountValue,
		voucherID: voucher?.voucherID,
	};

	const handleOrder= async ()=>{
		setLoading(true);
		let res = await addOrder(orderDetail)
		if(res.status >= 200 && res.status < 300 ){
		
			// update init state
			dispatch(Actions.updateUserListCart(listProductCart))
			if(voucher){
				dispatch(Actions.updateUserListVoucher(voucher.voucherID))
			} 
			let res  = await updateUser(state.userLogin.info)
			setLoading(false);
			console.log(res)
			alert("Đặt hàng thành công!")
			//
			setIsOrder(true)
		}else alert("Lỗi đặt hàng! Kiểm tra đường truyền mạng của bạn!")
	}
	return (

		<div className="w-full h-full mt-14 bg-colorBgGray flex justify-center relative top-0 left-0 right-0 ">
			{isOrder && <Navigate to="/" replace={true} />}
			<LoadingAwait isLoading = {Loading} />
			<div className="w-3/6 bg-white shadow-sm my-5 px-5 pt-2">
				{/* Page Title */}
				<div className="w-full h-auto my-2 hover:cursor-pointer">
					<h1 className="flex flex-row items-center gap-1">
						<span className="text-colorPrimary" onClick={onBackToCart}>
							Giỏ hàng{' '}
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>{' '}
						Đặt hàng
					</h1>
				</div>
				{/* Container */}
				<div>
					{/* Địa chỉ giao hàng */}
					<div className="flex flex-col border border-colorGrayText shadow-lg z-10 p-4 my-2 ">
						{/* ho ten */}
						<span className="flex flex-row my-1 gap-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							<strong>HỌ TÊN: {state.userLogin.info.fullName}</strong>{' '}
						</span>
						<span className="flex flex-row my-1 gap-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							<strong>SĐT:{state.userLogin.info.phoneNumber}</strong>{' '}
						</span>
						<span className="flex flex-row my-1 gap-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<strong>Địa chỉ: {state.userLogin.info.shippingAddress} </strong>
						</span>
					</div>

					{/* danh sach dat hang */}
					<div>
						<h2 className="font-bold text-colorPrimary  ">Danh sách sản phẩm</h2>
						<div>
							{listCartOrder.map((cart) => {
								if (!cart.checked) return <div />;
								else {
									let product = Functions.findProduct(state.data.products, cart.productID);
									return (
										<div className="flex flex-row mt-1 px-4 py-2 shadow-md ">
											<img src={product.productImage} width={150} height={'auto'} />
											<p className="flex flex-col">
												<span> {product.name} </span>
												<span>số lượng: {cart.data.quantity}</span>
												<span>Giá: {Functions.toVND(product.price)}</span>
												<span>
													Tạm tính: {Functions.toVND((cart.data.price)* cart.data.quantity )}
												</span>
											</p>
										</div>
									);
								}
							})}
						</div>
					</div>

					{/* tinh tien */}

					<div className="my-2">
						<div className="flex flex-row justify-start w-full px-4 gap-4">
							<p>Giảm giá:</p>
							<span className="text-red-400 ">- {Functions.toVND(discountValue)}</span>
						</div>
						<div className="flex flex-row justify-start w-full px-4 gap-4">
							<p>Tổng tiền:</p>
							<span>{Functions.toVND(totalPrice - discountValue)}</span>
						</div>
						<button onClick={handleOrder} className="w-auto h-auto px-4 py-1 bg-colorPrimary text-white rounded-full hover:bg-colorPrimaryDark ">
							Đặt hàng
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
