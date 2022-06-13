import React, { useContext } from 'react';
import Context from '../../../constants/Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css'
const Carousel = ({ type, onChangedType }) => {
	const [ state, dispatch ] = useContext(Context);
	// console.log('rerender carousel' + type);
	return (
		<div>
			<Swiper
				spaceBetween={50}
				slidesPerView={8}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				className=" w-full h-auto"
			>
				<SwiperSlide
					key={0}
					onClick={() => onChangedType('Explore')}
					className= {`w-24 h-16 flex flex-col justify-center hover:cursor-pointer ${type === 'Explore'? 'active': '' } `}
				>
					<img
						className="w-11 h-11 self-center"
						src={
							'https://thumbs.dreamstime.com/b/inspiring-design-explore-letter-symbol-logo-vector-illustration-unique-drawn-activity-script-print-wild-explorer-black-white-169644956.jpg'
						}
					/>
					{/* <p className="text-center text-colorGreen">Explore</p> */}
				</SwiperSlide>
				{state.data.categories.map((category) => {
					return (
						<SwiperSlide
							key={category.categoryID}
							onClick={() => onChangedType(category.name)}
							className= {`w-24 h-16 flex flex-col justify-center hover:cursor-pointer ${type ===  category.name ? 'active': '' } `}
						>
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
							{/* <p className="text-center text-colorGreen">{category.name}</p> */}
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Carousel;
