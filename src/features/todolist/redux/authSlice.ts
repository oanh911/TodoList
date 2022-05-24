import { createSlice } from '@reduxjs/toolkit';
import { AuthState, AuthActionType, AuthStatusActionType } from './../types/types';
import { login, register } from './../api/auth.api';

const initialState: AuthState = {
    isRegister: false,
    isLogin: false,
    isStillLogin: false,
    auth: {
        id: 0,
        token: ''
    }
};

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

    extraReducers: (buider) => {
        buider.addCase(register.fulfilled, (state: AuthState, action: AuthActionType) => {
            state.auth = action.payload;
        });
        buider.addCase(login.fulfilled, (state: AuthState, action: AuthActionType) => {
            state.auth = action.payload;
        });
    }
})

// Action creators are generated for each case reducer function
export const { getIsRegister,  getIsLogin, getIsStillLogin} = authSlice.actions;

export default authSlice.reducer;