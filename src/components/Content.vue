<!-- 组件模板 -->
<template>
    <div id="content">
        <div class="container">
            <div class="site-type" v-for="category in siteList">
                <!-- 常用推荐 -->
                <div class="title">
                    <i class="iconfont icon-tag"></i>
                    <h2 class="title-text">{{category.title}}</h2>
                </div>
                <div class="site-list">
                    <div class="site-wrapper" v-for="site in category.sites">
                        <a :href="site.url" rel="nofollow" target="_blank">
                            <img />
                            <h3 class="site-name">{{site.name}}</h3>
                            <p class="site-desc">{{site.desc}}</p>
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
            siteList: [
                {
                    title: "常用推荐",
                    sites: [
                        { name: "Dribbble", url: "https://dribbble.com/", icon: "", desc: "全球优秀设计师最佳交流展示平台" },
                        { name: "Dribbble", url: "https://dribbble.com/", icon: "", desc: "全球优秀设计师最佳交流展示平台" },
                    ],
                },
                {
                    title: "界面设计",
                    sites: [{ name: "Dribbble", url: "https://dribbble.com/", icon: "", desc: "全球优秀设计师最佳交流展示平台" }],
                },
            ],
        };
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#content {
    width: auto;
    background: @bg-grey;
}
</style>
