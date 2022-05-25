import { Config } from '@testing-library/user-event/dist/types/setup';

export interface InputType {
    name: string,
    type: string,
    placeholder?: string,
    value?: string
    hint?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface AuthType {
    id?: number | null,
    token: string | null
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

export interface AuthActionType {
    meta: {
        arg: AuthInputType,
        requestId: string,
        requestStatus: string
    }
    payload: AuthType,
    type: string
}

export interface AuthStatusActionType {
    payload: boolean,
    type: string
}