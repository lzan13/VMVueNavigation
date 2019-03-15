<!-- 组件模板 -->
<template>
    <div class="about">
        <h1>{{ msg }}</h1>
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
<style scoped>
h1 {
    font-weight: normal;
}
</style>
