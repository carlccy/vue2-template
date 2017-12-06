<template>
  <footer class="footer">
    <section @click="gotoAddress({path: '/home'})">home</section>
    <section @click="gotoAddress({path: '/channel'})">channel</section>
    <section @click="gotoAddress({path: '/mall'})">mall</section>
    <section @click="gotoAddress({path: '/cart'})">cart</section>
    <section @click="gotoAddress({path: '/user'})">user</section>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {}
  },
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/css/mixin';
  .footer{
    display: flex;
    line-height: 50px;
    background-color: #fff;
    border-top: 1px solid #ddd;
    
    section{
      flex: 1;
      height: 100%;
      font-size: 15px;
      text-align: center;
      color: #333;
    }
  }
</style>


