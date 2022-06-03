import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function Category({ categories }) {
	return (
		<div className="w-full h-auto bg-white rounded-lg mt-2">
			<h3 className="w-full h-9 p-2 text-base ">Danh mục sản phẩm </h3>
			<div className="w-full h-20 flex flex-row justify-start">
				<Swiper
					spaceBetween={50}
					slidesPerView={8}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className=" w-full h-auto"
				>
					{categories.map((category) => {
						return (
							<SwiperSlide key={category.categoryID} className="w-24 h-16 flex flex-col justify-center  ">
								<img
									className="w-11 h-11 self-center"
									src={
										category['categoryImage'] == null ? (
											`https://bach-hoa.herokuapp.com/images/files/categories/${category.categoryID}`
										) : (
											category.categoryImage
										)
									}
								/>
								<p className="text-center text-colorGreen">{category.name}</p>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}

export default Category;
