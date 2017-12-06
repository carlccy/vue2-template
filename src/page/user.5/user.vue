<template>
  <div class="page user">
    <div class="page-header">
      <head-top header-title="User" go-back="0"></head-top>
    </div>
    <div class="page-content">
      <div class="page-scroll">
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
      </div>
    </div>
    <div class="page-footer">
      <foot-guide></foot-guide>
    </div>
  </div>
</template>

<script>
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
