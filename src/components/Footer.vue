<!-- 组件模板 -->
<template>
    <div id="footer">
        <p class="copyright"><span class="all-right-reserved">&copy; 2019</span><a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备14080761号-1</a></p>
    </div>
</template>

<!-- 脚本 -->
<script>
export default {
    name: "Footer",
    data() {
        return {};
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#footer {
    width: 100%;
    height: 56px;
    line-height: 56px;
    text-align: left;
    color: @c-footer-text;
    background-color: @c-bg-footer;
    .copyright {
        border-top: 1px solid @c-footer-decoration;
        font-size: 12px;
        padding-left: 16px;
        a {
            margin-left: 8px;
        }
    }
}
</style>
