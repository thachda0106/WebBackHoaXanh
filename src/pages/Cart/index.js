import React, { useContext, useCallback, useState } from 'react';
import Context from '../../constants/Context';
import { Link } from 'react-router-dom';
import Item from './Item';
import { Functions } from '../../utils/Function';
import { Actions } from '../../constants/Actions';
import {deleleUserCart} from '../../apiServices/userServices'

function Cart() {
	const [ state, dispatch ] = useContext(Context);
	const [ totalPrice, setTotalPrice ] = useState(0);
	const handleCheckedItems = useCallback((price) => {
		setTotalPrice((pre) => pre + price);
	}, []);
	const [ refresh, setRefresh ] = useState();
	const handleDeleteItem = (productID) => {
		dispatch(Actions.deleteUserCart(productID));
		setRefresh(Math.random());
		deleleUserCart(state.userLogin.info.userID, productID)
	};
	return (
		// {Container}
		<div className="w-full h-auto mt-14  bg-colorBgGray flex justify-center  ">
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
					{state.userLogin.info.userListCart.length === 0? (
						<h3>Không có sản phẩm nào!</h3>
					) : (
						state.userLogin.info.userListCart.map((item) => {
							return (
								<Item
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

				<div>
					<div>
						<p>
							Tổng tiền: <span>{Functions.toVND(totalPrice)}</span>
						</p>
					</div>
					<Link to="/order">
						<button className="w-auto h-auto px-4 py-1 bg-colorPrimary text-white rounded-full hover:bg-colorPrimaryDark ">
							Thanh Toán
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Cart;
