import axios from '@/libs/api.request'
import {messageError} from "../../common/common";
import router from '../../router/index'
export const test = (params) => {
    return axios.request({
        url: '/api/test',
        data: params,
        method: "POST"
    })
}

export const login = (params) => {
    return axios.request({
        url: '/api/login',
        data: params,
        method: "POST"
    }).then(function (data) {
        if(data.data.status){
            localStorage.setItem("token", data.data.data.token);
            localStorage.setItem("refresh_token", data.data.data.refresh_token);
            getUserInfo();
            let toUrl = Bus.$route.query.toUrl
            console.log(toUrl)
            if (toUrl != undefined){
                router.push({path: toUrl})
            } else {
                router.push({path: '/home'})
            }
        }else{
            messageError({title: data.data.message})
        }
    })
}

export const logout = () => {
    return axios.request({
        url: '/api/logout',
        method: "POST"
    }).then(function (data) {
        localStorage.removeItem("refresh_token");
        localStorage.removeItem('token');
        router.push({path:"/login"})
    })
}

export const refreshToken = () => {
    return axios.request({
        url: '/api/refresh_token',
        data: {'refresh_token': localStorage.getItem("refresh_token")},
        method: "POST"
    }).then(function (data) {
        if(data.data.status){
            localStorage.setItem("token", data.data.data.token)
            localStorage.setItem("refresh_token", data.data.data.refresh_token)
        } else {
            messageError({'title': data.data.message})
            router.push({path: '/login'})
        }
    })
}

export const getUserInfo = () => {
    return axios.request({
        url: '/api/user/getUserInfo',
        method: "get"
    }).then(function (data) {
        if(data.data.status){
            localStorage.setItem("userInfo", JSON.stringify(data.data.data.userInfo))
        } else {
            messageError({'title': data.data.message})
        }
    })
}