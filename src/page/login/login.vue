<template>
  <layout class="login">
    <head-top slot="header" header-title="Login"></head-top>
    <main>
      <h1>{{msg}} login</h1>
      <input type="number" v-model="mobile" placeholder="请输入手机号">
      <input type="password" v-model="password" @keyup.enter="logo" placeholder="请输入密码">
    </main>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'

import md5 from '@/service/md5'
import http from '@/service/http'
import {mapMutations} from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      msg: 'welcome to',
      mobile: '',
      password: ''
    }
  },
  components: {
    layout,
    headTop
  },
  methods: {
    ...mapMutations([
      'RECORD_USERINFO'
    ]),
    // tab () {},
    async logo () {
      if (!this.mobile) {
        this.$toast('手机号码不正确!')
        return false
      } else if (this.mobile && !/^[1][34578][0-9]{9}$/.test(this.mobile)) {
        this.$toast('请填写正确的手机号!')
        return false
      } else if (this.mobile && !this.password) {
        this.$toast('密码不能为空!')
        return false
      }
      let res = await http.post('/User/login', {
        mobile: this.mobile,
        password: md5.hex_md5(this.password)
      })
      console.log(res)
      if (res.code === '200') {
        alert('登录成功!')
        this.RECORD_USERINFO(res.data) // 记录登录信息
        this.$router.push({path: '/home'})
      } else {
        alert(res.message)
      }
    }
    // send_message () {},
    // toPage () {}
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/mixin';
.login h1{
  line-height: 100px;
}
</style>
