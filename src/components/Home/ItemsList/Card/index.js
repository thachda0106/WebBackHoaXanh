import React from 'react';
import {Link, Navigate} from 'react-router-dom'
import {Functions} from '../../../../utils/Function'
function Cart({ product }) {
	return (
		<Link to={`/products/${product.productID}`} >
			<div className="h-auto bg-white drop-shadow-md hover:drop-shadow-xl p-3">
				<img src={product.productImage} />
				<h3>{product.name}</h3>
				<p className="flex flex-row">
					{Functions.toVND(product.price - product.discountPercent * product.price / 100)}{' '}
					{product.discountPercent && (
						<p className="ml-1">
							<span class="line-through mr-1">{Functions.toVND(product.price)}</span>
							<span class="text-white bg-red-500 rounded-md w-auto h-auto p-1">-{product.discountPercent}%</span>
						</p>
					)}
				</p>
				<button onClick={(console.log('đ'))} class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
					Mua
				</button>
			</div>
		</Link>
	);
}

export default Cart;
