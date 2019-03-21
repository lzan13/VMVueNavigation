<!-- 组件模板 -->
<template>
    <div id="sidebar">
        <div class="container">
            <div class="header">
                <img class="logo" src="../assets/image/logo.png">
            </div>
            <div class="content">
                <ul>
                    <li>
                        <router-link to="/">导航</router-link>
                    </li>
                    <li>

                    </li>
                </ul>
            </div>

            <div class="bottom">
                <router-link to="/About"><i class="iconfont icon-about"></i>关于</router-link>
                <router-link to="/About"><i class="iconfont icon-heart-fill"></i>爱心</router-link>
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
        padding-top: 36px;
        .header {
            width: 72px;
            margin: auto;
            .logo {
                width: 72px;
                height: 72px;
            }
        }
        .bottom {
            position: absolute;
            bottom: 16px;
            .iconfont {
                font-size: 14px;
                color: @desc-grey;
                padding-left: 8px;
                padding-right: 4px;
            }
            a {
                font-size: 14px;
                font-weight: 350;
                color: @desc-grey;
                text-decoration: none;
                &:hover {
                    color: @active-link;
                    .iconfont {
                        color: @active-link;
                    }
                }
            }
        }
    }
}
</style>
