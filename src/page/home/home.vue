<template>
  <layout class="home">
    <head-top slot="header" header-title="Home" go-back="0"></head-top>
    <main>
      <h1>{{msg}} home</h1>
      <section>
        <button @click="getInfo">loginStatus</button>
      </section>
      <section>
        <router-link to="login">Login</router-link>
      </section>
      <section>
        <button @click="outLogin">outLogin</button>
      </section>
    </main>
    <foot-guide slot="footer"></foot-guide>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
import footGuide from '@/components/footer'

import http from '@/service/http'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      msg: 'welcome to'
    }
  },
  components: {
    layout,
    headTop,
    footGuide
  },
  mounted () {
    var me = this
    me.getToken().then(function(){
      me.getUserInfo()
      me.getInfo()
    })
    me.getBanner()
  },
  computed: {
    ...mapState([
      'token', 'uid', 'userInfo'
    ]),
  },
  methods: {
    ...mapMutations([
      'OUT_LOGIN'
    ]),
    ...mapActions([
      'getToken', 'getUserInfo'
    ]),
    async getBanner () {
      let res = await http.post('/Banner/bannerList', {
        deviceType: 1
      })
      console.log(res)
    },
    /* async getUserInfo () {
      let res = await http.post('/User/userMyInfo', {
        token: this.token,
        uid: this.uid
      })
      console.log(res)
    }, */
    async getInfo () {
      if (!this.token) {
        console.log('未登录')
      } else {
        console.log('已登录')
      }
    },
    async outLogin () {
      this.OUT_LOGIN()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/css/mixin';
  .home {
    text-align: center;
    h1,
    section{
      line-height: 100px;
    }
  }
</style>
