import './Login.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../../../app/store";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Login(){
    const dispatch = useDispatch<AppDispatch>();
    const [validateUsername, setValidateUsername] = useState<boolean>(true);
    const [validatePassword, setValidatePassword] = useState<boolean>(true);

    const loginSubmit = () => {
        
    }

    return (
        <div className='login-form'>
            <p>Đăng nhập</p>
            <form onSubmit={loginSubmit}>
                <input type="text" id="username" name="username" placeholder="Tên đăng nhập" />
                {
                    !validateUsername ? <p className='wrong-input'>* Tên đăng nhập không đúng</p> : <></>
                }
                <input type="password" id="password" name="password" placeholder="Mật khẩu" />
                {
                    !validatePassword ? <p className='wrong-input'>* Mật khẩu không đúng</p> : <></>
                }
                
                <input type="submit" name="submit" value="Đăng ký" />
            </form>
            <p className='resgister'>Bạn chưa có tài khoản? <Link to='/register'>Đăng ký ngay </Link></p>
        </div>
    );
}

export default Login;