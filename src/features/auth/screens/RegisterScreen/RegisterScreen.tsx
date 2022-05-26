import './RegisterScreen.css';
import logo from '../../../../logo.png';
import { useAppDispatch } from './../../../../app/hooks';
import { useHistory, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { initValuesRegisterForm, validateRegisterForm } from './../../helpers/auth.helpers';
import { register } from './../../redux/auth.slice';
import InputField from '../../../../components/InputField/InputField';
import { RequestRegisterType } from '../../types/auth.types';


function Register(){
    const dispatch = useAppDispatch();
    const history = useHistory();

    const goToLogin = () => {
        history.push('/login');
    }

    const submitRegister = (initValuesRegisterForm: RequestRegisterType) => {
        dispatch(register(initValuesRegisterForm))
        .unwrap()
        .then(() => {
            alert('Đăng ký thành công!');
            goToLogin();
        })
        .catch(() => alert('Đăng ký không thành công!'));
    }

    return (
        <div className='register-form'>
            <img alt='logo' src={logo} />
            <p>Đăng ký tài khoản</p>
            <Formik initialValues={initValuesRegisterForm} validationSchema={validateRegisterForm} onSubmit={submitRegister}>
                <Form>
                    <InputField name='email' type='email' placeholder='Email đăng ký'/>
                    <InputField name='password' type='password' placeholder='Mật khẩu' hint="Vui lòng sử dụng 8-32 kí tự"/>
                    <InputField type="submit" name="submit" value="Đăng ký" />
                </Form>
            </Formik>
            <p className='to-login'>Bạn đã có tài khoản? <Link to='/login'>Đăng nhập</Link></p>
        </div>
    );
}

export default Register;