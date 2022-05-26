import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestRegisterType, RequestLoginType} from './../types/auth.types';
import { authApi } from './../api/auth.api';

export interface AuthState {
    token: string | null
}

const initialState: AuthState = {
    token: null
}

export const register = createAsyncThunk<void, RequestRegisterType>(
    'auth/register',
    async(requestData, { rejectWithValue }) => {
        try {
            await authApi.registerApi(requestData);
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)

export const login = createAsyncThunk<AuthState, RequestLoginType>(
    'auth/login',
    async (requestData, { rejectWithValue }) => {
        try {
            const response = await authApi.loginApi(requestData);
            return response.data;
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            delete state.token;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
        });
    }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer;