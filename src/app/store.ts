import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoListReducer from '../features/todolist/redux/todolist.slice';
import authReducer from '../features/auth/redux/auth.slice';

const reducer = combineReducers({
  todos: todoListReducer,
  auth: authReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store); 

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
