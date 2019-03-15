<!-- 组件模板 -->
<template>
    <div id="sidebar">
        <div>
            <span class="sidebar-close">关闭</span>
        </div>
        <ul>
            <li>
                <router-link to="/">导航</router-link>
            </li>
            <li>
                <router-link to="/About">关于</router-link>
            </li>
        </ul>
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
    .sidebar-close {
        display: none;
    }
}
@media (max-width: 960px) {
    #sidebar {
        .sidebar-close {
            display: inline-block;
        }
    }
}
</style>
