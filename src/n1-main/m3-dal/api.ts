import axios from "axios";

const instance = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        'API-KEY': ''
    }
})

export const authAPI = {
    // login(data: LoginParamsType) {
    //     return instance.post<LoginParamsType, AxiosResponse<ResponseType<{userId: number}>>>(`/auth/login`, data)
    // },
    // logout() {
    //     return instance.delete<ResponseType>(`/auth/login`)
    // },
    // me() {
    //     return instance.get<ResponseType<MeType>>(`/auth/me`)
    // }
}