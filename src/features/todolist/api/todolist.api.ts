import { createAsyncThunk} from '@reduxjs/toolkit';
import { TodoStatus, TodoType } from '../types/types';
import configs from './config';
import { ResponseTodoType } from './../types/types';

const axios = require('axios');

const todoAPI = axios.create({
    baseURL: configs.TODO_URL,
});

export const getTodoList = createAsyncThunk(
    'todos/getTodoList',
    async () => {
        try {
            const response = await todoAPI
                .get('todos')
                .then((res: ResponseTodoType) => res)
            if (response.status === 200 || response.status === 201){
                return response.data;
            }
        }
        catch(error) {
            alert('Có lỗi xảy ra!');
        }
    }
)

export const creatNewTodo = createAsyncThunk(
    'todos/creatNewTodo',
    async (todoTitle: string, { dispatch }) => {
        try {
            const response = await todoAPI
                .post('todos', {
                    title: todoTitle,
                    status: TodoStatus.inProgress
                })
                .then((res: ResponseTodoType) => res)
            if (response.status === 200 || response.status === 201) {
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
            const response = await todoAPI
                .put(`todos/${todo.id}`,
                    {
                        title: todo.title
                    }
                )
                .then((res: ResponseTodoType) => res)
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
            const response = await todoAPI
                .put(`todos/${todo.id}`,
                    {
                        status: (todo.status === TodoStatus.inProgress) ? TodoStatus.done : TodoStatus.inProgress
                    }
                )
                .then((res: ResponseTodoType) => res)
            if (response.status === 200 || response.status === 201) {
                dispatch(getTodoList());
            }
        }
        catch(error) {
            alert('Update không thành công!');
        }
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (todoId: number, { dispatch }) => {
        try {
            const response = await todoAPI
                .delete(`todos/${todoId}`)
                .then((res: ResponseTodoType) => res)
            if (response.status === 200 || response.status === 201) {
                dispatch(getTodoList());
            }
        }
        catch(error) {
            alert('Xóa không thành công!');
        }
    }
)