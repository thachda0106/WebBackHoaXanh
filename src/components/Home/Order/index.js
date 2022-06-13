import React, { useContext } from 'react';
import './style.css';
<<<<<<< HEAD
import Context from '../../../constants/Context'
import { Link } from 'react-router-dom'
import { Actions } from '../../../constants/Actions';
import { Functions } from '../../../utils/Function';


function Order() {
	const [state, dispatch] = useContext(Context)
	const logout = () => {
		dispatch(Actions.deleteCurUser())
		Functions.showToast('success','Đăng xuất thành công!')
	}

=======
import Context from '../../../constants/Context';
import { Link } from 'react-router-dom';

function Order() {
	const [ state, dispatch ] = useContext(Context);
>>>>>>> 132f0d2bf70931d5de0fb5e109fb5580dea5ec7a
	return (
		<div className=" w-auto h-full flex flex-row items-center">
			{/* my order */}
			<div className=" w-auto h-full pl-2 pr-4 py-2 ">
				<Link
					className="block h-full text-white text-sm font-normal text-center flex items-center "
					to="/my-order"
				>
					{' '}
					<p>
						Đơn hàng <br /> của bạn
					</p>
				</Link>
			</div>
			{/* cart */}
			<div className="h-full">
				<Link className=" block h-full flex flex-row bg-colorPrimaryDark items-center px-6" to="/cart">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-white mr-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
						/>
					</svg>
					<p className="text-white font-normal">Giỏ hàng</p>
				</Link>
			</div>

			<div className="h-full account-menu relative">
				<Link className=" block h-full flex flex-row bg-colorPrimary items-center px-6" to={state.userLogin.isLogin ? '/profile' : '/login'}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-white mr-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
							clip-rule="evenodd"
						/>
					</svg>
					<p className="text-white font-normal">Tài khoản</p>
				</Link>
				<div className="dropdown-items hidden bg-colorPrimary absolute top-12 left-0 hover:cursor-pointer p-2 w-40  ">
<<<<<<< HEAD
					{state.userLogin.isLogin ? (<ul>
						<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">
							Thông tin cá nhân
						</li>
						<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">Mã khuyến mãi</li>
						<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">
							Thay đổi mật khẩu
						</li>
						<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 " onClick={() => { logout() }}>
							Đăng xuất
						</li>
					</ul>) : <ul>
						<Link to="/login">
							<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">
								Đăng nhập
							</li>
						</Link>
						<Link to="/signup">
							<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">
								Đăng ký
							</li>
						</Link>

					</ul>}

=======
					{state.userLogin.isLogin ? (
						<ul>
							<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">
								Thông tin các nhân
							</li>
							<Link to="my_voucher">
								<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">
									Mã khuyến mãi
								</li>
							</Link>
							<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">
								Thay đổi mật khẩu
							</li>
							<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">Đăng xuất</li>
						</ul>
					) : (
						<ul>
							<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">Đăng nhập</li>
							<li className="w-auto h-6 text-white hover:bg-colorPrimaryDark block mt-2 ">Đăng ký</li>
						</ul>
					)}
>>>>>>> 132f0d2bf70931d5de0fb5e109fb5580dea5ec7a
				</div>
			</div>
		</div>
	);
}

export default Order;
