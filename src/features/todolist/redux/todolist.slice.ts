import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TodoType, createNewTodoType } from './../types/todolist.types';
import { todoListApi } from './../api/todolist.api';
import { TodoStatus } from '../constants/todolist.enums';

export interface TodoState {
    loaded: boolean,
    todos: TodoType[]
}

const initialState: TodoState = {
    loaded: false,
    todos: []
}

export const getTodoList = createAsyncThunk<TodoType[], boolean>(
    'todos/getTodoList',
    async (param, { rejectWithValue }) => {
        try {
            const response = await todoListApi.getTodosApi();
            return response.data;
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)

export const createNewTodo = createAsyncThunk<void, createNewTodoType>(
    'todos/creatNewTodo',
    async (todo, { rejectWithValue }) => {
        try {
            await todoListApi.createNewTodoApi(`todos`, todo);
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)

export const editTodo = createAsyncThunk<void, TodoType>(
    'todos/editTodo',
    async (todo, { rejectWithValue }) => {
        try {
            await todoListApi.editTodoApi(`todos/${todo.id}`, todo);
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)

export const updateTodo = createAsyncThunk<void, TodoType>(
    'todos/updateTodo',
    async (todo, { rejectWithValue }) => {
        try {
            const newTodo = {
                ...todo,
                status: (todo.status === TodoStatus.inProgress) ? TodoStatus.done : TodoStatus.inProgress
            };
            await todoListApi.updateTodoApi(`todos/${todo.id}`, newTodo);
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)

export const deleteTodo = createAsyncThunk<void, Pick<TodoType, 'id'> | number>(
    'todos/deleteTodo',
    async (todoId, { rejectWithValue }) => {
        try {
            await todoListApi.deleteTodoApi(`todos/${todoId}`);
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)

export const todolistSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getTodoList.fulfilled, (state: TodoState, action) => {
            state.loaded = true;
            state.todos = action.payload;
        });
    }
})

export const { } = todolistSlice.actions;

export default todolistSlice.reducer;