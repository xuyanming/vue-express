import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
import { getToken } from './auth'
const qs = require('querystring');
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:3000/', // api的base_url
  timeout: 20000                  // 请求超时时间

})

service.interceptors.request.use(config => {
  console.log(config)
  if(config.method == 'post'){
    config.data = qs.stringify(config.data)
  }
  config.headers['access_token'] =getToken()
  return config
}, error => {
  return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    if(response.data.meta.code == '401'){
        Message({
          message: "请重新登录",
          type: 'error',
          duration: 1500
        })
        router.push('/login')
      }else if(response.data.meta.code == '500'){
        Message({
            message: response.data.meta.message,
            type: 'error',
            duration: 1500
        })
      }
    return response
  },
  error => {
      console.log(error)
    Message({
      message: error,
      type: 'error',
      duration: 1500
    })
  }
)

export default service
