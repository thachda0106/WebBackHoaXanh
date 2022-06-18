import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../../constants/Context';
import { Functions } from '../../../utils/Function';
import Category from '../../../components/Home/Category';
import Slider from '../../../components/Home/Slider';
import Card from '../../../components/Home/ItemsList/Card'
const ProductsOfType = () => {
	const [ state, dispatch ] = useContext(Context);
	const { type } = useParams();
	const [ products, setProducts ] = useState(() => {
		if (type === 'discount') return state.data.products.filter((product) => Functions.checkHot(product));
		else {
			let products = state.data.products.filter((product) => product.name.includes(type));
			if(products.length > 0) return products
			else return (state.data.products.filter((product) => product.categoryID == type))
		}
	});
	const handleChangeType = (categoryID) => {
		setProducts(state.data.products.filter((product) => product.categoryID == type))
	}
	return (
		<>
			<Slider />
			<div className="w-full mb-14 h-auto flex flex-col justify-center items-center bg-colorBgGray">
				<div className="w-5/6">
					<Category onChange = {handleChangeType}  categories={state.data.categories} />
				</div>
				<div className="w-5/6">
					<div className="my-2">
						<h1 className=" h-12 w-full uppercase text-white font-bold bg-colorTextPrimary text-center flex justify-center ">
							<span className="self-center ">{type === 'discount' ? 'ĐANG GIẢM GIÁ' : Functions.findCategory(state.data.categories, type)?.name} </span>
						</h1>
						<div className="grid grid-flow-row grid-cols-4 gap-4 mt-2 ">
							{products.map((product) => {
								return <Card key={product.productID} product={product} />;
							})}
						</div>
						{products.length === 0 && <div>Không có sản phẩm nào!</div>
							
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductsOfType;
