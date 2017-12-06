<template>
  <layout class="mall">
    <head-top slot="header" header-title="Mall" go-back="0"></head-top>
    <main>
      <h1>{{msg}} mall</h1>
        <section class="mall-item" @click="gotoGoods({path: '/goods'})">商品 1</section>
        <section class="mall-item">商品 2</section>
        <section class="mall-item">商品 3</section>
        <section class="mall-item">商品 4</section>
        <section class="mall-item">商品 5</section>
        <section class="mall-item">商品 6</section>
        <section class="mall-item" @click="gotoGoods({path: '/goods'})">商品 1</section>
        <section class="mall-item">商品 2</section>
        <section class="mall-item">商品 3</section>
        <section class="mall-item">商品 4</section>
        <section class="mall-item">商品 5</section>
        <section class="mall-item">商品 6</section>
    </main>
    <foot-guide slot="footer"></foot-guide>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import headTop from '@/components/head'
import footGuide from '@/components/footer'
export default {
  name: 'mall',
  data () {
    return {
      msg: 'welcome to'
    }
  },
  components: {
    layout,
    headTop,
    footGuide
  },
  methods: {
    gotoGoods (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/css/mixin';
.mall {
  background-color: #f2f6f2;
  text-align: center;
  line-height: 100px;
}
.mall-item{
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding: 0 15px;
}
</style>
