import '../screens.css';
import logo from '../../../../logo.png';
import { useAppDispatch } from './../../../../app/hooks';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { AuthInputType } from '../../types/auth.types';
import { Formik, Form } from 'formik';
import InputTag from './../../components/InputTag/InputTag';
import { initValuesRegisterForm, validateRegisterForm } from './../../helpers/auth.helpers';
import { register } from './../../redux/auth.slice';


function Register(){
    const dispatch = useAppDispatch();
    const history = useHistory();
    let isRegister: boolean = useSelector((state: RootState) => state.auth.isRegister);

    const goToLogin = () => {
        history.push('/login');
    }

    const submitRegister = async (initValuesRegisterForm: AuthInputType) => {
        await dispatch(register(initValuesRegisterForm));
        if (isRegister){
            goToLogin();
        }
        //dispatch(getIsRegister(false));
    }

    return (
        <div className='register-form'>
            <img alt='logo' src={logo} />
            <p>Đăng ký tài khoản</p>
            <Formik initialValues={initValuesRegisterForm} validationSchema={validateRegisterForm} onSubmit={submitRegister}>
                <Form>
                    <InputTag name='email' type='email' placeholder='Email đăng ký'/>
                    <InputTag name='password' type='password' placeholder='Mật khẩu' hint="Vui lòng sử dụng 8-32 kí tự"/>
                    <InputTag type="submit" name="submit" value="Đăng ký" />
                </Form>
            </Formik>
            <p className='to-login'>Bạn đã có tài khoản? <Link to='/login'>Đăng nhập</Link></p>
        </div>
    );
}

export default Register;