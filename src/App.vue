<!-- 组件模板 -->
<template>
    <div id="app">
        <!-- 移动端时显示在顶部标题等内容 -->
        <div id="app-header">
            <span class="app-menu" v-on:click="switchMenu()">
                <i v-if="isShowMenu" class="iconfont icon-close"></i>
                <i v-else class="iconfont icon-menu"></i>
            </span>
            <span class="app-title">个人导航</span>
        </div>
        <!-- 左边导航 -->
        <div id="app-left" :class="{'app-sidebar-show':isShowMenu}" v-on:click="switchMenu()">
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
import "./assets/iconfont/iconfont.css";
// 引入组件
import Footer from "./components/Footer.vue";
import Search from "./components/Search.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
    name: "App",
    data() {
        return {
            isShowMenu: false,
        };
    },
    components: {
        // 注册组件
        Sidebar,
        Search,
        Footer,
    },
    methods: {
        switchMenu: function() {
            this.isShowMenu = !this.isShowMenu;
        },
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#app {
    display: flex;
    background: @bg-grey-white;
    #app-header {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 48px;
        line-height: 48px;
        background: @bg-light;
        .nav-shadow();
        z-index: 10;
        .app-menu {
            display: block;
            width: 48px;
            height: 48px;
            float: left;
            text-align: center;
            .iconfont {
                font-size: 20px;
            }
        }
        .app-title {
            width: 100%;
            height: 48px;
            line-height: 48px;
            text-align: center;
            font-size: 14px;
            font-weight: 500px;
            color: @title-dark;
        }
    }
    #app-left {
        flex: none;
        width: 220px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
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
            &.app-sidebar-show {
                display: block;
            }
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
