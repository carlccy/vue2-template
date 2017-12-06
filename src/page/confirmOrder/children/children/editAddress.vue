<template>
  <layout class="editAddress">
    <head-top slot="header" header-title="EditAddress"></head-top>
    <main>
      <h1>{{msg}} editAddress</h1>
    </main>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
export default {
  name: 'editAddress',
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
.editAddress {
  h1{
    text-align: center;
    line-height: 100px;
  }
}
</style>
