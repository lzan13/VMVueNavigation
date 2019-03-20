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
    }
}
</style>
