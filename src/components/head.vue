<template>
  <header>
    <span class="back" @click="$router.go(-1)" v-show="!goBack">Back</span>
    <span class="title">{{headerTitle}}</span>
  </header>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {}
  },
  props: ['headerTitle', 'goBack']
}
</script>

<style lang="scss" scoped>
  @import 'src/css/mixin';
  header{
    position: relative;
    width: 100%;
    height: 100%;
    line-height: 44px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    background-color: #fff;

    .title{
      font-size: 15px;
      font-weight: 600;
      color: #333;
    }
    .back{
      position: absolute;
      left: 15px;
      top: 0;
      line-height: 44px;
      cursor: pointer;
    }
  }
</style>


