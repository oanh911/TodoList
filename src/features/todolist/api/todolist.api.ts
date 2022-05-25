import { TodolistEndPointsEnum } from '../constants/todolist.endpoints';
import { todoAPI } from './../../../api/api';
import { TodoType, createNewTodoType, ResponseTodoType } from './../types/todolist.types';

const getTodosApi = (): Promise<ResponseTodoType> => {
    return todoAPI.get(TodolistEndPointsEnum.TODOS)
}

const createNewTodoApi = (link: string, data: createNewTodoType): Promise<ResponseTodoType> => {
    return todoAPI.post(link, data);
}

const editTodoApi = (apiUrl: string, data: TodoType): Promise<ResponseTodoType> => {
    return todoAPI.put(apiUrl, data);
}

const updateTodoApi = (apiUrl: string, data: TodoType): Promise<ResponseTodoType> => {
    return todoAPI.put(apiUrl, data);
}

const deleteTodoApi = (apiUrl: string): Promise<ResponseTodoType> => {
    return todoAPI.delete(apiUrl);
}

export const todoListApi = {
    getTodosApi,
    createNewTodoApi,
    editTodoApi,
    updateTodoApi,
    deleteTodoApi
}