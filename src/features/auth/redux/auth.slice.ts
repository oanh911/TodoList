import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthInputType, AuthStatusActionType, AuthType, AuthActionType } from './../types/auth.types';
import { authApi } from './../api/auth.api';
import storage from 'redux-persist/lib/storage';

export interface AuthState {
    isRegister: boolean,
    isLogin: boolean,
    isStillLogin: boolean,
    auth: AuthType
}

const initialState: AuthState = {
    isRegister: false,
    isLogin: false,
    isStillLogin: false,
    auth: {
        id: null,
        token: null
    }
}

export const register = createAsyncThunk(
    'auth/register',
    async(data: AuthInputType, { dispatch }) => {
        try {
            const response = await authApi.registerApi(data);
            if (response.status === 200){
                dispatch(getIsRegister(true));
                return response.data;
            }
        }
        catch(error){
            alert('Đăng ký không thành công!');
            dispatch(getIsRegister(false));
        }
    }
)

export const login = createAsyncThunk(
    '/auth/login',
    async (data: AuthInputType, { dispatch, rejectWithValue }) => {
        try {
            const response = await authApi.loginApi(data)
            if (response.status === 200){
                dispatch(getIsLogin(true));
                dispatch(getIsStillLogin(true));
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

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getIsRegister: (state: AuthState, action: AuthStatusActionType) => {
            state.isRegister = action.payload;
        },
        getIsLogin: (state: AuthState, action: AuthStatusActionType) => {
            state.isLogin = action.payload;
        },
        getIsStillLogin: (state: AuthState, action: AuthStatusActionType) => {
            state.isStillLogin = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state: AuthState, action) => {
            console.log(action);
            state.auth = action.payload;
        });
        builder.addCase(login.fulfilled, (state: AuthState, action) => {
            console.log(action)
            state.auth = action.payload;
        });
    }
})

export const { getIsRegister,  getIsLogin, getIsStillLogin} = authSlice.actions;

export default authSlice.reducer;