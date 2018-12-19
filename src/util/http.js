import axios from 'axios'
import { message } from 'antd';

//拦截请求
axios.interceptors.request.use(function(config){
    return config;
}, error => {
    message.warn(error.response)
    return Promise.reject(error)
})

//拦截响应
axios.interceptors.response.use(function(config){
    console.log(config)
    return config
}, error => {
    message.warn(error.response)
    return Promise.resolve(error.response)
})