import React, { useContext, useState } from 'react';
import './styles.css';
import Context from '../../../constants/Context';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Actions } from '../../../constants/Actions';
import { Functions } from '../../../utils/Function';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../../apiServices/userServices';
const Signup = () => {
	const [ state, dispatch ] = useContext(Context);
	const users = [ ...state.data.users ];
	const navigate = useNavigate();

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ retypePassword, setRetypePassword ] = useState('');
	const [ fullName, setFullName ] = useState('');
	const [ phoneNumber, setPhoneNumber ] = useState('');
	const [ email, setEmail ] = useState('');

	const checkInput = () => {
		if (
			username.trim() === '' ||
			password.trim() === '' ||
			retypePassword.trim() === '' ||
			fullName.trim() === '' ||
			phoneNumber.trim() === ''
		) {
			Functions.showToast('error', 'Thông tin không được để trống');
			return false;
		}

		if (password.trim() !== retypePassword.trim()) {
			Functions.showToast('error', 'Nhập lại mật khẩu không trùng khớp');
			return false;
		}

		if (!Functions.checkPhone(phoneNumber)) {
			Functions.showToast('error', 'Số điện thoại không đúng định dạng');
			return false;
		}

		for (let i = 0; i < users.length; i++) {
			if (users[i].username === username) {
				Functions.showToast('error', 'Tên đăng nhập này đã có người sử dụng');
				return false;
			}
			if (users[i].email === email) {
				Functions.showToast('error', 'Email này đã có người sử dụng');
				return false;
			}
			if (users[i].phoneNumber === phoneNumber) {
				Functions.showToast('error', 'Số điện thoại này đã được sử dụng');
				return false;
			}
		}
		return true;
	};

	const signup = async () => {
		if (checkInput()) {
			let newUser = {
				// userID: Number(Functions.getMaxIndex(users, "userID")) + 1,
				userImage:
					'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				fullName,
				emailAddress: email,
				username,
				password,
				address: '97 Man thiện, Hiệp Phú, Q9, HCM',
				phoneNumber,
				status: 'ENABLE',
				userType: 'USER',
				otp: '',
				shippingAddress: '97 Man thiện, Hiệp Phú, Q9, HCM',
				userListCart: [],
				userListVoucher: []
			};

			const response = await toast.promise(addUser(newUser), {
				pending: 'Đăng ký tài khoản'
			});
			if (response.status >= 200 && response.status < 300) {
				dispatch(Actions.signup(newUser));
				Functions.showToast('success', 'Đăng ký thành công!');
				setTimeout(() => {
					return navigate('/login');
				}, 1000);
			} else Functions.showToast('error', 'Đăng ký không thành công!');
		}
	};

	return (
		<div className="signup-background w-full h-full mb-44 ">
			<div className="signup-container">
				<div className="signup-content row">
					<div className="col-12 text-signup">Đăng ký</div>
					<div className="col-12 form-group input-wrapper">
						<FontAwesomeIcon icon={faUser} color="#999" className="icon" />
						<input
							type="text"
							className="form-control signup-input"
							placeholder="Nhập tên đăng nhập"
							value={username}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
					</div>
					<div className="col-12 form-group input-wrapper">
						<FontAwesomeIcon icon={faLock} color="#999" className="icon" />
						<input
							type="password"
							className="form-control signup-input"
							placeholder="Mật khẩu"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<div className="col-12 form-group input-wrapper">
						<FontAwesomeIcon icon={faLock} color="#999" className="icon" />
						<input
							type="password"
							className="form-control signup-input"
							placeholder="Nhập lại mật khẩu"
							value={retypePassword}
							onChange={(e) => {
								setRetypePassword(e.target.value);
							}}
						/>
					</div>
					<div className="col-12 form-group input-wrapper">
						<FontAwesomeIcon icon={faAddressCard} color="#999" className="icon" />
						<input
							type="text"
							className="form-control signup-input"
							placeholder="Họ và tên"
							value={fullName}
							onChange={(e) => {
								setFullName(e.target.value);
							}}
						/>
					</div>
					<div className="col-12 form-group input-wrapper">
						<FontAwesomeIcon icon={faPhone} color="#999" className="icon" />
						<input
							type="text"
							className="form-control signup-input"
							placeholder="Số điện thoại"
							value={phoneNumber}
							onChange={(e) => {
								setPhoneNumber(e.target.value);
							}}
						/>
					</div>
					<div className="col-12 form-group input-wrapper">
						<FontAwesomeIcon icon={faEnvelope} color="#999" className="icon" />
						<input
							type="email"
							className="form-control signup-input"
							placeholder="Email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className="col-12 ">
						<button
							className="btn-signup"
							onClick={() => {
								signup();
							}}
						>
							Đăng ký
						</button>
					</div>
					<Link to="/login">
						<div className="col-12 text-center">
							<span className="back-login">Quay lại Đăng nhập</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
