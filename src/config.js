import Axios from "axios";
import {Toast} from 'antd-mobile'

// 拦截请求
Axios.interceptors.request.use(function (config) {
  Toast.loading('加载中', 0)
  return config
})
// 拦截响应
Axios.interceptors.response.use(function (config) {
  setTimeout(() => {
    Toast.hide()
  }, 2000);
  return config
})

// 