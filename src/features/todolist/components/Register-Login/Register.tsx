import './Login.css';
import { useAppDispatch } from './../../../../app/hooks';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import logo from '../../../../logo.png';
import { InputType, AuthInputType } from './../../types/types';
import { register } from './../../api/auth.api';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { getIsRegister } from '../../redux/authSlice';

function Register(){
    const dispatch = useAppDispatch();
    const history = useHistory();
    let isRegister: boolean = useSelector((state: RootState) => state.auth.isRegister);

    const initValues = {
        email: '',
        password: ''
    }

    const goToLogin = () => {
        history.push('/login');
    }
    
    const validate = Yup.object({
        email: Yup.string()
            .email('Vui lòng nhập đúng định dạng')
            .required('Không để trống trường này'),
        password: Yup.string()
            .required('Không để trống trường này')
            .min(6, 'Vui lòng nhập ít nhất 6 kí tự')
            .max(32, 'Vui lòng nhập không quá 32 kí tự'),
    })

    const submitRegister = async (initValues: AuthInputType) => {
        await dispatch(register(initValues));
        console.log(isRegister);
        if (isRegister){
            goToLogin();
        }
        //dispatch(getIsRegister(false));
    }

    return (
        <div className='register-form'>
            <img alt='logo' src={logo} />
            <p>Đăng ký tài khoản</p>
            <Formik initialValues={initValues} validationSchema={validate} onSubmit={submitRegister}>
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

export function InputTag(props: InputType){
    const [field, meta] = useField(props);
    return (
        <>
            <input {...field} {...props} />
            { (meta.touched && meta.error) ? <p className='wrong-input'>{meta.error}</p> : <p className='right-input'>{props.hint}</p> }
        </>
    );
}

export default Register;