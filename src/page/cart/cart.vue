<template>
  <layout class="cart">
    <head-top slot="header" header-title="Cart" go-back="0"></head-top>
    <main>
      <h1>{{msg}} cart</h1>
    </main>
    <foot-guide slot="footer"></foot-guide>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
import footGuide from '@/components/footer'

export default {
  name: 'cart',
  data () {
    return {
      msg: 'welcome to'
    }
  },
  components: {
    layout,
    headTop,
    footGuide
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/mixin';
.cart h1{
  text-align: center;
  line-height: 100px;
}
</style>
