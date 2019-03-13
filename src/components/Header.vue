<!-- 组件模板 -->
<template>
    <div id="header">
        <div class="container">
            <div class="header-search">
                <ul class="search-tab">
                    <li>搜索引擎:</li>
                    <li>
                        <input type="radio" id="sogou-search" class="test-radio" name="tab" checked="checked">
                        <label class="sogou-label" for="sogou-search">搜狗</label>
                    </li>
                    <li>
                        <input type="radio" id="google-search" class="test-radio" name="tab" checked="checked">
                        <label class="sogou-label" for="google-search">Google</label>
                    </li>
                    <li>
                        <input type="radio" id="baidu-search" class="test-radio" name="tab" checked="checked">
                        <label class="sogou-label" for="baidu-search">百度</label>
                    </li>
                </ul>
                <div class="search-right-link">
                    <a href="https://hao.melove.net" class="add_fav" target="_blank">
                        <i class="icon-heart"></i>Ctrl+D 收藏导航
                    </a>
                    <a href="https://www.melove.net" target="_blank">
                        <i class="icon-pen-01"></i>关于我
                    </a>
                    <a href="https://translate.google.cn/" target="_blank">&nbsp;翻译工具</a>
                </div>
                <div class="search-input">
                    <!-- 搜狗搜索 -->
                    <form class="search" id="sogou-search" action="https://www.sogou.com/web" method="get" target="_blank">
                        <input type="text" name="query" class="s" placeholder="你想搜什么">
                        <button type="submit" name="submit" class="btn">搜一下</button>
                    </form>
                    <!-- Google 搜索 -->
                    <form class="search hidden" id="google-search" action="https://www.google.com/search" method="get" target="_blank">
                        <input type="text" name="q" class="s" placeholder="你想搜什么">
                        <button type="submit" name="submit" class="btn">Google</button>
                    </form>
                    <!-- 百度搜索 -->
                    <form class="search hidden" id="baidu-search" action="https://www.baidu.com/s" method="get" target="_blank">
                        <input type="text" name="wd" class="s" placeholder="你想搜什么">
                        <button type="submit" name="submit" class="btn">百度一下</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- 脚本 -->
<script>

</script>

<!-- 样式 -->
<style lang="less">
#header {
    background: @bg-header;
    padding-top: 24px;
    padding-bottom: 16px;
}
.container {
    width: 90%;
    max-width: 1600px;
    margin: auto;
}
.header-search {
    margin-left: 16px;
    ul {
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
            &.current {
                background: @bg-light;
                color: @text-dark;
            }
            &:hover {
                background: @bg-light;
                color: @text-dark;
            }
            &:first-child {
                cursor: auto;
                color: @text-light;
                &:hover {
                    background-color: transparent;
                }
            }
        }
    }
    .search-right-link {
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
    .search-input {
        position: relative;
        top: -1px;
        .search.hidden {
            display: none;
        }
        form {
            position: relative;
            width: 100%;
            input {
                box-sizing: border-box;
                width: 100%;
                border: none;
                font-size: 15px;
                line-height: 20px;
                height: 42px;
                padding: 11px 100px 11px 26px;
                border-radius: 3px;
                color: #9f9f9f;
                outline: none;
                &:focus {
                    color: #3c3c3c;
                }
            }
            button {
                height: 42px;
                box-sizing: border-box;
                width: 100px;
                margin-left: -5px;
                cursor: pointer;
                background-color: #69bdfb;
                color: #fff;
                border: none;
                font-size: 15px;
                line-height: 42px;
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
                position: absolute;
                right: 0;
                top: 0;
                &:hover {
                    background-color: #51b1f5;
                }
            }
        }
    }
}
@media (max-width: 1200px) {
    .header-search ul li {
        padding: 0 12px;
    }
}
@media (max-width: 960px) {
    .header-search {
        margin-left: 0;
        width: 100%;
        .search-right-link {
            display: none;
        }
        .search-left-input {
            margin-right: 0;
        }
    }
}
@media (max-width: 768px) {
    .header-search {
        ul li {
            padding: 0 8px;
            font-size: 13px;
            height: 32px;
            line-height: 32px;
        }
        .search-left-input {
            input {
                height: 32px;
                line-height: 32px;
                font-size: 13px;
                border-radius: 0 3px 3px 3px;
            }
            button {
                height: 34px;
                line-height: 34px;
                width: 6em;
                font-size: 12px;
            }
        }
    }
}
</style>
