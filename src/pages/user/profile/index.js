import React, { useContext, useRef, useState } from 'react'
import './styles.css'
import Context from '../../../constants/Context'
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

const Profile = () => {
  const [state, dispatch] = useContext(Context)
  const user = state.userLogin.info
  const [avatar, setAvatar] = useState(user.userImage)
  const [isLoading, setIsLoading] = useState(false)
  const abc = useRef()
  const handleOpenFile = () => {
    abc.current.click()
  }

  const handleSelectedFile = (e) => {
    setIsLoading(true)
    var reader = new FileReader();
    var url = reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = function (e) {
      setIsLoading(false)
      setAvatar([reader.result])
    }
  }

  return (
    <div className='profile-background'>
      {
        isLoading  && <Loading />
      }
      <div className='card'>
        <div className='card-header'>
          <div className='avatar'>
            <img src={avatar} alt="Avatar " className='profile-img' />
            <div className='btn-change-avt' onClick={() => { handleOpenFile() }}>
              <p>Chọn ảnh đại diện</p>
              <input type={'file'} className='btn-avt' accept='image/*' ref={abc} onChange={(e) => { handleSelectedFile(e) }} />
            </div>
          </div>

          <Link to='/my_voucher' >
            <button className='btn-voucher'>Mã giảm giá</button>
          </Link>
        </div>
        <div className='card-body'>
          <div className='wrapper' >
            <FontAwesomeIcon icon={faUser} color="#999" className="icon" />
            <p className='profile-text' >Họ và tên: {user.fullName}</p>
          </div>
          <div className='wrapper' >
            <FontAwesomeIcon icon={faEnvelope} color="#999" className="icon" />
            <p className='profile-text' >Email: {user.emailAddress}</p>
          </div>
          <div className='wrapper' >
            <FontAwesomeIcon icon={faPhone} color="#999" className="icon" />
            <p className='profile-text' >Số điện thoại: {user.phoneNumber}</p>
          </div>

          <div className='wrapper' >
            <FontAwesomeIcon icon={faMap} color="#999" className="icon" />
            <p className='profile-text' >Địa chỉ giao hàng: {user.shippingAddress}</p>
          </div>
        </div>
        <div className='card-footer'>
          <button className='change-info'>Thay đổi</button>
        </div>
      </div>
    </div>
  )
}

export default Profile