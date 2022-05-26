import { Config } from '@testing-library/user-event/dist/types/setup';

export interface AuthType {
    token: string
}

export interface RequestRegisterType {
    email: string,
    password: string
}

export interface RequestLoginType {
    email: string,
    password: string
}

export interface ResponseRegisterType {
    config: Config,
    data: {
        id: number,
        token: string,
    }
    headers: Headers,
    request: Request,
    status: number,
    statusText: string,
}

export interface ResponseLoginType {
    config: Config,
    data: AuthType,
    headers: Headers,
    request: Request,
    status: number,
    statusText: string,
}