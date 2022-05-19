import { createAsyncThunk} from '@reduxjs/toolkit';
import { TodoStatus } from '../types/types';

const axios = require('axios');

const api = axios.create({
    baseURL: 'https://627a92f04a5ef80e2c1d395f.mockapi.io',
});

export const getTodoList = createAsyncThunk(
    'todos/getTodosStatus',
    async () => {
        let res;
        await api
            .get("todos")
            .then((response: any) => res = response.data)
        return res;
    }
)

export const creatNewTodo = createAsyncThunk(
    'todos/creatNewTodoStatus',
    async (todoTitle: string) => {
        let res;
        await api
            .post("todos", {
                title: todoTitle,
                status: TodoStatus.inProgress
            })
            .then((response: any) => res = response.data)
        console.log(res);
        return res;
    }
)

export const editTodo = createAsyncThunk(
    'todos/editTodoStatus',
    async ({todoId, todoTitle} : {todoId: number, todoTitle: string}) => {
        let res;
        await api
            .put(`todos/${todoId}`,
                {
                    title: todoTitle
                }
            )
            .then((response: any) => res = response.data)
        console.log(res);
        return res;
    }
)

export const updateTodo = createAsyncThunk(
    'todos/updateTodoStatus',
    async ({todoId, todoStatus} : {todoId: number, todoStatus: string}) => {
        let res;
        await api
            .put(`todos/${todoId}`,
                {
                    status: (todoStatus === TodoStatus.inProgress) ? TodoStatus.done : TodoStatus.inProgress
                }
            )
            .then((response: any) => res = response.data)
        console.log(res);
        return res;
    }
)

// export const deleteTodo = (todoId: number) => {
//         api
//             .delete(`todos/${todoId}`)
//             .then((response: any) => console.log(response.data))
// }

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodoStatus',
    async (todoId: number) => {
        await api
            .delete(`todos/${todoId}`)
    }
)