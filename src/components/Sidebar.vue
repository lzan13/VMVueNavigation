<!-- 组件模板 -->
<template>
    <div id="sidebar">
        <div class="container">
            <div class="header">

            </div>
            <div class="content">
                <ul>
                    <li>
                        <router-link to="/">导航</router-link>
                    </li>
                    <li>
                        <router-link to="/About">关于</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<!-- 脚本 -->
<script>
</script>

<!-- 样式 -->
<style lang="less">
#sidebar {
    width: 220px;
    height: 100vh;
    background: @bg-light;
    .nav-shadow();
    .container {
        width: 160px;
        margin: auto;
        padding-top: 56px;
    }
}
</style>
