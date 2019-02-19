import axios from 'axios'
import config from './config'
let RequestBaseUrl
try {
  RequestBaseUrl = process.env.NODE_ENV === 'development' ? config.dev.baseApi : window.Utopa.SysConfig.BASE_API
} catch (error) {
  RequestBaseUrl = config.dev.baseApi
}

// 创建axios实例
const service = axios.create({
  baseURL: RequestBaseUrl, // api的base_url
  timeout: 10000 // 请求超时时间
})

// request请求拦截器
service.interceptors.request.use(reqConfig => reqConfig, error => {
  Promise.reject(error)
})

// respone返回拦截器
service.interceptors.response.use(
  ({data}) => data,
  error => Promise.reject(error)
)

export default service
