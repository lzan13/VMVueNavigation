<!-- 组件模板 -->
<template>
    <div id="sidebar">
        <div class="container">
            <div class="header">
                <img class="logo" src="../assets/image/logo.png">
            </div>
            <div class="content">
                <router-link to="/"><i class="iconfont icon-explore"></i>导航</router-link>
                <div class="nav-subs">
                    <div v-for="category in categorys">
                        <a :href="'#'+category.id"><i :class="'iconfont icon-'+category.id"></i>{{category.title}}</a>
                    </div>
                </div>
            </div>
            <!-- 底部链接 -->
            <div class="bottom">
                <router-link to="/About"><i class="iconfont icon-about"></i>关于</router-link>
                <router-link to="/About"><i class="iconfont icon-heart-fill"></i>爱心</router-link>
            </div>
        </div>
    </div>
</template>

<!-- 脚本 -->
<script>
export default {
    name: "Site",
    data() {
        return {
            categorys: [
                {
                    id: "recommend",
                    title: "常用推荐",
                },
                {
                    id: "design",
                    title: "设计相关",
                },
                {
                    id: "inspiration",
                    title: "灵感闪现",
                },
                {
                    id: "picture",
                    title: "图片资源",
                },
                {
                    id: "read",
                    title: "资讯阅读",
                },
                {
                    id: "social",
                    title: "社交",
                },
                {
                    id: "develop",
                    title: "开发",
                },
                {
                    id: "shop",
                    title: "商铺购物",
                },
                {
                    id: "game",
                    title: "游戏娱乐",
                },
                {
                    id: "gps",
                    title: "定位出行",
                },
                {
                    id: "tools",
                    title: "工具",
                },
            ],
        };
    },

    methods: {
        scrollTo(id) {
            document.querySelector("#" + id).scrollIntoView(true);
        },
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#sidebar {
    width: 200px;
    height: 100vh;
    background: @bg-light;
    .nav-shadow();
    .container {
        width: 140px;
        margin: auto;
        padding-top: 36px;
        // 顶部 logo
        .header {
            width: 72px;
            margin: auto;
            .logo {
                width: 72px;
                height: 72px;
            }
        }
        // 中间导航
        .content {
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
            .nav-subs {
                margin-left: 8px;
            }
        }
        // 底部
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
