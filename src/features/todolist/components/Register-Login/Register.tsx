import './Login.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../../../app/store";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Register(){
    const dispatch = useDispatch<AppDispatch>();
    const [validateUsername, setValidateUsername] = useState<boolean>(true);
    const [validatePassword, setValidatePassword] = useState<boolean>(true);
    const [validateRepassword, setValidateRepassword] = useState<boolean>(true);

    const registerSubmit = () => {
        
    }

    return (
        <div className='register-form'>
            <p>Đăng ký tài khoản</p>
            <form onSubmit={registerSubmit}>            
                <input type="text" name="username" placeholder="Tên đăng nhập" />
                {
                    !validateUsername ? <p className='wrong-input'>* Chỉ sử dụng chữ cái và số</p> : <></>
                }
                
                <input type="password" name="password" placeholder="Mật khẩu" />
                {
                    !validatePassword ? <p className='wrong-input'>* Sử dụng ít nhất 8 kí tự</p> : <></>
                }
                                
                <input type="password" name="repassword" placeholder="Nhập lại mật khẩu" />
                {
                    !validateRepassword ? <p className='wrong-input'>* Mật khẩu không khớp</p> : <></>
                }
                                
                <input type="submit" name="submit" value="Đăng ký" />
            </form>
            <p className='resgister'>Bạn đã có tài khoản? <Link to='/login'>Đăng nhập</Link></p>
        </div>
    );
}

export default Register;