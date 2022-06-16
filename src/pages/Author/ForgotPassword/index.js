import React, { useContext, useState  } from 'react'
import './styles.css'
import Context from '../../../constants/Context'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
  const [state, dispatch] = useContext(Context)
  console.log({ user: state.data.users })
  return (
    <div className='login-background'>
      <div className='login-container'>
        <div className='login-content row'>
          <div className='col-12 text-login'>Lấy lại mật khẩu của bạn</div>
          <div className='col-12 form-group  input-wrapper'>
          <FontAwesomeIcon icon={faEnvelope} color='#999' className='icon' />
            <input type="email" className='form-control email-input' placeholder='Nhập email của bạn' />
            <button className='btn-otp-send'>Gửi OTP</button>
          </div>
          <div className='col-12 form-group  input-wrapper'>
          <FontAwesomeIcon icon={faLock} color='#999' className='icon' />
            <input type="text" className='form-control login-input' placeholder='Nhập mã OTP' />
          </div>          
          <div className='col-12'>
            <button className='btn-submit-otp'>Xác thực OTP</button>
          </div>
          <div className='col-12 text-center'>
            <label>Chưa có tài khoản?</label>
            <Link to="/signup">
              <span className='sign-up'>Đăng ký ngay</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword