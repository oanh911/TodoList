import '../screens.css';
import logo from '../../../../logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch } from './../../../../app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { AuthInputType } from '../../types/auth.types';
import { Formik, Form } from 'formik';
import InputTag from './../../components/InputTag/InputTag';
import { initValuesLoginForm, validateLoginForm } from './../../helpers/auth.helpers';
import { login } from '../../redux/auth.slice';

function Login(){
    const dispatch = useAppDispatch();
    const history = useHistory();
    let isLogin: boolean = useSelector((state: RootState) => state.auth.isLogin);


    const goToHome = () => {
        history.push('/');
    }

    const submitLogin = async (initValuesLoginForm: AuthInputType) => {
        await dispatch(login(initValuesLoginForm));
        if (isLogin){
            goToHome();
        }
        //dispatch(getIsLogin(false));
    }

    return (
        <div className='login-form'>
            <img alt='logo' src={logo} />
            <p>Đăng nhập</p>
            <Formik initialValues={initValuesLoginForm} validationSchema={validateLoginForm} onSubmit={submitLogin}>
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