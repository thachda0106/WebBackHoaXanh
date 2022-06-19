import React, { useContext, useState } from 'react'
import './styles.css'
import Context from '../../../constants/Context'
import { Link } from 'react-router-dom';
import { Actions } from '../../../constants/Actions';
import { useNavigate } from 'react-router-dom';
import { Functions } from '../../../utils/Function';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [state, dispatch] = useContext(Context)
  const users = [...state.data.users]
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    let ok = false
    for (let i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
        // set user Login vao he thong 
        dispatch(Actions.setCurrentUser(users[i])) 
        ok = true
        Functions.showToast('success', 'Đăng nhập thành công!')
        var sto = setTimeout(() => {
          return navigate('/')
        }, 1000);
      }
    } if (!ok)
      Functions.showToast('error', 'Sai tên đăng nhập hoặc mật khẩu')
  }


  return (
    <form onSubmit={(e) => { e.preventDefault() }}>
      <div className='login-background'>
        <div className='login-container'>
          <div className='login-content row'>
            <div className='col-12 text-login'>Đăng nhập</div>
            <div className='col-12 form-group input-wrapper'>
              <FontAwesomeIcon icon={faUser} color='#999' className='icon' />
              <input type="text" className='form-control login-input' placeholder='Tên đăng nhập' value={username} onChange={(e) => { setUsername(e.target.value) }} />
            </div>
            <div className='col-12 form-group input-wrapper'>
              <FontAwesomeIcon icon={faLock} color='#999' className='icon' />
              <input type="password" className='form-control login-input' placeholder='Mật khẩu' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <Link to="/forgot-password">
              <div className='col-12 forgot-password'>
                <span>Quên mật khẩu?</span>
              </div>
            </Link>
            <div className='col-12'>
              <button className='btn-login' onClick={() => { handleLogin() }} >Đăng nhập</button>

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
    </form>

  )
}

export default Login