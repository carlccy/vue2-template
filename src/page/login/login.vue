<template>
  <layout class="login">
    <head-top slot="header" header-title="Login"></head-top>
    <main>
      <h1>{{msg}} login</h1>
    </main>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
export default {
  name: 'login',
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
.login h1{
  line-height: 100px;
}
</style>
