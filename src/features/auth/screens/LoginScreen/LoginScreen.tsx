import './LoginScreen.css';
import logo from '../../../../logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch } from './../../../../app/hooks';
import { Formik, Form } from 'formik';
import { initValuesLoginForm, validateLoginForm } from './../../helpers/auth.helpers';
import { login } from '../../redux/auth.slice';
import { RequestLoginType } from './../../types/auth.types';
import InputField from '../../../../components/InputField/InputField';

function Login(){
    const dispatch = useAppDispatch();
    const history = useHistory();

    const goToHome = () => {
        history.push('/');
    }

    const submitLogin = (initValuesLoginForm: RequestLoginType) => {
        dispatch(login(initValuesLoginForm))
        .unwrap()
        .then(() => {
            alert('Đăng nhập thành công!');
            goToHome();
        })
        .catch(() => alert('Đăng nhập không thành công!'));
    }

    return (
        <div className='login-form'>
            <img alt='logo' src={logo} />
            <p>Đăng nhập</p>
            <Formik initialValues={initValuesLoginForm} validationSchema={validateLoginForm} onSubmit={submitLogin}>
                <Form>
                    <InputField name='email' type='email' placeholder='Tên đăng nhập' />
                    <InputField name='password' type='password' placeholder='Mật khẩu' />
                    <InputField type="submit" name="submit" value="Đăng nhập" />
                </Form>
            </Formik>
            <p className='to-register'>Bạn chưa có tài khoản? <Link to='/register'>Đăng ký ngay </Link></p>
        </div>
    );
}

export default Login;