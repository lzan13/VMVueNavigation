<!-- 组件模板 -->
<template>
    <div id="header">
        <div class="container">
            <div class="header-title">
                <span>Menu</span>
                <span>个人导航</span>
            </div>
            <div class="header-right-link">
                <a href="https://hao.melove.net" target="_blank">Ctrl+D 收藏</a>
                <a href="https://www.melove.net" target="_blank">关于我</a>
            </div>
            <div class="header-search">

                <!-- <span>Selected: {{ selectEngines }}</span> -->
                <ul class="search-tab">
                    <li>
                        <select v-model="selectEngines">
                            <option v-for="category in categorys" v-bind:value="category.engines">
                                {{ category.title }}
                            </option>
                        </select>
                    </li>
                    <li v-for="(engine, index) in selectEngines" :class="{'tab-active':selectIndex==index}" v-on:click="tabChange(index)">
                        {{ engine.name }}
                    </li>
                    <!-- <li v-for="(ind, key, index) in tabs" v-bind:class="{tab-active:(currIndex==index)}" v-on:click="changeTab(index)">{{ind}}</li> -->
                </ul>
                <div class="search-input">
                    <div v-for="(engine, index) in selectEngines" class="search-form" v-if="selectIndex==index">
                        <input type="text" :placeholder="engine.hint" v-model="searchContent" onfocus="this.select()" onmouseover="this.focus()">
                        <span v-on:click="search()">Enter/点我</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- 脚本 -->
