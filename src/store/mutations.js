import {
  GET_TOKEN,
  RECORD_ADDRESS,
  RECORD_USERINFO,
  GET_USERINFO,
  CHOOSE_ADDRESS,
  RETSET_NAME,
  OUT_LOGIN
} from './mutation-types.js'

import {
  setStore,
  getStore,
  removeStore
} from '../service/mUtils'

export default {
  // 记录当前经度纬度
  [RECORD_ADDRESS] (state, {
    latitude,
    longitude
  }) {
    state.latitude = latitude
    state.longitude = longitude
  },
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    state.token = info.token
    state.uid = info.uid
    // 保存在localStorage中，一直保存着登录信息，使用自定义方法可以设置过期时间 或者 outLogin退出
    // 如果只存在vuex中，刷新就没了
    // 如果存在sessionStorage中，刷新还在，关闭就没了
    // 如果存在cookie中，刷新关闭都还在，可以设置过期时间
    // 如果存在IndexedDB中，刷新关闭都还在
    /* setStore('token', info.token) 
    setStore('uid', info.uid) */
  },
  // 获取用户信息存入vuex （这个方法一般放在每个页面都调用的组件中）
  [GET_USERINFO] (state, info) {
    console.log(info)
    console.log(state.userInfo)
    if (state.userInfo) {
      state.userInfo = Object.assign({}, state.userInfo, info)
    }
    if (!state.userInfo) {
      state.userInfo = {
        ...info
      }
    }
    console.log(state.userInfo)
  },
  // 获取登录信息存入vuex
  [GET_TOKEN] (state) {
    state.token = getStore('token') || state.token
    state.uid = getStore('uid') || state.uid
  },
  // 修改用户名
  [RETSET_NAME] (state, username) {
    state.userInfo = Object.assign({}, state.userInfo, {
      username
    })
  },
  // 选择的地址
  [CHOOSE_ADDRESS] (state, {
    address,
    index
  }) {
    state.choosedAddress = address
    state.addressIndex = index
  },
  // 退出登录
  [OUT_LOGIN] (state) {
    state.userInfo = {}
    state.login = false
    state.token = ''
    state.uid = ''
    removeStore('token')
    removeStore('uid')
  }
}
