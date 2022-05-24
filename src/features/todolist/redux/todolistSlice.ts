import { createSlice } from '@reduxjs/toolkit';
import { getTodoList} from '../api/todolist.api';
import { TodoType, TodoActionType } from './../types/types';

interface TodoState {
    loaded: boolean,
    todos: TodoType[]
}

const initialState: TodoState = {
    loaded: false,
    todos: []
};

export const todolistSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    },
    extraReducers: (buider) => {
        buider.addCase(getTodoList.fulfilled, (state: TodoState, action: TodoActionType) => {
            state.loaded = true;
            state.todos = action.payload;
        });
    }
})

// Action creators are generated for each case reducer function
export const { } = todolistSlice.actions;

export default todolistSlice.reducer;