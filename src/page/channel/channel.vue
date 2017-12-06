<template>
  <layout class="channel">
    <head-top slot="header" header-title="Channel" go-back="0"></head-top>
    <main>
      <h1>{{msg}} channel</h1>
    </main>
    <foot-guide slot="footer"></foot-guide>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
import footGuide from '@/components/footer'
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
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/mixin';
.channel h1{
  text-align: center;
  line-height: 100px;
}
</style>
