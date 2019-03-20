<!-- 组件模板 -->
<template>
    <div id="app">
        <!-- 左边导航 -->
        <div id="app-left">
            <Sidebar></Sidebar>
        </div>
        <!-- 右边顶部和内容 -->
        <div id="app-right">
            <Search></Search>
            <div class="content">
                <router-view />
            </div>
            <Footer></Footer>
        </div>

        <div id="app-header">
            <span class="app-menu menu-open">Menu</span>
            <span class="app-menu menu-close">关闭</span>
            <span class="app-title">个人导航</span>
        </div>
    </div>
</template>

<!-- 脚本 -->
<script>
// 引入组件
import Footer from "./components/Footer.vue";
import Search from "./components/Search.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
    name: "App",
    components: {
        // 注册组件
        Sidebar,
        Search,
        Footer,
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#app {
    display: flex;
    background: @bg-grey-white;
    #app-left {
        flex: none;
        width: 220px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
    }
    #app-right {
        flex: 1;
        margin-left: 220px;
    }
    #app-header {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: @bg-light;
        .nav-shadow();
        z-index: 5;
        span {
            font-size: 16px;
            font-weight: 500px;
            color: @title-dark;
        }
        .sidebar-close {
            display: inline-block;
            width: 36px;
            height: 36px;
            background: @bg-translucence-dark;
        }
    }
}

@media (max-width: 960px) {
    #app {
        display: block;
        #app-left {
            display: none;
            width: 100%;
            background: @bg-translucence-dark;
        }
        #app-right {
            margin-left: 0;
        }
        #app-header {
            display: block;
        }
    }
}
</style>
