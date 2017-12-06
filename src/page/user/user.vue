<template>
  <!-- 
  <layout class="user">
    <head-top slot="header" header-title="User" go-back="0"></head-top>
    <main>
    </main>
    <foot-guide slot="footer"></foot-guide>
  </layout>
   -->
  <layout class="user">
    <head-top slot="header" header-title="User" go-back="0"></head-top>
    <main>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
      <section>user</section>
    </main>
    <foot-guide slot="footer"></foot-guide>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
import footGuide from '@/components/footer'
export default {
  name: 'user',
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
.user {
  background-color: #f2f6f2;
  section{
    text-align: center;
    line-height: 50px;
    font-size: 25px;
  }
}

</style>
