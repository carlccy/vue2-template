<template>
  <layout class="home">
    <head-top slot="header" header-title="Home" go-back="0"></head-top>
    <main>
      <h1>{{msg}} home</h1>
      <section>
        <div>aaaaaaa</div>
        <div>
          <div>bbbb</div>
          <div>cccc</div>
        </div>
      </section>
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
  .home {
    text-align: center;
    h1{
      line-height: 100px;
    }
  }
</style>
