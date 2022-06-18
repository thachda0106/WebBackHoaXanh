import React, { useState, useContext } from 'react';
import Card from './Card';
import Context from '../../../constants/Context';
import { Functions } from '../../../utils/Function';
import {Link} from 'react-router-dom'
function ItemsList({ type, categoryID, categoryName }) {
	const [ state, dispatch ] = useContext(Context);
	const [ productsShow, setProductsShow ] = useState(() => {
		if (type === 'discount') {
			return state.data.products.filter((product) =>  Functions.checkHot(product)).slice(0,8)
		} else {
			return state.data.products.filter((product) => product.categoryID == categoryID).slice(0,8)
		}
	});

	return (
		<div className="my-2">
			<h1 className=" h-12 w-full uppercase text-white font-bold bg-colorTextPrimary text-center flex justify-center ">
				<span className="self-center ">{categoryName} </span>
			</h1>
			<div className="grid grid-flow-row grid-cols-4 gap-4 mt-2 ">
				{productsShow.map((product) => {
					return <Card key={product.productID} product={product} />;
				})}
			</div>
			{productsShow.length > 0 ? (
				<Link to={`/categories/${type? type : categoryID}`} >
					<button className="px-4 py-1 mt-1 text-sm text-white font-semibold rounded-full border bg-colorPrimary border-purple-200 hover:bg-colorPrimaryDark ">
						Xem tất cả
					</button>
				</Link>
			) : (
				'Không có sản phẩm nào!'
			)}
		</div>
	);
}

export default ItemsList;
