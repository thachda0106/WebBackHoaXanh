import React, { useContext } from 'react'
import './styles.css'
import Context from '../../../constants/Context'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [state, dispatch] = useContext(Context)
  console.log({ user: state.data.users })
  return (
    <div className='signup-background'>
      <div className='signup-container'>
        <div className='signup-content row'>
          <div className='col-12 text-signup'>Đăng ký</div>
          <div className='col-12 form-group input-wrapper'>
            <FontAwesomeIcon icon={faUser} color='#999' className='icon' />
            <input type="text" className='form-control signup-input' placeholder='Nhập tên đăng nhập' />
          </div>
          <div className='col-12 form-group input-wrapper'>
            <FontAwesomeIcon icon={faLock} color='#999' className='icon' />
            <input type="password" className='form-control signup-input' placeholder='Mật khẩu' />
          </div>
          <div className='col-12 form-group input-wrapper'>
            <FontAwesomeIcon icon={faLock} color='#999' className='icon' />
            <input type="password" className='form-control signup-input' placeholder='Nhập lại mật khẩu' />
          </div>
          <div className='col-12 form-group input-wrapper'>
            <FontAwesomeIcon icon={faAddressCard} color='#999' className='icon' />
            <input type="text" className='form-control signup-input' placeholder='Họ và tên' />
          </div>
          <div className='col-12 form-group input-wrapper'>
            <FontAwesomeIcon icon={faPhone} color='#999' className='icon' />
            <input type="text" className='form-control signup-input' placeholder='Số điện thoại' />
          </div>
          <div className='col-12 form-group input-wrapper'>
            <FontAwesomeIcon icon={faEnvelope} color='#999' className='icon' />
            <input type="email" className='form-control signup-input' placeholder='Email' />
          </div>
          <div className='col-12'>
            <button className='btn-signup'>Đăng ký</button>
          </div>
          <Link to="/login" >
            <div className='col-12 text-center'>
              <span className='back-login'>Quay lại Đăng nhập</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup