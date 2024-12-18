import axios from 'axios'

// import {BASE_URL,TIMEOUT} from './Require.tsx'

const instance = axios.create({
    baseURL: 'http://www.nmc.cn/rest/',
    timeout: 5000,
    headers:{
        'Accept': 'application/json',
    }
})

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么，例如添加 token
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: any) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
  
  // 响应拦截器
  instance.interceptors.response.use(
    (response) => {
      // 对响应数据做些什么
      return response.data;
    },
    (error: any) => {
      // 对响应错误做些什么
      if (error.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        // 请求已发出，但没有收到响应
        console.error('No response received:', error.request);
      } else {
        // 发生了其他错误
        console.error('Error:', error.message);
      }
      return Promise.reject(error);
    }
  );

// 封装请求方法
const request = {
    get: (url: string, params?: any) => instance.get(url, { params }),
    post: (url: string, data?: any) => instance.post(url, data),
    put: (url: string, data?: any) => instance.put(url, data),
    delete: (url: string) => instance.delete(url),
  };
  
  export default request;