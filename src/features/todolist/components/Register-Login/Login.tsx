import './Login.css';
import { useAppDispatch } from './../../../../app/hooks';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import logo from '../../../../logo.png';
import { InputTag } from './Register';
import { login } from '../../api/auth.api';
import { AuthInputType } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';

function Login(){
    const dispatch = useAppDispatch();
    const history = useHistory();
    let isLogin: boolean = useSelector((state: RootState) => state.auth.isLogin);

    const initValues = {
        email: '',
        password: ''
    }

    const goToHome = () => {
        history.push('/');
    }
    
    const validate = Yup.object({
        email: Yup.string()
            .email('Vui lòng nhập đúng định dạng')
            .required('Không để trống trường này'),
        password: Yup.string()
            .required('Không để trống trường này')
    })

    const submitLogin = async (initValues: AuthInputType) => {
        await dispatch(login(initValues));
        if (isLogin){
            goToHome();
        }
        //dispatch(getIsLogin(false));
    }

    return (
        <div className='login-form'>
            <img alt='logo' src={logo} />
            <p>Đăng nhập</p>
            <Formik initialValues={initValues} validationSchema={validate} onSubmit={submitLogin}>
                <Form>
                    <InputTag name='email' type='email' placeholder='Tên đăng nhập' />
                    <InputTag name='password' type='password' placeholder='Mật khẩu' />
                    <InputTag type="submit" name="submit" value="Đăng nhập" />
                </Form>
            </Formik>
            <p className='to-resgister'>Bạn chưa có tài khoản? <Link to='/register'>Đăng ký ngay </Link></p>
        </div>
    );
}

export default Login;