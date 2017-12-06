<template>
  <layout class="addAddress">
    <head-top slot="header" header-title="addAddress"></head-top>
    <main>
      <h1>{{msg}} AddAddress</h1>
    </main>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
export default {
  name: 'addAddress',
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
.addAddress {
  h1{
    text-align: center;
    line-height: 100px;
  }
}
</style>
