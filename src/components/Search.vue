<!-- 组件模板 -->
<template>
    <div id="search">
        <div class="container">
            <!-- 搜索 tab -->
            <div class="search-tab">
                <div class="search-tab-first">
                    <select v-model="selectEngines">
                        <option v-for="category in categorys" v-bind:value="category.engines">
                            {{ category.title }}
                        </option>
                    </select>
                </div>
                <div class="search-tab-scroll">
                    <div class="search-tab-item" v-for="(engine, index) in selectEngines" :class="{'tab-active':selectIndex==index}" v-on:click="tabChange(index)">
                        {{ engine.name }}
                    </div>
                </div>
            </div>
            <!-- 搜索框部分 -->
            <div v-for="(engine, index) in selectEngines" class="search-form" v-if="selectIndex==index">
                <input type="text" :placeholder="engine.hint" v-model="searchContent" onfocus="this.select()" onmouseover="this.focus()" @keyup.enter="search()">
                <span v-on:click="search()">SO 一下</span>
            </div>
        </div>
    </div>
</template>

<!-- 脚本 -->
<script>
export default {
    name: "search",
    data() {
        return {
            categorys: [
                {
                    title: "常用",
                    engines: [
                        { action: "https://www.sogou.com/web?query=", name: "搜狗", hint: "无法翻墙用搜狗" },
                        { action: "https://www.google.com/search?q=", name: "Google", hint: "最强大的搜索引擎" },
                        { action: "https://duckduckgo.com/?q=", name: "DuckDuckGo", hint: "保护隐私的搜索引擎" },
                        { action: "https://www.baidu.com/s?wd=", name: "百度", hint: "百度一下你就知道" },
                        { action: "https://cn.bing.com/search?q=", name: "Bing", hint: "喜欢微软就用Bing" },
                        { action: "https://www.zhihu.com/search?q=", name: "知乎", hint: "有问题上知乎" },
                        { action: "https://music.163.com/#/search/m/?s=", name: "云音乐", hint: "网易云音乐" },
                        { action: "http://huaban.com/search/?q=", name: "花瓣", hint: "花瓣 陪你做生活的设计师" },
                        { action: "http://so.uisdc.com/cse/search?s=16162430669563244173&q=", name: "优设网", hint: "设计师交流学习" },
                        { action: "https://m.kuaidi100.com/result.jsp?nu=", name: "快递", hint: "输入快递单号查询" },
                    ],
                },
                {
                    title: "设计",
                    engines: [
                        { action: "https://s.ui.cn/index.html?keywords=", name: "UI中国", hint: "UI 设计平台" },
                        { action: "https://www.zcool.com.cn/search/content?&word=", name: "站酷", hint: "站酷 设计师互动平台" },
                        { action: "http://so.uisdc.com/cse/search?s=16162430669563244173&q=", name: "优设网", hint: "设计师交流学习" },
                        { action: "https://uiiiuiii.com/?s=", name: "优优网", hint: "搜索优优教程" },
                        { action: "http://so.shejidaren.com/cse/search?s=1461928278188833482&q=", name: "设计达人", hint: "设计达人" },
                        { action: "http://www.68design.net/work/?k=", name: "68Design", hint: "为千万设计师求职接单" },
                        { action: "https://www.csswinner.com/search/", name: "CSSWinner", hint: "CSS 画廊 网页设计灵感来源" },
                        { action: "https://dribbble.com/search?q=", name: "Dribbble", hint: "Dribble 探索世界顶级设计和创意" },
                        { action: "https://www.uplabs.com/search?q=", name: "Uplabs", hint: "Uplabs 设计和开发人员日常社区" },
                        { action: "https://www.behance.net/search?search=", name: "Behance", hint: "Behance 在世界平台展示设计锁频" },
                    ],
                },
                {
                    title: "素材",
                    engines: [
                        { action: "http://huaban.com/search/?q=", name: "花瓣", hint: "花瓣 陪你做生活的设计师" },
                        { action: "https://www.duitang.com/search/?kw=", name: "堆糖", hint: "堆糖 美好生活研究所" },
                        { action: "https://www.pinterest.com/search/pins/?q=", name: "Pinterest", hint: "Pinterest 采集灵感" },
                        { action: "https://www.pexels.com/search/", name: "Pexels", hint: "Pexels 免费照片" },
                        { action: "https://500px.com/search?q=", name: "500PX", hint: "500PX 最出色的摄影社区" },
                        { action: "https://unsplash.com/search/photos/", name: "Unsplash", hint: "Unsplash 漂亮的免费图片" },
                        { action: "https://www.iconfont.cn/search/index?q=", name: "Iconfont", hint: "阿里巴巴矢量图标库" },
                        { action: "https://fonts2u.com/search.html?q=", name: "Fonts2U", hint: "轮廓式字体" },
                        { action: "https://freebiesbug.com/?s=", name: "Freebiesbug", hint: "免费的网页设计资源" },
                        { action: "https://www.freepik.com/search?query=", name: "FreePik", hint: "FreePik 免费矢量图和PSD下载" },
                    ],
                },
                {
                    title: "开发",
                    engines: [
                        { action: "https://github.com/search?q=", name: "Github", hint: "全球最大两性交友社区" },
                        { action: "https://segmentfault.com/search?q=", name: "SegmentFault", hint: "SegmentFault 思否" },
                        { action: "https://stackoverflow.com/search?q=", name: "StackOverflow", hint: "StackOverflow 堆栈溢出" },
                        { action: "https://juejin.im/search?query=", name: "掘金", hint: "一个帮助开发者成长的社区" },
                        { action: "http://www.jcodecraeer.com/plus/search.php?kwtype=0&q=", name: "泡日子", hint: "注重 Web 和 Android 开发" },
                    ],
                },
                {
                    title: "影音",
                    engines: [
                        { action: "https://music.163.com/#/search/m/?s=", name: "云音乐", hint: "网易云音乐" },
                        { action: "http://music.baidu.com/search?key=", name: "千千", hint: "千千静听 听见世界" },
                        { action: "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=", name: "QQ音乐", hint: "搜索 QQ 音乐" },
                        { action: "https://soundcloud.com/search?q=", name: "SoundCloud", hint: "SoundCloud 免费音乐和播客" },
                        { action: "https://open.spotify.com/search/results/", name: "Spotify", hint: "Spotify 精选音乐" },
                        { action: "https://search.bilibili.com/all?keyword=", name: "哔哩哔哩", hint: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili" },
                        { action: "http://gaoqing.la/?s=", name: "高清", hint: "中国高清网" },
                        { action: "https://neets.cc/search?key=", name: "Neets", hint: "Neets 搜索站" },
                        { action: "http://www.zimuzu.io/search/index?keyword=", name: "字幕组", hint: "" },
                        { action: "http://www.rarbt.com/index.php/search/index.html?search=", name: "RARBT", hint: "RARBT下载站" },
                        { action: "https://share.dmhy.org/topics/list?keyword=", name: "动漫", hint: "动漫花园资源网" },
                        { action: "https://www.youtube.com/results?search_query=", name: "YouTube", hint: "YouTube 站点" },
                    ],
                },
                {
                    title: "资源",
                    engines: [
                        { action: "https://xclient.info/search/s/", name: "XClient", hint: "精品 Mac 软件分享" },
                        { action: "https://www.iplaysoft.com/search/?s=548512288484505211&q=", name: "异次元", hint: "异次元软件世界" },
                        { action: "http://bbs.pcbeta.com/search.php?mod=forum&searchid=1579&orderby=lastpost&ascdesc=desc&searchsubmit=yes&kw=", name: "远景", hint: "微软极客社区" },
                        { action: "http://www.panduoduo.net/s/name/hello", name: "搜网盘", hint: "盘多多 搜网盘资源" },
                        { action: "https://www.zhihu.com/search?q=", name: "知乎", hint: "有问题上知乎" },
                        { action: "https://www.douban.com/search?q=", name: "豆瓣", hint: "豆瓣 发现兴趣" },
                        { action: "https://bookset.me/search/", name: "BookSet", hint: "精品电子书" },
                        { action: "http://www.ireadweek.com/index.php/Index/bookList.html?keyword=", name: "周读", hint: "周读 免费电子书分享" },
                        { action: "http://www.jebook.org/?s=", name: "JEBook", hint: "精益电子书制作组" },
                    ],
                },
                {
                    title: "出行",
                    engines: [
                        { action: "https://ditu.amap.com/search?query=", name: "高德地图", hint: "高德地图" },
                        { action: "http://search.qyer.com/index?wd=", name: "穷游", hint: "穷游 旅游攻略分享社区" },
                        { action: "http://www.mafengwo.cn/search/s.php?q=", name: "马蜂窝", hint: "马蜂窝 自由行攻略" },
                        { action: "http://web.breadtrip.com/search/?q=", name: "面包旅行", hint: "面包旅行 记录与分享" },
                        { action: "https://www.airbnb.cn/s/", name: "Airbnb", hint: "Airbnb 搜房源" },
                        { action: "https://www.tripadvisor.cn/Search?q=", name: "猫途鹰", hint: "猫途鹰 全球旅游真实点评" },
                    ],
                },
            ],
            selectEngines: [
                { action: "https://www.sogou.com/web?query=", name: "搜狗", hint: "无法翻墙用搜狗" },
                { action: "https://www.google.com/search?q=", name: "Google", hint: "最强大的搜索引擎" },
                { action: "https://duckduckgo.com/?q=", name: "DuckDuckGo", hint: "保护隐私的搜索引擎" },
                { action: "https://www.baidu.com/s?wd=", name: "百度", hint: "百度一下你就知道" },
                { action: "https://cn.bing.com/search?q=", name: "Bing", hint: "喜欢微软就用Bing" },
                { action: "https://www.zhihu.com/search?q=", name: "知乎", hint: "有问题上知乎" },
                { action: "https://music.163.com/#/search/m/?s=", name: "云音乐", hint: "网易云音乐" },
                { action: "http://huaban.com/search/?q=", name: "花瓣", hint: "花瓣 陪你做生活的设计师" },
                { action: "http://so.uisdc.com/cse/search?s=16162430669563244173&q=", name: "优设网", hint: "设计师交流学习" },
                { action: "https://m.kuaidi100.com/result.jsp?nu=", name: "快递", hint: "输入快递单号查询" },
            ],
            selectIndex: 0,
            searchContent: "",
        };
    },
    methods: {
        tabChange: function(index) {
            this.selectIndex = index;
        },
        search: function() {
            let url = this.selectEngines[this.selectIndex].action + this.searchContent;
            window.open(url, "_blank");
        },
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#search {
    width: 100%;
    padding-top: 16px;
    padding-bottom: 12px;
    background: @c-bg-header;
    // 头部容器
    .container {
        margin: auto;
        // 头部搜索框
        .search-tab {
            width: auto;
            list-style: none;
            padding: 0;
            font-weight: 400;
            .search-tab-first {
                display: block;
                float: left;
                position: relative;
                width: 64px;
                padding: 0 8px;
                text-align: center;
                color: @c-header-text-light;
                select {
                    width: 64px;
                    height: 36px;
                    line-height: 36px;
                    padding-left: 12px;
                    //隐藏select的下拉图标
                    appearance: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    font-size: 14px;
                    color: @c-header-text-light;
                    background: @c-transparent;
                    cursor: pointer;
                }
                &::after {
                    content: "▼";
                    position: absolute;
                    top: 1px;
                    right: 16px;
                    width: 8px;
                    height: 36px;
                    line-height: 36px;
                    font-size: 12px;
                    text-align: center;
                }
            }
            .search-tab-scroll {
                overflow-x: auto; /* 1 */
                overflow-y: hidden;
                white-space: nowrap;
                -webkit-overflow-scrolling: touch; /* 2 */
                .search-tab-item {
                    display: inline-block;
                    height: 36px;
                    line-height: 36px;
                    padding: 0 16px;
                    font-size: 14px;
                    color: @c-bg-header-tab;
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                    cursor: pointer;
                    &.tab-active {
                        background: @c-bg-header-tab;
                        color: @c-header-text-dark;
                    }
                    &:hover {
                        background: @c-bg-header-tab;
                        color: @c-header-text-dark;
                    }
                }
            }
        }
        .search-form {
            position: relative;
            top: -1px;
            width: 100%;
            input {
                box-sizing: border-box;
                width: 100%;
                height: 42px;
                line-height: 42px;
                padding-left: 16px;
                padding-right: 96px;
                border: none;
                font-size: 14px;
                border-radius: 4px;
                color: @c-header-input-hint;
                outline: none;
                &:focus {
                    color: @c-header-text-dark;
                }
            }
            span {
                display: inline-block;
                position: absolute;
                right: 0;
                top: 0;
                width: 80px;
                height: 42px;
                line-height: 42px;
                margin-left: -5px;
                border: none;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                box-sizing: border-box;
                color: @c-header-text-light;
                font-size: 14px;
                text-align: center;
                background-color: @c-header-btn-green;
                cursor: pointer;
                &:hover {
                    background-color: @c-header-btn-green-active;
                }
            }
        }
    }
}
@media (min-width: 1920px) {
    #search .container {
        width: 100%;
        max-width: 1600px;
    }
}
@media (max-width: 1920px) {
    #search .container {
        width: 95%;
        max-width: 1200px;
    }
}
@media (max-width: 1200px) {
    #search .container {
        width: 92%;
        max-width: 768px;
        .search-tab .search-tab-scroll .search-tab-item {
            padding: 0 8px;
        }
    }
}
@media (max-width: 960px) {
    #search .container {
        width: 95%;
        .search-right-link {
            display: none;
        }
    }
}
@media (max-width: 768px) {
    #search .container {
        width: 95%;
        .search-tab {
            .search-tab-first {
                width: 56px;
                select {
                    height: 32px;
                    line-height: 32px;
                }
                &::after {
                    height: 32px;
                    line-height: 32px;
                }
            }
            .search-tab-scroll {
                .search-tab-item {
                    padding: 0 6px;
                    font-size: 13px;
                    height: 32px;
                    line-height: 32px;
                }
            }
        }
        .search-form {
            input {
                height: 32px;
                line-height: 32px;
                font-size: 13px;
            }
            span {
                height: 32px;
                line-height: 32px;
                font-size: 13px;
            }
        }
    }
}
</style>
