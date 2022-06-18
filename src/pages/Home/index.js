import React, { useEffect, useState, useContext } from 'react';
import { searchCategories } from '../../apiServices/categoryServices';
import Context from '../../constants/Context';
import Slider from '../../components/Home/Slider';
import Category from '../../components/Home/Category';
import ItemsList from '../../components/Home/ItemsList';
import Loading from '../../components/Loading';
import { Navigate } from 'react-router-dom';
const handleChangeType = (categoryID) => {
	return <Navigate to={`categories/${categoryID}`}/>
};
function Home() {
	const [ state, dispatch ] = useContext(Context);
	return (
		<div>
			<Slider />
			{!state.data.isLoading ? (
				<Loading />
			) : (
				<div className="w-full h-auto flex flex-col justify-center items-center bg-colorBgGray">
					<div className="w-5/6">
						<Category onChange={handleChangeType} categories={state.data.categories} />
					</div>
					<div className="w-5/6">
						<ItemsList type={'discount'} categoryName={'Đang giảm giá'} />
						{state.data.categories.map((category) => {
							return (
								<div key={category.categoryID}>
									<ItemsList categoryName={category.name} categoryID={category.categoryID} />
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
