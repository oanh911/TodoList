import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoListReducer from './../features/todolist/redux/todolistSlice';

export const store = configureStore({
  reducer: {
    todos: todoListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
