<template>
  <layout class="invoice">
    <head-top slot="header" header-title="Invoice"></head-top>
    <main>
      <h1>{{msg}} invoice</h1>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
      <p>优惠1</p>
    </main>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
export default {
  name: 'invoice',
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
.invoice {
  h1,p{
    text-align: center;
    line-height: 100px;
  }
}
</style>
