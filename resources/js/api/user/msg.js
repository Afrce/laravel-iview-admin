import axios from '@/libs/api.request'
import {messageError} from "../../common/common";
import router from '../../router/index'

// 消息列表
export const getMessageList = () => {
    return axios.request({
        url: '/api/user/getMessageList',
        method: "get"
    })
};

// 阅读
export const readMsg = (id) => {
    return axios.request({
        url: '/api/user/readMsg',
        method: "POST",
        data: {id : id}
    })
};

// 删除 消息
export const delMsg = (id) => {
    return axios.request({
        url: "api/user/delMsg",
        method: "POST",
        data: {id: id}
    })
};
// 恢复消息

export const resolveMsg = (id) => {
    return axios.request({
        url: "api/user/resolveMsg",
        method: "POST",
        data: {id}
    })
}
