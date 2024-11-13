import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://www.nmc.cn/rest/',
    timeout: 5000,
    headers:{
        'Accept': 'application/json',
    }
})

//添加拦截
instance.interceptors.request.use(config => {
    console.log('请求被拦截')
    return config
},error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(res => {
    console.log('返回数据成功')
    return res.data
},error => {
    return Promise.reject(error)
})

export default instance