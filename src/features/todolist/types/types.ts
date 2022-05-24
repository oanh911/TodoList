import { Config } from '@testing-library/user-event/dist/types/setup';

export interface TodoType {
    id: number,
    title: string,
    status: string
}

export enum TodoStatus {
    inProgress = "In progress",
    done = "Done"
}

export interface InputType {
    name: string,
    type: string,
    placeholder?: string,
    value?: string
    hint?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface AuthType {
    id: number,
    token: string
}

export interface AuthState {
    isRegister: boolean,
    isLogin: boolean,
    isStillLogin: boolean,
    auth: AuthType
}

export interface AuthInputType {
    email: string,
    password: string
}

export interface ResponseAuthType {
    config: Config,
    data: AuthType,
    headers: Headers,
    request: Request,
    status: number,
    statusText: string,
}

export interface ResponseTodoType {
    config: Config,
    data: TodoType,
    headers: Headers,
    request: Request,
    status: number,
    statusText: string,
}

export interface ErrorType {
    
}

export interface AuthActionType {
    meta: {
        arg: AuthInputType,
        requestId: string,
        requestStatus: string
    }
    payload: AuthType,
    type: string
}

export interface TodoActionType {
    meta: {
        arg: void,
        requestId: string,
        requestStatus: string
    }
    payload: TodoType[],
    type: string
}

export interface AuthStatusActionType {
    payload: boolean,
    type: string
}