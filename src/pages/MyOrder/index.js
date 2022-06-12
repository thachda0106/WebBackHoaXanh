import React, { useState, useEffect, useContext } from 'react';
import { searchAllOrderUser } from '../../apiServices/orderServices';
import LoadingAwait from '../../components/Loading/LoadingAwait';
import { Link, Outlet } from 'react-router-dom';
import Context from '../../constants/Context';
import { Functions } from '../../utils/Function';
import './styles.css';
const MyOrder = () => {
	const [ state, dispatch ] = useContext(Context);
	const [ data, setData ] = useState({ type: 'ALL' });
	const [ isLoading, setIsLoading ] = useState(false);
	useEffect(() => {
		handleGetUserOrders();
	}, []);
	const handleGetUserOrders = async () => {
		let res = await searchAllOrderUser(state.userLogin.info.userID);
		let orders = Functions.orderBy(res.data, 'dataCreate', -1);
		setIsLoading(true);
		setData({ ...data, orders: orders, ordersOfType: orders });
	};
	const handleChangedType = (type) => {
		if (type === 'ALL') {
			setData({ ...data, type: 'ALL', ordersOfType: data.orders });
			return;
		}
		// let ordersOfType = data.orders.filter(order => order.)
		setData({ ...data, type, ordersOfType: data.orders.filter((order) => order.orderStatus === type) });
	};
	console.log(data);
	if (!isLoading) return <LoadingAwait isLoading={!isLoading} />;
	return (
		<div className="w-full h-auto mt-14  bg-colorBgGray flex justify-center">
			{/* Wrapper item */}
			<div className="w-3/6 h-auto bg-white shadow-sm my-5 px-5 pt-2">
				{/* Page Title */}
				<div className="w-full h-auto my-2 hover:cursor-pointer">
					<h1 className="flex flex-row items-center gap-1">
						Đơn hàng{' '}
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
						Đơn hàng của bạn
					</h1>
				</div>
				{/* Orders Types */}
				<div className=" w-full flex flex-row justify-around ">
					{[ 'ALL', 'PENDING', 'DELIVERING', 'RECEIVED' ].map((type, index) => {
						return (
							<span
								onClick={() => {
									handleChangedType(type);
								}}
								key={index}
								className={` py-2 px-4 font-bold text-sm rounded-full hover:cursor-pointer hover:bg-colorGrayBackground ${data.type ===
								type
									? 'active'
									: ''}`}
							>
								{Functions.covertOrderStatus(type)}
							</span>
						);
					})}
				</div>
				{/* List orders Of type */}
				{data.ordersOfType.map((order) => {
					let src = '';
					if (order.orderStatus === 'PENDING') src = './PENDING.png';
					else if (order.orderStatus === 'DELIVERING') src = './DELIVERING.png';
					else src = './RECEIVED.png';
					return (
						<Link to={`${order.orderID}`}>
							<div className="flex flex-row justify-start gap-10 px-4 py-2 shadow-md my-2 hover:cursor-pointer ">
								{/* orderImage */}
								<img src={src} width={80} height={'auto'} />
								{/* order Content*/}
								<div className="px-2 py-2">
									<h3 className=" text-sm text-colorGrayText font-light">
										Đơn hàng #{order.orderID}
									</h3>
									<span className=" text-xs text-colorGrayText font-light">
										{Functions.timestampToDateTime(order.dateCreate)}
									</span>
									<p>{Functions.getOrderName(order)}</p>
									<span className="text-red-400 ">
										{Functions.toVND(Functions.getOrderAllPrice(order))}
									</span>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default MyOrder;
