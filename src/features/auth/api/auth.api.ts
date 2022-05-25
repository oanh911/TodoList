import { userAPI } from "../../../api/api";
import { AuthEndPointsEnum } from "../constants/auth.endpoints";
import { AuthInputType } from "../types/auth.types";
import { ResponseAuthType } from './../types/auth.types';


const registerApi = (data: AuthInputType): Promise<ResponseAuthType> => {
    return userAPI.post(AuthEndPointsEnum.REGISTER, data);
}

const loginApi = (data: AuthInputType): Promise<ResponseAuthType> => {
    return userAPI.post(AuthEndPointsEnum.LOGIN, data);
}

export const authApi = {
    registerApi,
    loginApi
};