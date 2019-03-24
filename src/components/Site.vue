<!-- 组件模板 -->
<template>
    <div id="site">
        <div class="container">
            <div class="site-category" v-for="category in siteCategorys">
                <!-- 常用推荐 -->
                <div :id="category.id" class="site-title">
                    <i :class="'iconfont icon-' + category.id"></i><span class="site-title-text">{{ category.title }}</span>
                </div>
                <div class=" site-list">
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
    name: "Site",
    data() {
        return {
            siteCategorys: [
                {
                    id: "recommend",
                    title: "常用推荐",
                    sitelist: [
                        { name: "网易云音乐", url: "https://music.163.com", icon: "", desc: "网易云音乐，最喜欢的音乐平台，喜欢听私人FM" },
                        { name: "爱范儿", url: "https://www.ifanr.com/", icon: "", desc: "爱范儿，让未来触手可及，我每天都看的互联网资讯平台" },
                        { name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库，平常做自己的项目可以在这上边找图标" },
                        { name: "花瓣", url: "http://huaban.com", icon: "", desc: "陪你做生活的设计师（发现，采集，分享你喜欢的灵感美图）" },
                        { name: "优设网", url: "https://www.uisdc.com", icon: "", desc: "设计师学习交流平台，很多设计干货" },
                        { name: "Pinterest", url: "https://www.pinterest.com", icon: "", desc: "从优美的图海中洞见全球设计创意" },
                        { name: "Dribbble", url: "https://dribbble.com", icon: "", desc: "全球优秀设计师最佳交流展示平台" },
                    ],
                },
                {
                    id: "develop",
                    title: "开发相关",
                    sitelist: [
                        { name: "AndroidDevTools", url: "https://www.androiddevtools.cn", icon: "", desc: "Android 开发工具，为了解决国内访问不顺畅的问题，不过我有梯子😁" },
                        { name: "MaterialPalette", url: "https://www.materialpalette.com", icon: "", desc: "Google Material Design 色彩生成器" },
                        { name: "AndroidStudio中文组", url: "http://android-studio.org", icon: "", desc: "一支针对Android Studio做本地化支持的团队" },
                        { name: "Codota", url: "https://www.codota.com", icon: "", desc: "AI 只能代码提示工具" },
                        { name: "RunJS", url: "https://runjs.cn", icon: "", desc: "在线编辑、展示、分享、交流你的 JavaScript 代码" },
                        { name: "JSRun", url: "https://jsrun.net", icon: "", desc: "在线编辑器，包括 JS/Nodejs/Java/C/C++/Ruby/Lua/Python/PHP/GO等多种代码" },
                        { name: "CodePen", url: "https://codepen.io", icon: "", desc: "面向前端设计人员和开发人员的社交开发环境" },
                        { name: "Vue文档", url: "https://cn.vuejs.org/index.html", icon: "", desc: "渐进式 JavaScript 开发框架，前端开发利器" },
                        { name: "泡在网上的日子", url: "http://www.jcodecraeer.com", icon: "", desc: "很棒的开发社区，里边有不少不错的文章" },
                        { name: "掘金", url: "https://juejin.im/timeline", icon: "", desc: "掘金是帮助开发者成长的社区，包括Android、iOS、前端、后端等方面的内容" },
                        { name: "SegmentFault思否", url: "http://segmentfault.com", icon: "", desc: "思否，国内最大的开发问答社区，在这里学习技能、解决问题" },
                        { name: "StackoverFlow", url: "https://stackoverflow.com", icon: "", desc: "全球最大的开发问答社区，分享交流编程知识" },
                        { name: "V2EX", url: "https://www.v2ex.com", icon: "", desc: "V2EX 是一个关于分享和探索的地方，一个 IT 人交流社区" },
                    ],
                },
                {
                    id: "design",
                    title: "设计相关",
                    sitelist: [
                        { name: "UI中国", url: "http://www.ui.cn", icon: "", desc: "专业用户设计平台，里边的作品都是高质量的" },
                        { name: "站酷", url: "http://www.zcool.com.cn", icon: "", desc: "设计师互动平台 - 打开站酷，发现更好的设计！" },
                        { name: "盒子UI", url: "http://www.boxui.com", icon: "", desc: "专注UI设计，分享精彩的UI设计、交互设计、用户研究作品及相关UI理论知识" },
                        { name: "视觉中国", url: "http://shijue.me", icon: "", desc: "设计师&插画师交流平台" },
                        { name: "优设网", url: "http://www.uisdc.com", icon: "", desc: "设计师交流学习平台 - 看设计文章，学软件教程，找灵感素材，尽在优设网！" },
                        { name: "优优教程网", url: "http://www.uiiiuiii.com", icon: "", desc: "学教程找灵感就上优优 - PS教程、AI教程、原创免费教程" },
                        { name: "学UI网", url: "http://www.xueui.cn", icon: "", desc: "UI 设计师学习教程平台" },
                        { name: "68Design", url: "http://www.68design.net", icon: "", desc: "设计师求职接单一站式服务平台" },
                        { name: "UpLabs", url: "http://www.uplabs.com", icon: "", desc: "国外设计牛站，提升最佳设计和优势; 每天发现新灵感，资源和免费作品" },
                        { name: "Dribbble", url: "http://dribbble.com", icon: "", desc: "设计师获得灵感、反馈社区，也是您发现和联系全球设计师的最佳资源" },
                        { name: "Prototypr", url: "https://www.prototypr.io/home", icon: "", desc: "国外一个设计相关大集合站点，包括设计工具，作品分享" },
                    ],
                },
                {
                    id: "inspiration",
                    title: "灵感闪现",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "picture",
                    title: "图片资源",
                    sitelist: [
                        { name: "花瓣", url: "http://huaban.com", icon: "", desc: "陪你做生活的设计师（发现，采集，分享你喜欢的灵感美图）" },
                        { name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" },
                    ],
                },
                {
                    id: "read",
                    title: "资讯阅读",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "social",
                    title: "网络社交",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "shop",
                    title: "商铺购物",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "game",
                    title: "游戏娱乐",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "gps",
                    title: "定位出行",
                    sitelist: [{ name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库" }],
                },
                {
                    id: "tools",
                    title: "工具",
                    sitelist: [
                        { name: "站长工具", url: "http://tool.chinaz.com", icon: "", desc: "各种常用的在线工具，用的最多的就是代码格式化，时间戳转换" },
                        { name: "Google翻译", url: "https://translate.google.cn", icon: "", desc: "Google 翻译，强大的翻译工具" },
                        { name: "有道翻译", url: "http://fanyi.youdao.com", icon: "", desc: "国内比较厉害的翻译工具" },
                    ],
                },
            ],
        };
    },

    methods: {
        // test: function() {},
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#site {
    width: 100%;
    padding-bottom: 56px;
    // 头部容器
    .container {
        margin: auto;
        .site-category {
            margin-top: 16px;
            .site-title {
                .iconfont {
                    font-size: 24px;
                    color: @desc-dark;
                    margin-right: 8px;
                }
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
                            word-break: break-all;
                            text-overflow: ellipsis;
                            display: -webkit-box; /* 对象作为伸缩盒子模型显示 */
                            -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
                            -webkit-line-clamp: 2; /* 显示的行数 */
                            overflow: hidden; /* 隐藏超出的内容 */
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
    #site .container {
        width: 100%;
        max-width: 1600px;
        .site-list {
            grid-template-columns: repeat(5, 1fr);
        }
    }
}
@media (max-width: 1920px) {
    #site .container {
        width: 95%;
        max-width: 1200px;
        .site-list {
            grid-template-columns: repeat(4, 1fr);
        }
    }
}
@media (max-width: 1200px) {
    #site .container {
        width: 92%;
        max-width: 768px;
        .site-list {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
@media (max-width: 960px) {
    #site .container {
        width: 95%;
        .site-list {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media (max-width: 768px) {
    #site .container {
        width: 92%;
        .site-list {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
