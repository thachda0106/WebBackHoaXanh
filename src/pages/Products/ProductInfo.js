import React, { useState, useContext, useCallback } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import Context from '../../constants/Context';
import { Functions } from '../../utils/Function';
import { Actions } from '../../constants/Actions';
import { addToCart } from '../../apiServices/productServices';
import Comments from './Comments';
import { addComment } from '../../apiServices/commentServices';
import LoadingAwait from '../../components/Loading/LoadingAwait'
const ProductInfo = () => {
	const params = useParams();
	const [ state, dispatch ] = useContext(Context);
	const [ product, setProduct ] = useState(() => {
		let p = state.data.products.find((product) => product.productID == params.id);
		p.star = Functions.getProductStars(p.productID, state.data.comments);
		return p;
	});
	const [ ratingData, setRatingData ] = useState({ star: 0, comment: '' });
	const ratingChanged = (newRating) => {
		setRatingData((pre) => {
			return { ...pre, star: newRating };
		});
	};
	const CommentChanged = (e) => {
		setRatingData((pre) => {
			return { ...pre, comment: e.target.value };
		});
	};
	const [isLoading,setLoading] = useState(false) 
	const [ refresh, setRefresh ] = useState();
	const handleRating = async () => {
		if (ratingData.star <= 0 || ratingData.comment === '') alert('Xin vui lòng đánh giá sao và comment!');
		else {
			let commentNew = {
				userID: state.userLogin.info.userID,
				productID: product.productID,
				content: ratingData.comment,
				date: Math.floor(Date.now() / 1000),
				starNumber: ratingData.star
			};
			let res = await addComment(commentNew);
			if (res.status >= 200 && res.status < 300) {
				setRatingData((pre) => {
					return { ...pre, comment: '' };
				});
				setRefresh(Math.random());
			}
		}
	};
	const handelAddCart = async()=>{
		let cartInfo = {
			productID: product.productID,
			picture: product.productImage,
			productName: product.name,
			price: product.price,
			priceDiscount: product.price * product.discountPercent,
			discountPercent: product.discountPercent,
			quantity: 1
		};
		setLoading(true);
		let res = await addToCart(cartInfo, state.userLogin.info.userID);
			if (res.status >= 200 && res.status < 300) {
			dispatch(Actions.addToCart(cartInfo));
			setLoading(false)
			window.alert('Đã thêm sản phẩm vào giỏ hàng!');
		} else window.alert('Lỗi thêm sản phẩm vào giỏ hàng!');
	}

	return (
		<div className="w-full h-auto bg-colorBgGray flex flex-col justify-center items-center ">
			<LoadingAwait isLoading={isLoading} />
			<div className="w-5/6 h-auto mt-14">
				<h2 className="w-5/6 h-auto p-2 flex flex-row">
					Sản phẩm{' '}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 self-center"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
					</svg>{' '}
					Thông tin sản phẩm
				</h2>
				<div className="w-5/6 h-auto flex flex-row  ">
					<div>
						<img src={product.productImage} alt="sản phẩm " />
					</div>
					<div className="p-2">
						<p className="flex flex-row">
							{product.name}
							<span className="flex flex-row">
								{[ 1, 2, 3, 4, 5 ].map((value, index) => {
									return (
										<svg
											key={index}
											xmlns="http://www.w3.org/2000/svg"
											class={`h-5 w-5 ${product.star >= value ? 'text-yellow-400' : ''}`}
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									);
								})}
							</span>
						</p>
						<span>Hạn sử dụng: {Functions.timestampToDate(product.dateEXP)} </span>
						<br />
						<span>Nhãn Hàng: {product.branch} </span>
						<br />
						<span>Mô tả: {product.description} </span>
						<br />

						<p className="flex flex-row">
							Giá: {Functions.toVND(product.price - product.discountPercent * product.price / 100)}{' '}
							{product.discountPercent && (
								<p className="ml-1">
									<span class="line-through mr-1">{Functions.toVND(product.price)}</span>
									<span class="text-white bg-red-500 rounded-md w-auto h-auto p-1">
										-{product.discountPercent}%
									</span>
								</p>
							)}
						</p>
						{!Functions.checkProductCart(state.userLogin.info.userListCart, product.productID) ? (
							<button
								onClick ={handelAddCart}
								class="px-4 py-1 text-sm rounded-full border border-purple-200 bg-colorPrimary text-white  hover:bg-purple-400 hover:text-black "
							>
								Thêm vào giỏ hàng
							</button>
						) : (
							<div
								class="w-52 px-4 py-1 text-sm font-bold rounded-full border border-purple-200 bg-colorGrayText text-colorPrimary"
							>
								Đã Thêm vào giỏ hàng
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="w-5/6 h-auto my-2 ">
				<span> Nhập bình luận và đánh giá</span>
				<ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />,
				<textarea
					value={ratingData.comment}
					onChange={CommentChanged}
					rows="4"
					placeholder="Mời anh/chị bình luận hoặc đặt câu hỏi..."
					className="border border-slate-700 font-light text-sm w-60"
				/>
				<br />
				<button
					onClick={handleRating}
					className=" px-4 py-1 text-sm rounded-full border border-purple-500 bg-purple-700 text-white hover:bg-opacity-25  "
				>
					Gửi
				</button>
				<div>
					{' '}
					<Comments refresh={refresh} productID={product.productID} />{' '}
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
