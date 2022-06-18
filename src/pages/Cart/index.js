import React, { useContext, useEffect, useCallback, useState, useRef } from 'react';
import Context from '../../constants/Context';
import { Link } from 'react-router-dom';
import Item from './Item';
import { Functions } from '../../utils/Function';
import { Actions } from '../../constants/Actions';
import { deleleUserCart } from '../../apiServices/userServices';
import VoucherList from './VoucherList';
import Order from './Order';
function Cart() {
	const [ state, dispatch ] = useContext(Context);
	const [ totalPrice, setTotalPrice ] = useState(0);
	const handleCheckedItems = useCallback((price) => {
		setTotalPrice((pre) => pre + price);
	}, []);
	const [ refresh, setRefresh ] = useState();
	const handleDeleteItem = (productID) => {
		dispatch(Actions.deleteUserCart(productID));
		deleleUserCart(state.userLogin.info.userID, productID);
		setRefresh(Math.random());
	};
	const [ voucher, setVoucher ] = useState();
	var voucherListRef = useRef();
	var cartContent = useRef();
	var orderDetail = useRef();
	const handleBackToCart = (e) => {
		cartContent.current.style.display = 'block';
		voucherListRef.current.style.display = 'none';
		orderDetail.current.style.display = 'none';
		setVoucher(Functions.findVoucherUser(e.target.id, state.userLogin.info.userListVoucher));
	};
	const handleUseVoucher = () => {
		voucherListRef.current.style.display = 'block';
		cartContent.current.style.display = 'none';
	};

	let [ discountValue, setDiscountValue ] = useState(0);
	const handleVoucher = (voucherDiscount) => {
		setDiscountValue(voucherDiscount);
	};
	const [ listCartOrder, setListCartOrder ] = useState([]);
	const handleOrder = (data) => {
		let index = listCartOrder.findIndex((cartOrder) => cartOrder.productID == data.productID);
		if (index === -1) setListCartOrder((pre) => [ ...pre, data ]);
		else
			setListCartOrder((pre) => {
				pre[index] = data;
				return pre;
			});
	};

	const [ orderDetailCart, setOrderDetailCart ] = useState();
	const handelOrderDetail = () => {
		setOrderDetailCart( { listCartOrder, totalPrice, discountValue, voucher });
	};

	useEffect(()=>{
		console.log(orderDetailCart)
		if(!orderDetailCart?.listCartOrder) return 
		else if( orderDetailCart?.listCartOrder.every(cart => !cart.checked )){
			 window.alert('Xin vui lòng chọn sản phẩm!')
		}else{
			orderDetail.current.style.display = 'block';
			cartContent.current.style.display = 'none';
		}
	}, [orderDetailCart])


	console.log({voucher, discountValue})
	return (
		// {Container}
		<div>
			<div ref={orderDetail} className="hidden ">
				{ orderDetailCart && <Order orderDetailCart={orderDetailCart} onBackToCart = {handleBackToCart} />}
			</div>
			<div ref={voucherListRef} className="hidden ">
				<VoucherList onBackToCart={handleBackToCart} />
			</div>
			<div ref={cartContent}>
				<div className="w-full h-auto mt-14  bg-colorBgGray flex justify-center">
					{/* Wrapper item */}
					<div className="w-3/6 h-auto bg-white shadow-sm my-5 px-5 pt-2">
						{/* Page Title */}
						<div className="w-full h-auto my-2 hover:cursor-pointer">
							<h1 className="flex flex-row items-center gap-1">
								Giỏ hàng{' '}
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
								Giỏ hàng của bạn
							</h1>
						</div>

						{/* List products */}
						<div>
							<h2>Danh sách sản phẩm</h2>
							{state.userLogin.info.userListCart.length === 0 ? (
								<h3>Không có sản phẩm nào!</h3>
							) : (
								state.userLogin.info.userListCart.map((item) => {
									return (
										<Item
											onOrder={handleOrder}
											onVoucher={handleVoucher}
											voucher={voucher}
											handleDeleteItem={handleDeleteItem}
											key={item.productID}
											item={item}
											onCheckedItem={handleCheckedItems}
										/>
									);
								})
							)}
							<div />
						</div>

						{/* Order bar */}
						<div className="flex flex-col items-end ">
							{/* Voucher */}
							<div className="flex flex-row justify-between w-full px-4">
								<div className="flex flex-row items-center gap-2 ">
									<h3>Voucher</h3>
									<img src={'voucher.png'} width={40} height={40} />
								</div>
								<span
									onClick={handleUseVoucher}
									className="text-sm text-colorPrimary self-center hover:cursor-pointer hover:opacity-80 "
								>
									Chọn mã giảm giá
								</span>
							</div>
							{/* Total price */}
							<div className="flex flex-row justify-between w-full px-4">
								<p>Giảm giá</p>
								<span className="text-red-400 ">- {discountValue ? Functions.toVND(discountValue) : 0}</span>
							</div>
							<div className="flex flex-row justify-between w-full px-4">
								<p>Tổng tiền</p>
								<span>{Functions.toVND(totalPrice - discountValue)}</span>
							</div>
							<button
								onClick={handelOrderDetail}
								className="w-auto h-auto px-4 py-1 bg-colorPrimary text-white rounded-full hover:bg-colorPrimaryDark "
							>
								Thanh Toán
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
