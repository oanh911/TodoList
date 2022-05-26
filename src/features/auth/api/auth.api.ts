import { userAPI } from "../../../api/api";
import { AuthEndPointsEnum } from "../constants/auth.endpoints";
import { RequestRegisterType, RequestLoginType, ResponseRegisterType, ResponseLoginType } from './../types/auth.types';


const registerApi = (data: RequestRegisterType): Promise<ResponseRegisterType> => {
    return userAPI.post(AuthEndPointsEnum.REGISTER, data);
}

const loginApi = (data: RequestLoginType): Promise<ResponseLoginType> => {
    return userAPI.post(AuthEndPointsEnum.LOGIN, data);
}

export const authApi = {
    registerApi,
    loginApi
};