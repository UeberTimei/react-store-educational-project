import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.accessToken)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.accessToken)
    return jwt_decode(data.accessToken)
}

export const logout = async () => {
    const response = await $authHost.post('api/logout')
    localStorage.removeItem('token')
    return response
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/refresh', {withCredentials: true})
    localStorage.setItem('token', data.accessToken)
    return jwt_decode(data.accessToken)
}