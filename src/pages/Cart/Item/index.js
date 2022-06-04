import React, { useContext, useState, useRef } from 'react';
import { Functions } from '../../../utils/Function';
import Context from '../../../constants/Context';
const Items = ({ item, onCheckedItem, handleDeleteItem }) => {
	const [ state, dispatch ] = useContext(Context);
	var checkboxRef = useRef();
	const [ product, setProduct ] = useState(() => {
		return Functions.findProduct(state.data.products, item.productID);
	});
	const [ priceTemp, setPriceTemp ] = useState(() => {
		if (Functions.checkHot(product)) return product.price - product.discountPercent * product.price / 100;
		return product.price;
	});
	const [ data, setData ] = useState({ quantity: item.quantity, price: priceTemp * item.quantity });
	const handleChangedQuantity = (e) => {
		let prePrice = data.price;
		setData({ quantity: Number(e.target.value), price: Number(e.target.value) * priceTemp });
		if (checkboxRef.current.checked) {
			onCheckedItem(Number(e.target.value) * priceTemp - prePrice);
		}
	};
	const handleMinusQuantity = () => {
		if (data.quantity > 1) {
			if (checkboxRef.current.checked) onCheckedItem(-priceTemp);
			setData({ quantity: data.quantity - 1, price: data.price - priceTemp });
		} else {
			let result = window.confirm('Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng?')
			if(result) handleDeleteItem(item.productID)
		}
	};
	const handlePlusQuantity = () => {
		if (checkboxRef.current.checked) onCheckedItem(+priceTemp);
		setData({ quantity: data.quantity + 1, price: data.price + priceTemp });
	};
	return (
		// container
		<div className="w-full h-auto p-4 flex flex-row items-center justify-between ">
			{/* content */}
			<div className="w-6/12 h-auto flex flex-row items-center gap-3 ">
				<input
					ref={checkboxRef}
					type="checkbox"
					className="w-4 h-4"
					onClick={(e) => {
						if (e.target.checked) {
							onCheckedItem(data.price);
						} else onCheckedItem(-data.price);
					}}
				/>
				<img src={product.productImage} width={70} height={70} />
				<div>
					<h3>{product.name}</h3>
					<p>
						{Functions.toVND(product.price - product.discountPercent * product.price / 100)}{' '}
						{product.discountPercent > 0 &&
						Functions.checkHot(product) && (
							<span className="ml-1">
								<span class="line-through mr-1">{Functions.toVND(product.price)}</span>
								<span class="text-white bg-red-500 rounded-md w-auto h-auto p-1">
									-{product.discountPercent}%
								</span>
							</span>
						)}
					</p>
				</div>
			</div>
			<div class="w-auto h-6 flex flex-row justify-between">
				<span className="block" onClick={handleMinusQuantity}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 border border-colorGrayText hover:bg-colorPrimary hover:cursor-pointer  "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
					</svg>
				</span>
				<input
					onChange={handleChangedQuantity}
					value={data.quantity}
					type="text"
					autocomplete="off"
					className="w-8 h-6 text-center border border-colorGrayText"
				/>
				<span className="block" onClick={handlePlusQuantity}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 border border-colorGrayText hover:bg-colorPrimary hover:cursor-pointer "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
					</svg>
				</span>
			</div>
			{/* Gia */}
			<div>
				<p>{Functions.toVND(data.price)}</p>
			</div>
		</div>
	);
};

export default Items;
