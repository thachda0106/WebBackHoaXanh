import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function Slider() {
	return (
		<div className="h-auto w-full bg-colorBgGray">
			<div className="w-auto h-auto mt-14 flex justify-center">
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: false
					}}
					pagination={true}
					className=" w-full h-auto"
				>
					<SwiperSlide className="w-auto h-auto flex justify-center">
						<img src="/banner1.jpg" alt="image" className="w-5/6 h-auto" />
					</SwiperSlide>
					<SwiperSlide className="w-full h-auto flex justify-center">
						<img src="/banner2.png" alt="image" className="w-5/6 h-auto" />
					</SwiperSlide>
					<SwiperSlide className="w-full h-auto flex justify-center">
						<img src="/banner3.png" alt="image" className="w-5/6 h-auto" />
					</SwiperSlide>
					<SwiperSlide className="w-full h-auto flex justify-center">
						<img src="/banner4.png" alt="image" className="w-5/6 h-auto" />
					</SwiperSlide>
					<SwiperSlide className="w-full h-auto flex justify-center">
						<img src="/banner5.png" alt="image" className="w-5/6 h-auto" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default Slider;
