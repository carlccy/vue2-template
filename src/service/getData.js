import http from './http'
import {getStore} from './mUtils'

/**
 * 获取首页Banner
 */
export const getBanner = () => http.post('/Banner/bannerList')

/**
 * 获取用户个人信息
 */
export const getUser = () => http.post('/User/userMyInfo', {
  token: getStore('token'),
  uid: getStore('uid')
})
