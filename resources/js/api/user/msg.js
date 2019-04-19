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

};

// 删除 消息
export const delMsg = (id) => {

};