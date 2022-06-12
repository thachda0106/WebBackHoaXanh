import React, { useState, useContext, useEffect } from 'react';
import context from '../../constants/Context';
import { Functions } from '../../utils/Function';
import CarouselType from './CarouselType';
import VouchersOfType from './VouchersOfType';

const CollectVoucher = () => {
	const [ state, dispatch ] = useContext(context);
	const [ type, setType ] = useState('Explore');
    const[ vouchersOfType, setVouchersOfType] = useState (state.data.vouchers)
	useEffect(
		() => {
			if (type === 'Explore') setVouchersOfType(state.data.vouchers)
			else {
				let vouchers = state.data.vouchers.filter((voucher) => {
					let p =  Functions.findProduct(state.data.products, voucher.productID)
                    let category = Functions.findCategory(state.data.categories, p?.categoryID)
                    return category?.name == type ? true: false
				});
                setVouchersOfType(vouchers)
            }
		},
		[ type ]
	);
	// console.log('rerender collect Voucher', type, vouchersOfType);
	return (
		// page Collect Voucher
		<div className="w-full h-full mt-14 flex justify-center bg-colorBgGray relative top-0 left-0 right-0 ">
			<div className="w-3/6 h-auto bg-white shadow-sm my-5 px-5 pt-2 ">
				{/* Page Title */}
				<div className="w-full h-auto my-2 hover:cursor-pointer">
					<h1 className="flex flex-row items-center gap-1">
						Khuyễn mãi{' '}
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
						Thu thập mã khuyến mãi
					</h1>
				</div>
				{/* Carousel Type */}
				<div className="p-2 ">
					<CarouselType type={type} onChangedType={setType} />
				</div>

				{/* Voucher Collect */}
				<div>
					<VouchersOfType vouchers={vouchersOfType} />
				</div>
			</div>
		</div>
	);
};

export default CollectVoucher;
