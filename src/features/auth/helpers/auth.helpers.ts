import * as Yup from 'yup';
import { RequestLoginType, RequestRegisterType } from '../types/auth.types';

export const initValuesRegisterForm: RequestRegisterType = {
    email: '',
    password: ''
};

export const validateRegisterForm = Yup.object({
    email: Yup.string()
        .email('Vui lòng nhập đúng định dạng')
        .required('Không để trống trường này'),
    password: Yup.string()
        .required('Không để trống trường này')
        .min(6, 'Vui lòng nhập ít nhất 6 kí tự')
        .max(32, 'Vui lòng nhập không quá 32 kí tự'),
});

export const initValuesLoginForm: RequestLoginType = {
    email: '',
    password: ''
};

export const validateLoginForm = Yup.object({
    email: Yup.string()
        .email('Vui lòng nhập đúng định dạng')
        .required('Không để trống trường này'),
    password: Yup.string()
        .required('Không để trống trường này')
});