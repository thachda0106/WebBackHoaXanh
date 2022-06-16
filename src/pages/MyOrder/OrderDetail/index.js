import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { searchOrderById } from '../../../apiServices/orderServices';
import LoadingAwait2 from '../../../components/Loading/LoadingAwait2';
import Context from '../../../constants/Context';
import { Functions } from '../../../utils/Function';
const OrderDetail = () => {
	let { orderID } = useParams();
	const [ state, dispatch ] = useContext(Context);
	const [ data, setData ] = useState({ isLoaded: false });

	useEffect(
		() => {
			setData({ isLoaded: false });
			handleGetData();
		},
		[ orderID ]
	);
	const handleGetData = async () => {
		let res = await searchOrderById(orderID);
		if (res.status >= 200 && res.status < 300) {
			setData({ isLoaded: true, order: res.data });
		} else alert('Lỗi đường truyền!');
	};
	console.log(data);

	return (
		<div className="w-3/6 h-auto bg-white shadow-sm my-5 px-5 pt-2">
			{/* Page Title */}
			<h3 className="mt-8">
				Đơn hàng <span className="font-bold text-colorPrimaryLight  ">#{orderID}</span>
			</h3>
			{/*  */}
			{!data.isLoaded ? (
				<LoadingAwait2 isLoading={!data.isLoaded} />
			) : (
				<div>
					<p>
						Trạng thái đơn hàng:{' '}
						<span className="text-colorGrayText ">
							{Functions.covertOrderStatus(data.order.orderStatus)}
						</span>
					</p>
					<h3>Thông tin người đặt hàng</h3>
					{/* Thông tin khách hàng */}
					<div className="flex flex-col border border-colorGrayText shadow-lg z-10 p-1 w-full ">
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
							<strong>Người đặt: {state.userLogin.info.fullName}</strong>{' '}
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
							<strong>Địa chỉ giao hàng: {state.userLogin.info.address} </strong>
						</span>
					</div>
					{/* danh sach dat hang */}
					<div>
						<h2 className="font-bold text-colorPrimary  ">Danh sách sản phẩm</h2>
						<div>
							{data.order.listProductCart.map((product) => {
								
								return (
									<div className="flex flex-row mt-1 px-4 py-2 shadow-md ">
										<img src={Functions.findProduct(state.data.products,product.productID).productImage} width={150} height={'auto'} />
										<p className="flex flex-col">
											<span> {product.name} </span>
											<span>số lượng: {product.quantity}x</span>
											<span>Giá: {Functions.toVND(product.price - product.price*product.priceDiscount/100)}</span>
											<span>
												Tạm tính: {Functions.toVND(product.price * product.quantity)}
											</span>
										</p>
									</div>
								);
							})}
						</div>
					</div>

					{/* tinh tien */}

					<div className="my-2">
						<div className="flex flex-row justify-start w-full px-4 gap-4">
							<p>Giảm giá:</p>
							<span className="text-red-400 ">- {Functions.toVND(data.order.voucherDiscount)}</span>
						</div>
						<div className="flex flex-row justify-start w-full px-4 gap-4">
							<p>Tổng tiền:</p>
							<span>{Functions.toVND(Functions.getOrderAllPrice(data.order))}</span>
						</div>
						
					</div>
				</div>
			)}
		</div>
	);
};

export default OrderDetail;
