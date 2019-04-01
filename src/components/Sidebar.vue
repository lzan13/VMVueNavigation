<!-- 组件模板 -->
<template>
    <div id="sidebar">
        <div class="container">
            <div class="header">
                <img class="logo" :src="publicPath + '/image/site-logo.png'">
            </div>
            <div class="content">
                <div class="nav" v-for="(nav, index) in navList">
                    <router-link :class="{'item-select':navIndex==index}" :to="nav.url" v-on:click.native="changeNav(index)">
                        <i :class="'iconfont icon-' + nav.id"></i>
                        <span>{{nav.title}}</span>
                        <span v-if="index==0">
                            <i v-if="navIndex==index" class="iconfont icon-arrow-down"></i>
                            <i v-else class="iconfont icon-arrow-right"></i>
                        </span>
                    </router-link>
                    <div class="items" v-if="index==0 && navIndex==0">
                        <div class="item" v-for="category in categorys">
                            <a :href="'#'+category.id">
                                <!-- <i :class="'iconfont icon-'+category.id"></i> -->
                                <span>{{category.title}}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部链接 -->
            <div class="bottom">
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
            publicPath: process.env.BASE_URL,
            navIndex: 0,
            navList: [
                {
                    id: "explore",
                    title: "导航探索",
                    url: "/",
                },
                {
                    id: "about",
                    title: "关于",
                    url: "/about",
                },
                {
                    id: "heart-fill",
                    title: "爱心",
                    url: "/about",
                },
            ],
            categorys: [
                {
                    id: "recommend",
                    title: "常用推荐",
                },
                {
                    id: "develop",
                    title: "开发相关",
                },
                {
                    id: "design",
                    title: "设计资源",
                },
                {
                    id: "picture",
                    title: "图片资源",
                },
                {
                    id: "draw",
                    title: "绘画制作",
                },
                {
                    id: "read",
                    title: "资讯阅读",
                },
                {
                    id: "game",
                    title: "游戏娱乐",
                },
                {
                    id: "social",
                    title: "网络社交",
                },
                {
                    id: "shop",
                    title: "生活购物",
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
        changeNav: function(index) {
            this.navIndex = index;
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
                border-radius: 50%;
            }
        }
        // 中间导航
        .content {
            .iconfont {
                font-size: 14px;
                color: @desc-grey;
                padding-left: 4px;
                padding-right: 4px;
            }
            a {
                font-size: 14px;
                font-weight: 350;
                color: @desc-grey;
                text-decoration: none;
                &.item-select {
                    color: @active-link;
                    .iconfont {
                        color: @active-link;
                    }
                }
                &:hover {
                    color: @active-link;
                    .iconfont {
                        color: @active-link;
                    }
                }
            }
            .items {
                margin-left: 22px;
                .item {
                    height: 36px;
                    line-height: 36px;
                    .iconfont {
                        font-size: 14px;
                    }
                }
            }
        }
        // 底部
        .bottom {
            position: absolute;
            bottom: 16px;
            .iconfont {
                font-size: 14px;
                color: @desc-grey;
                padding-left: 4px;
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
