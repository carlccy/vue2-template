<template>
  <layout class="coupon">
    <head-top slot="header" header-title="Coupon"></head-top>
    <main>
      <h1>{{msg}} coupon</h1>
    </main>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
export default {
  name: 'coupon',
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
.coupon {
  h1{
    text-align: center;
    line-height: 100px;
  }
}
</style>
