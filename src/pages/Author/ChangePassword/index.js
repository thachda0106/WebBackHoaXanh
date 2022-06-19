import React, { useContext, useState } from 'react';
import './styles.css';
import Context from '../../../constants/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Functions } from '../../../utils/Function';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from '../../../apiServices/userServices';
import { Actions } from '../../../constants/Actions';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
	const [ state, dispatch ] = useContext(Context);
	const [ oldPassword, setOldPassword ] = useState('');
	const [ newPassword, setNewPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const navigate = useNavigate();
	const check = () => {
		if (!oldPassword || !newPassword || !confirmPassword) {
			Functions.showToast('warning', 'Không được để trống thông tin!');
			return false;
		}
		if (oldPassword !== state.userLogin.info.password) {
			Functions.showToast('warning', 'Mật khẩu hiện tại không đúng!');
			return false;
		}
		if (newPassword !== confirmPassword) {
			Functions.showToast('warning', 'Mật khẩu mới và nhập lại mật khẩu phải khớp nhau!');
			return false;
		}
		return true;
	};
	const handleChange = async () => {
		if (check()) {
			let user = { ...state.userLogin.info, password: newPassword };
			const response = await toast.promise(updateUser(user), {
				pending: 'Loading!'
			});
			if (response.status >= 200 && response.status < 300) {
				dispatch(Actions.updateUser(user));
				Functions.showToast('success', 'Update password success!');
				return navigate('/');
			} else {
				console.log(response);
				Functions.showToast('error', 'Update failed, check your network!');
			}
		}
	};

	return (
		<div className="login-background">
			<div className="login-container">
				<div className="login-content row">
					<div className="col-12 text-login">Lấy lại mật khẩu của bạn</div>
					<div className="col-12 form-group  input-wrapper">
						<FontAwesomeIcon icon={faEnvelope} color="#999" className="icon" />
						<input
							value={oldPassword}
							onChange={(e) => setOldPassword(e.target.value)}
							className="form-control email-input"
							placeholder="Mật khẩu hiện tại"
						/>
					</div>
					<div className="col-12 form-group  input-wrapper">
						<FontAwesomeIcon icon={faLock} color="#999" className="icon" />
						<input
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
							type="password"
							className="form-control login-input"
							placeholder="Mật khẩu mới"
						/>
					</div>
					<div className="col-12 form-group  input-wrapper">
						<FontAwesomeIcon icon={faLock} color="#999" className="icon" />
						<input
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							type="password"
							className="form-control login-input"
							placeholder="Nhập lại mật khẩu mới"
						/>
					</div>
					<div className="col-12">
						<button onClick={handleChange} className="btn-submit-otp">
							Thay đổi
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
