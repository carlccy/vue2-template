<template>
  <transition name="router-fade" mode="out-in">
    <router-view/>
  </transition>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import 'src/css/common'; // 公共css
</style>