<script>
export default {
    name: "Header",
    data() {
        return {
            categorys: [
                {
                    title: "常用",
                    engines: [
                        { action: "https://www.sogou.com/web?query=", name: "搜狗", hint: "无法翻墙用搜狗" },
                        { action: "https://www.google.com/search?q=", name: "Google", hint: "最强大的搜索引擎" },
                        { action: "https://www.baidu.com/s?wd=", name: "百度", hint: "百度一下你就知道" },
                        { action: "https://www.zhihu.com/search?q=", name: "知乎", hint: "有问题上知乎" },
                        { action: "https://music.163.com/#/search/m/?s=", name: "云音乐", hint: "网易云音乐" },
                    ],
                },
                {
                    title: "搜索",
                    engines: [
                        { action: "https://www.sogou.com/web?query=", name: "搜狗", hint: "无法翻墙用搜狗" },
                        { action: "https://www.google.com/search?q=", name: "Google", hint: "最强大的搜索引擎" },
                        { action: "https://cn.bing.com/search?q=", name: "Bing", hint: "喜欢微软就用Bing" },
                        { action: "https://www.baidu.com/s?wd=", name: "百度", hint: "百度一下你就知道" },
                        { action: "https://yz.m.sm.cn/s?q=", name: "神马", hint: "神马搜索" },
                    ],
                },
                {
                    title: "设计",
                    engines: [
                        { action: "https://www.csswinner.com/search/", name: "CSSWinner", hint: "输入快递单号查询" },
                        { action: "https://www.google.com/search?q=", name: "Google", hint: "最强大的搜索引擎" },
                        { action: "https://cn.bing.com/search?q=", name: "Bing", hint: "喜欢微软就用Bing" },
                        { action: "https://www.baidu.com/s?wd=", name: "百度", hint: "百度一下你就知道" },
                        { action: "https://yz.m.sm.cn/s?q=", name: "神马", hint: "神马搜索" },
                    ],
                },
                {
                    title: "影视",
                    engines: [
                        { action: "http://gaoqing.la/?s=", name: "高清", hint: "输入快递单号查询" },
                        { action: "http://www.llduang.com/?s=", name: "大榴莲", hint: "最强大的搜索引擎" },
                        { action: "https://cn.bing.com/search?q=", name: "Bing", hint: "喜欢微软就用Bing" },
                        { action: "https://www.baidu.com/s?wd=", name: "百度", hint: "百度一下你就知道" },
                        { action: "https://yz.m.sm.cn/s?q=", name: "神马", hint: "神马搜索" },
                    ],
                },
                {
                    title: "音乐",
                    engines: [
                        { action: "https://music.163.com/#/search/m/?s=", name: "云音乐", hint: "网易云音乐" },
                        { action: "https://www.xiami.com/search?key=", name: "虾米", hint: "最强大的搜索引擎" },
                        { action: "http://music.baidu.com/search?key=", name: "千千", hint: "喜欢微软就用Bing" },
                        { action: "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=", name: "QQ音乐", hint: "百度一下你就知道" },
                        { action: "https://soundcloud.com/search?q=", name: "SoundCloud", hint: "神马搜索" },
                        { action: "https://open.spotify.com/search/results/", name: "Spotify", hint: "神马搜索" },
                    ],
                },
                {
                    title: "工具",
                    engines: [
                        { action: "https://m.kuaidi100.com/result.jsp?nu=", name: "快递", hint: "输入快递单号查询" },
                        { action: "https://www.google.com/search?q=", name: "Google", hint: "最强大的搜索引擎" },
                        { action: "https://cn.bing.com/search?q=", name: "Bing", hint: "喜欢微软就用Bing" },
                        { action: "https://www.baidu.com/s?wd=", name: "百度", hint: "百度一下你就知道" },
                        { action: "https://yz.m.sm.cn/s?q=", name: "神马", hint: "神马搜索" },
                    ],
                },
            ],
            selectEngines: [
                { action: "https://www.sogou.com/web?query=", name: "搜狗", hint: "无法翻墙用搜狗" },
                { action: "https://www.google.com/search?q=", name: "Google", hint: "最强大的搜索引擎" },
                { action: "https://www.baidu.com/s?wd=", name: "百度", hint: "百度一下你就知道" },
                { action: "https://www.zhihu.com/search?q=", name: "知乎", hint: "有问题上知乎" },
                { action: "https://music.163.com/#/search/m/?s=", name: "云音乐", hint: "网易云音乐" },
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
#header {
    width: 100%;
    padding-top: 36px;
    padding-bottom: 12px;
    background: @bg-header;
    // 头部容器
    .container {
        width: 90%;
        max-width: 1600px;
        margin: auto;
        .header-title {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 36px;
            line-height: 36px;
            background: @bg-light;
            .nav-shadow();
            z-index: 5;
            span {
                font-size: 16px;
                font-weight: 500px;
                color: @title-dark;
            }
        }
        // 头部右侧链接
        .header-right-link {
            position: absolute;
            right: 16px;
            top: 8px;
            a {
                display: inline-block;
                padding-right: 8px;
                color: @text-light;
                text-decoration: none;
                font-size: 13px;
                &:hover {
                    color: @text-light;
                }
            }
        }
        // 头部搜索框
        .header-search {
            margin: 8px;
            ul.search-tab {
                list-style: none;
                padding: 0;
                li {
                    display: inline-block;
                    color: @bg-light;
                    padding: 0 24px;
                    height: 36px;
                    line-height: 36px;
                    font-size: 14px;
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                    cursor: pointer;
                    &.tab-active {
                        background: @bg-light;
                        color: @text-dark;
                    }
                    &:hover {
                        background: @bg-light;
                        color: @text-dark;
                    }
                    &:first-child {
                        position: relative;
                        width: 56px;
                        padding: 0 8px;
                        text-align: center;
                        color: @text-light;
                        &:hover {
                            background-color: @bg-translucence-light;
                        }
                        &::after {
                            content: "▼";
                            position: absolute;
                            top: 2px;
                            right: 8px;
                            width: 8px;
                            height: 36px;
                            line-height: 36px;
                            font-size: 12px;
                            text-align: center;
                        }
                        select {
                            width: 100%;
                            height: 36px;
                            line-height: 36px;
                            padding-left: 12px;
                            //隐藏select的下拉图标
                            appearance: none;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            font-size: 16px;
                            color: @text-light;
                            background: @transparent;
                            cursor: pointer;
                        }
                    }
                }
            }
            .search-input {
                position: relative;
                top: -1px;
                .search-form {
                    width: 100%;
                    input {
                        box-sizing: border-box;
                        width: 100%;
                        height: 42px;
                        line-height: 42px;
                        padding: 0 16px;
                        border: none;
                        font-size: 14px;
                        border-radius: 4px;
                        color: @desc-dark;
                        outline: none;
                        &:focus {
                            color: @text-dark;
                        }
                    }
                    span {
                        display: inline-block;
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 100px;
                        height: 42px;
                        line-height: 42px;
                        margin-left: -5px;
                        border: none;
                        border-top-right-radius: 4px;
                        border-bottom-right-radius: 4px;
                        box-sizing: border-box;
                        color: @text-light;
                        font-size: 14px;
                        text-align: center;
                        background-color: #69bdfb;
                        cursor: pointer;
                        &:hover {
                            background-color: #51b1f5;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 1200px) {
    #header .container .header-search ul.search-tab li {
        padding: 0 12px;
    }
}
@media (max-width: 960px) {
    #header .container {
        width: 95%;
        .header-title {
            display: block;
        }
        .header-right-link {
            display: none;
        }
    }
}
@media (max-width: 768px) {
    #header .container {
        width: 95%;
        .header-title {
            display: block;
        }
        .header-search {
            ul.search-tab li {
                padding: 0 8px;
                font-size: 13px;
                height: 32px;
                line-height: 32px;
            }
            .search-input .search-form {
                input {
                    height: 32px;
                    line-height: 32px;
                    font-size: 13px;
                }
                span {
                    width: 80px;
                    height: 32px;
                    line-height: 32px;
                    font-size: 13px;
                }
            }
        }
    }
}
</style>
