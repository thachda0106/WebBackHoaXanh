import React, { useContext } from 'react';
import { Functions } from '../../../utils/Function';
import Context from '../../../constants/Context';
import { Link } from 'react-router-dom';
const VoucherList = ({onBackToCart}) => {
	const [ state, dispatch ] = useContext(Context);
	const vouchers = state.userLogin.info.userListVoucher;

	if(!vouchers) return <></>
	return (
		<div className="w-full h-full mt-14 bg-colorBgGray flex justify-center relative top-0 left-0 right-0 ">
			<div className="w-3/6 bg-white shadow-sm my-5 px-5 pt-2">
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
						Voucher của bạn (<Link to="/collect_voucher"><span className="text-colorPrimary">Thu thập mã</span></Link>)
					</h1>
				</div>
				<div>
					{vouchers.every(voucher => voucher.isUse === 'TRUE')? (<div className="mb-9 ">Bạn chưa có voucher nào đi thu thập thôi <Link to="/collect_voucher"><span className="text-colorPrimary">Thu thập</span></Link></div>) : ''}
					{vouchers.map((voucher) => {
						if (voucher.isUse === 'TRUE') return <div />;
						else
							return (
								// voucher container
								<div key={voucher.voucherID} className="flex flex-row px-4 py-2 gap-2  ">
									<img
										src={Functions.findProduct(state.data.products, voucher.productID)?.productImage}
										width={150}
										height={'auto'}
									/>
									{/* content voucher */}
									<div>
										<p>{voucher.description}</p>
										<span className="text-red-400 font-bold ">
											Giảm {voucher.discountValue}% <br /> tối đa{' '}
											{Functions.toVND(voucher.maxDiscountValue)} <br />
										</span>
										Từ {Functions.timestampToDate(voucher.dateStart)} <br />
										Đến {Functions.timestampToDate(voucher.dateEnd)} <br />
										<Link to="/cart">
											<div>
												<button id={voucher.voucherID} onClick={onBackToCart} className="w-auto h-auto px-4 py-1 bg-colorPrimary text-white rounded-full hover:bg-colorPrimaryDark ">
													Sử dụng
												</button>

											</div>
										</Link>
									</div>
								</div>
							);
					})}
				</div>
			</div>
		</div>
	);
};

export default VoucherList;
