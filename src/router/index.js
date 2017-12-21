import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import home from '@/page/home/home'
import channel from '@/page/channel/channel'
import mall from '@/page/mall/mall'
import cart from '@/page/cart/cart'
import user from '@/page/user/user'
import goods from '@/page/goods/goods'
import confirmOrder from '@/page/confirmOrder/confirmOrder'
import invoice from '@/page/confirmOrder/children/invoice'
import coupon from '@/page/confirmOrder/children/coupon'
import chooseAddress from '@/page/confirmOrder/children/chooseAddress'
import addAddress from '@/page/confirmOrder/children/children/addAddress'
import editAddress from '@/page/confirmOrder/children/children/editAddress'
import login from '@/page/login/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: home
        },
        {
          path: '/channel',
          component: channel
        },
        {
          path: '/mall',
          component: mall
        },
        {
          path: '/cart',
          component: cart
        },
        {
          path: '/user',
          component: user
        },
        {
          path: '/goods',
          component: goods
        },
        {
          path: '/confirmOrder',
          component: confirmOrder,
          children: [{
            path: 'invoice',
            component: invoice
          }, {
            path: 'coupon',
            component: coupon
          }, {
            path: 'chooseAddress',
            component: chooseAddress,
            children: [{
              path: 'addAddress',
              component: addAddress
            }, {
              path: 'editAddress',
              component: editAddress
            }]
          }]
        },
        {
          path: '/login',
          component: login
        }
      ]
    }
  ]
})
