import { createSlice } from '@reduxjs/toolkit';
import { getTodoList, updateTodo, creatNewTodo, editTodo, deleteTodo } from '../api/todolist.api';
import { TodoType } from './../types/types';

interface TodoState {
    loaded: boolean,
    todos: TodoType[]
}

const initialState: TodoState = {
    loaded: false,
    todos: []
};

export const todolistSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: (buider) => {
        buider.addCase(getTodoList.fulfilled, (state: TodoState, action: any) => {
            state.loaded = true;
            state.todos = action.payload;
        });
        
        buider.addCase(creatNewTodo.fulfilled, (state: TodoState, action: any) => {
            //state.todos = action.payload;
        });

        buider.addCase(updateTodo.fulfilled, (state: TodoState, action: any) => {
            //state.todos = action.payload;
        });

        buider.addCase(editTodo.fulfilled, (state: TodoState, action: any) => {
            //state.todos = action.payload;
        });

        buider.addCase(deleteTodo.fulfilled, (state: TodoState, action: any) => {
            // console.log(action.payload);
        });
    }
})

// Action creators are generated for each case reducer function
export const { } = todolistSlice.actions;

export default todolistSlice.reducer;