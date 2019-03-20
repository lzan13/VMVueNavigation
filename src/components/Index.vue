<!-- 组件模板 -->
<template>
    <div id="index">
        <Site></Site>
    </div>
</template>

<!-- 脚本 -->
<script>
// 引入组件
import Site from "./Site.vue";
export default {
    name: "Index",
    components: {
        // 注册组件
        Site,
    },
};
</script>

<!-- 样式 -->
<style lang="less">
</style>
