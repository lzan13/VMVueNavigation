<!-- 组件模板 -->
<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<!-- 脚本 -->
<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: '欢迎来到首页'
      }
    }
  }
</script>

<!-- 样式 -->
<style scoped>
</style>
