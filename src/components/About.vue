<!-- 组件模板 -->
<template>
    <div id="about">
        <p>{{ msg }}</p>
    </div>
</template>

<!-- 脚本 -->
<script>
export default {
    name: "About",
    data() {
        return {
            msg: "关于这里，关于我",
        };
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#about {
    width: 100%;
    height: 100vh;
}
</style>
