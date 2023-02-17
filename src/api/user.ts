import { request } from './request';
import { API } from './apiURL';
import { LoginProps } from '@/utils';

// User-Base-1 用户登录
const userLogin = (data: LoginProps) => request.post(API.user.login, data);

export const userAPI = {
    userLogin
};
