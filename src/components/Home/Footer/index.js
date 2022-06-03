import React from 'react';

function Footer() {
	return (
		<div className="flex flex-col h-auto w-full z-20 bg-slate-600">
			{/* Policy */}
			<div className="flex flex-row w-full h-14 bg-slate-600 mt-2">
				<div className="w-1/2 h-full flex flex-row justify-center items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 mx-2 text-colorPrimary"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<p className="text-black  ">
						Đặt online giao tận nhà <span className="text-red-500">ĐÚNG GIỜ </span>
						<br /> (nếu trễ tặng PMH 50.000₫)
					</p>
				</div>
				<div className="h-3/4 w-1 border-r-2 border-zinc-300 self-center" />
				<div className="w-1/2 h-full flex flex-row justify-center items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 mx-2 text-colorPrimary"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
						/>
					</svg>
					<p className="text-black  ">
						Đổi, trả sản phẩm <br /> trong 7 ngày
					</p>
				</div>
			</div>

			<div className="w-full h-auto flex flex-row justify-around bg-slate-600 p-2">
				<div>
					<div className="flex flex-row">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mx-2 text-colorPrimary"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						<p className="text-lg text-colorPrimary">Tổng đài: 1900.1908 - 028.3622.9900 (7:00 - 21:30)</p>
					</div>

					<div className="flex flex-row">
						<ul>
							<li className="text-colorGreen mx-1 p-1 text-sm ">.Chính sách giao hàng</li>
							<li className="text-colorGreen mx-1 p-1 text-sm ">.Chính sách khách hàng</li>
							<li className="text-colorGreen mx-1 p-1 text-sm ">.Chính sách đổi trả</li>
						</ul>
						<ul>
							<li className="text-colorGreen mx-1 p-1 text-sm ">.Liên hệ</li>
							<li className="text-colorGreen mx-1 p-1 text-sm ">.Hóa đơn điện tử</li>
							<li className="text-colorGreen mx-1 p-1 text-sm ">.Hướng dẫn mua hàng</li>
						</ul>
						<ul>
							<li className="text-colorGreen mx-1 p-1 text-sm ">.Quy chế hoạt động</li>
							<li className="text-colorGreen mx-1 p-1 text-sm ">.Giới thiệu công ty</li>
							<li className="text-colorGreen mx-1 p-1 text-sm ">.Cần thuê mặt bằng</li>
						</ul>
					</div>
				</div>
				<div>
					<div className="flex flex-row">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mx-2 text-colorPrimary"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							/>
						</svg>
						<p className="text-lg text-colorPrimary">Đăng ký chào hàng vào Bách Hóa Xanh</p>
					</div>
					<div className="flex flex-row">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mx-2 text-colorPrimary"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
							/>
						</svg>
						<p className="text-lg text-colorPrimary">Hệ thống 2.158 cửa hàng Bách Hóa Xanh</p>
					</div>
					<div className="text-sm text-colorPrimary ml-2"><p>1 cửa hàng sắp khai trương</p></div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
