import React, { useContext, useRef, useState } from 'react';
import './styles.css';
import Context from '../../../constants/Context';
import { Link } from 'react-router-dom';
import { Actions } from '../../../constants/Actions';
import { useNavigate } from 'react-router-dom';
import { Functions } from '../../../utils/Function';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../../components/Loading';
import { toast } from 'react-toastify';
import { updateUser } from '../../../apiServices/userServices';
const Profile = () => {
	const [ state, dispatch ] = useContext(Context);
	const [ user, setUser ] = useState(state.userLogin.info);
	const [ avatar, setAvatar ] = useState(user.userImage);
	const [ isLoading, setIsLoading ] = useState(false);
	const abc = useRef();
	const handleOpenFile = () => {
		abc.current.click();
	};

	const handleSelectedFile = async (e) => {
		let file = e.target.files[0];
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = async () => {
				setAvatar(reader.result);
        setUser({...user, userImage: reader.result})
			}
		};

	const handleChange = (e) => {
		setUser({ ...user, [e.id]: e.value });
	};

const handleSave = async () => {
			const response = await toast.promise(updateUser(user), {
				pending: 'Loading!'
			});
			console.log(response);
			if (response.status >= 200 && response.status < 300) {
				dispatch(Actions.updateUser(user));
				Functions.showToast('success', 'Update avatar success!');
			} else {
				console.log(response);
				Functions.showToast('error', 'Update failed, check your network!'); 
			}
  }

  console.log({user});
	return (
		<div className="profile-background">
			{isLoading && <Loading />}
			<div className="card">
				<div className="card-header">
					<div className="avatar">
						<img src={avatar} alt="Avatar " className="profile-img" />
						<div
							className="btn-change-avt"
							onClick={() => {
								handleOpenFile(); 
							}}
						>
							<p>Chọn ảnh đại diện</p>
							<input
								type={'file'}
								className="btn-avt"
								accept="image/*"
								ref={abc}
								onChange={(e) => {
									handleSelectedFile(e);
								}}
							/>
						</div>
					</div>

					<Link to="/my_voucher">
						<button className="btn-voucher">Mã giảm giá</button>
					</Link>
				</div>
				<div className="card-body">
					<div className="wrapper w-full">
						<FontAwesomeIcon icon={faUser} color="#999" className="icon" />
						<p className="profile-text">
							Họ và tên:{' '}
							<input
                className = " border border-colorGrayBackground w-96 "
								id="fullname"
								type="text"
								value={user.fullName}
								onChange={(e) => {
									handleChange(e.target);
								}}
							/>
						</p>
					</div>
					<div className="wrapper w-full">
						<FontAwesomeIcon icon={faEnvelope} color="#999" className="icon" />
						<p className="profile-text">
							Email:{' '}
							<input
                className = " border border-colorGrayBackground w-96 "
								id="emailAddress"
								type="email"
								value={user.emailAddress}
								onChange={(e) => {
									handleChange(e.target);
								}}
							/>
						</p>
					</div>
					<div className="wrapper w-full">
						<FontAwesomeIcon icon={faPhone} color="#999" className="icon" />
						<p className="profile-text">
							Số điện thoại:{' '}
							<input
                className = " border border-colorGrayBackground w-96 "
								id="phoneNumber"
								type="text"
								value={user.phoneNumber}
								onChange={(e) => {
									handleChange(e.target);
								}}
							/>
						</p>
					</div>

					<div className="wrapper w-full">
						<FontAwesomeIcon icon={faMap} color="#999" className="icon" />
						<p className="profile-text">
							Địa chỉ giao hàng:{' '}
							<textarea
              rows="3"
                className = " border border-colorGrayBackground w-full "
								id="shippingAddress"
								value={user.shippingAddress}
								onChange={(e) => {
									handleChange(e.target);
								}}
							/>
						</p>
					</div>
				</div>
				<div className="card-footer">
					<button onClick={handleSave} className="change-info bg-colorPrimary">Lưu</button>
				</div>
			</div>
		</div>
	);
}
export default Profile;
