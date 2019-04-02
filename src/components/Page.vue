<template>
    <div class="page">
        <h1 class="title">{{ title }}</h1>
        <div class="content" v-html="content"></div>
    </div>
</template>

<script>
export default {
    name: "Page",
    props: {
        title: String,
        content: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.page {
    padding: 16px;
    border-radius: 8px;
    background: @c-bg-page;
    .page-shadow();
    .title {
        font-size: 28px;
        text-align: center;
        margin: 8px;
        font-weight: 450;
        border-bottom: 1px solid @c-page-title-bottom;
    }
    .content {
        padding: 8px;
        h3 {
            height: 32px;
            line-height: 32px;
            margin-top: 36px;
            font-size: 24px;
        }
        p {
            margin-top: 8px;
            font-size: 16px;
            text-indent: 2em;
            img {
                margin: 16px auto;
                display: flex;
            }
        }
        // 居中引用样式
        .quote-center {
            width: 90%;
            max-width: 960px;
            margin: 36px auto;
            padding: 36px;
            font-size: 16px;
            font-weight: 550px;
            text-align: center;
            color: #545454;
            border-top: 1px solid @c-page-decoration;
            border-bottom: 1px solid @c-page-decoration;
        }
    }
}
</style>
