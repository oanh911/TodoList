import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TodoType, createNewTodoType, TodoActionType } from './../types/todolist.types';
import { todoListApi } from './../api/todolist.api';
import { TodoStatus } from '../constants/todolist.enums';

interface TodoState {
    loaded: boolean,
    todos: TodoType[]
}

const initialState: TodoState = {
    loaded: false,
    todos: []
}

export const getTodoList = createAsyncThunk(
    'todos/getTodoList',
    async () => {
        try {
            const response = await todoListApi.getTodosApi();
            if (response.status === 200){
                return response.data;
            }
        }
        catch(error) {
            alert('Có lỗi xảy ra!');
        }
    }
)

export const createNewTodo = createAsyncThunk(
    'todos/creatNewTodo',
    async (todo: createNewTodoType, { dispatch }) => {
        try {
            const response = await todoListApi.createNewTodoApi(`todos`, todo);
            console.log(response)
            if (response.status === 201) {
                dispatch(getTodoList());
            }
        }
        catch(error) {
            alert('Thêm mới không thành công!');
        }
    }
)

export const editTodo = createAsyncThunk(
    'todos/editTodo',
    async (todo: TodoType, { dispatch }) => {
        try {
            const response = await todoListApi.editTodoApi(`todos/${todo.id}`, todo);
            if (response.status === 200 || response.status === 201) {
                dispatch(getTodoList());
            }
        }
        catch(error) {
            alert('Chỉnh sửa không thành công!');
        }
    }
)

export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async (todo: TodoType, { dispatch }) => {
        try {
            const newTodo = {
                ...todo,
                status: (todo.status === TodoStatus.inProgress) ? TodoStatus.done : TodoStatus.inProgress
            };
            const response = await todoListApi.updateTodoApi(`todos/${todo.id}`, newTodo);
            if (response.status === 200 || response.status === 201) {
                dispatch(getTodoList());
            }
        }
        catch(error) {
            console.log(error);
            alert('Update không thành công!');
        }
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (todoId: Pick<TodoType, 'id'> | number, { dispatch }) => {
        try {
            const response = await todoListApi.deleteTodoApi(`todos/${todoId}`);
            if (response.status === 200 || response.status === 201) {
                dispatch(getTodoList());
            }
        }
        catch(error) {
            alert('Xóa không thành công!');
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