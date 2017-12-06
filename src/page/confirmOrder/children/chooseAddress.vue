<template>
  <layout class="chooseAddress">
    <head-top slot="header" header-title="ChooseAddress"></head-top>
    <main>
      <h1>{{msg}} chooseAddress</h1>
      <router-link to="/confirmOrder/chooseAddress/addAddress">
        <span>新增收货地址</span>
      </router-link>
      <router-link to="/confirmOrder/chooseAddress/editAddress">
        <span>编辑收货地址</span>
      </router-link>
    </main>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
export default {
  name: 'chooseAddress',
  data () {
    return {
      msg: 'welcome to'
    }
  },
  components: {
    layout,
    headTop
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/mixin';
.chooseAddress {
  text-align: center;
  line-height: 100px;
  // @include sub
}
</style>
