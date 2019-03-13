<!-- 组件模板 -->
<template>
    <div id="app">
        <Header></Header>
        <div class="content">
            <div class="container"></div>
        </div>
        <router-view/>
    </div>
</template>

<!-- 脚本 -->
<script>
// 引入组件
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    // 注册组件
    Header
  }
};
</script>

<!-- 样式 -->
<style lang="less">
</style>
