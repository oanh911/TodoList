import { createAsyncThunk} from '@reduxjs/toolkit';
import { ResponseAuthType, AuthInputType } from '../types/types';
import configs from './config';
import { getIsRegister, getIsLogin, getIsStillLogin } from '../redux/authSlice';
import storage from 'redux-persist/lib/storage';

const axios = require('axios');

const userAPI = axios.create({
    baseURL: configs.AUTH_URL,
});

export const register = createAsyncThunk(
    '/auth/registerStatus',
    async ({email, password}: AuthInputType, { dispatch }) => {
        try {
            const response = await userAPI
                .post('register', {
                    email: email,
                    password: password
                })
                .then((res: ResponseAuthType) => res)
            if (response.status === 200){
                dispatch(getIsRegister(true));
                alert('Đăng ký thành công!');
                return response.data;
            }
        }
        catch(error) {
            alert('Đăng ký không thành công!');
            dispatch(getIsRegister(false));
        }
    }
)

export const login = createAsyncThunk(
    '/auth/loginStatus',
    async ({email, password}: AuthInputType, { dispatch }) => {
        try {
            const response = await userAPI
                .post('login', {
                    email: email,
                    password: password
                })
                .then((res: ResponseAuthType) => res)
            if (response.status === 200){
                dispatch(getIsLogin(true));
                dispatch(getIsStillLogin(true));
                alert("Đăng nhập thành công!");
                return response.data;
            }
        }
        catch(error) {
            alert('Đăng nhập không thành công!');
            dispatch(getIsLogin(false));
        }
    }
)

export const logout = () => {
    storage.removeItem('persist:root');
}