<!-- 组件模板 -->
<template>
    <div id="footer">
        <p><span class="all-right-reserved">&copy; 2019</span><a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备14080761号-1</a></p>
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
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 32px;
    line-height: 32px;
    padding-left: 16px;
    text-align: left;
    background-color: @bg-footer;
    .nav-shadow();
    p {
        color: @desc-grey;
        font-size: 12px;
        a {
            margin-left: 8px;
            color: @desc-grey;
            &:hover {
                color: @active-link;
            }
        }
    }
}
</style>
