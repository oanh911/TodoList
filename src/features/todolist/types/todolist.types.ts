import { Config } from '@testing-library/user-event/dist/types/setup';

export interface TodoType {
    id: number,
    title: string,
    status: string
}

export type createNewTodoType = Omit<TodoType, 'id'>

export interface ResponseTodoType {
    config: Config,
    data: TodoType[],
    headers: Headers,
    request: Request,
    status: number,
    statusText: string,
}