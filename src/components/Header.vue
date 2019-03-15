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
                <ul class="search-tab">
                    <li>搜索引擎:</li>
                    <li v-for="(item, index) in tabList" :class="{'tab-active':currIndex==index}" v-on:click="tabChange(index)">
                        {{ item.name }}
                    </li>
                    <!-- <li v-for="(ind, key, index) in tabs" v-bind:class="{tab-active:(currIndex==index)}" v-on:click="changeTab(index)">{{ind}}</li> -->
                </ul>
                <div class="search-input">
                    <div v-for="(item, index) in formList" class="search-form" v-if="currIndex==index">
                        <input type="text" :placeholder="item.hint" v-model="searchContent" onfocus="this.select()" onmouseover="this.focus()">
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
            engineList: [
                {
                    title: "常用",
                    tabs: [{ name: "搜狗" }, { name: "Google" }, { name: "百度" }, { name: "知乎" }, { name: "音乐" }],
                    engines: [
                        { action: "https://www.sogou.com/web?query=", name: "query", hint: "无法翻墙用搜狗" },
                        { action: "https://www.google.com/search?q=", name: "q", hint: "最强大的搜索引擎" },
                        { action: "https://www.baidu.com/s?wd=", name: "wd", hint: "百度一下你就知道" },
                        { action: "https://www.zhihu.com/search?q=", name: "q", hint: "有问题上知乎" },
                        { action: "https://music.163.com/#/search/m/?s=", name: "s", hint: "网易云音乐" },
                    ],
                },
                {
                    title: "搜索",
                    engines: [
                        { action: "https://www.sogou.com/web?query=", name: "query", hint: "无法翻墙用搜狗" },
                        { action: "https://www.google.com/search?q=", name: "q", hint: "最强大的搜索引擎" },
                        { action: "https://www.baidu.com/s?wd=", name: "wd", hint: "百度一下你就知道" },
                        { action: "https://cn.bing.com/search?q=", name: "q", hint: "Bing 搜索" },
                        { action: "https://yz.m.sm.cn/s?q=", name: "q", hint: "神马搜索" },
                    ],
                },
            ],
            currIndex: 0,
            searchContent: "",
        };
    },
    methods: {
        tabChange: function(index) {
            this.currIndex = index;
        },
        search: function() {
            let url = this.formList[this.currIndex].action + this.searchContent;
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
                        padding: 0 8px;
                        color: @text-light;
                        cursor: auto;
                        &:hover {
                            background-color: transparent;
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
