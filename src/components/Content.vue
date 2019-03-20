<!-- 组件模板 -->
<template>
    <div id="content">
        <div class="container">
            <div class="site-category" v-for="category in siteCategorys">
                <!-- 常用推荐 -->
                <div class="site-title">
                    <i class="iconfont icon-tag"></i>
                    <h2 class="site-title-text">{{ category.title }}</h2>
                </div>
                <div class="site-list">
                    <div class="site-wrapper" v-for="site in category.sitelist">
                        <a :href="site.url" rel="nofollow" target="_blank">
                            <img class="site-icon" />
                            <div class="site-content">
                                <h3 class="site-name">{{ site.name }}</h3>
                                <p class="site-desc">{{ site.desc }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- 脚本 -->
<script>
export default {
    name: "Content",
    data() {
        return {
            siteCategorys: [
                {
                    id: "recommend",
                    title: "常用推荐",
                    sitelist: [
                        { name: "花瓣", url: "http://huaban.com", icon: "", desc: "陪你做生活的设计师（发现，采集，分享你喜欢的灵感美图）" },
                        { name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" },
                        { name: "Dribbble", url: "https://dribbble.com", icon: "", desc: "全球优秀设计师最佳交流展示平台" },
                        { name: "Pinterest", url: "https://www.pinterest.com", icon: "", desc: "从优美的图海中洞见全球设计创意" },
                        { name: "Dribbble", url: "https://dribbble.com", icon: "", desc: "全球优秀设计师最佳交流展示平台" },
                        { name: "网易云音乐", url: "https://music.163.com", icon: "", desc: "网易云音乐" },
                    ],
                },
                {
                    id: "design",
                    title: "设计相关",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "design",
                    title: "设计相关",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "design",
                    title: "设计相关",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "design",
                    title: "设计相关",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "design",
                    title: "设计相关",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "design",
                    title: "设计相关",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "design",
                    title: "设计相关",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
            ],
        };
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#content {
    width: 100%;
    padding-bottom: 56px;
    // 头部容器
    .container {
        margin: auto;
        .site-category {
            margin-top: 36px;
            .site-title {
                .site-title-text {
                    color: @desc-dark;
                    font-size: 24px;
                    font-weight: 400;
                }
            }
        }
        .site-list {
            display: grid;
            grid-row-gap: 24px;
            grid-column-gap: 24px;
            margin-top: 8px;
            .site-wrapper {
                padding: 8px;
                border-radius: 4px;
                background: @bg-light;
                .card-shadow();
                &:hover {
                    .card-shadow-hover();
                }
                a {
                    display: flex;
                    text-decoration: none;
                    .site-icon {
                        flex: none;
                        width: 36px;
                        height: 36px;
                        margin: 8px;
                        border-radius: 50%;
                    }
                    .site-content {
                        flex: 1;
                        .site-name {
                            color: @title-dark;
                            font-size: 14px;
                            font-weight: 500;
                        }
                        .site-desc {
                            color: @desc-dark;
                            font-size: 12px;
                        }
                    }
                    &:hover {
                        .site-content .site-name {
                            color: @active-link;
                        }
                    }
                }
            }
        }
    }
}

@media (min-width: 1920px) {
    #content .container {
        width: 100%;
        max-width: 1600px;
        .site-list {
            grid-template-columns: repeat(5, 1fr);
        }
    }
}
@media (max-width: 1920px) {
    #content .container {
        width: 95%;
        max-width: 1200px;
        .site-list {
            grid-template-columns: repeat(4, 1fr);
        }
    }
}
@media (max-width: 1200px) {
    #content .container {
        width: 92%;
        max-width: 768px;
        .site-list {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
@media (max-width: 960px) {
    #content .container {
        width: 95%;
        .site-list {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media (max-width: 768px) {
    #content .container {
        width: 95%;
        .site-list {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
