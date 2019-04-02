<!-- 组件模板 -->
<template>
    <div id="donate">
        <div class="container">
            <Page v-bind="pageData" />
        </div>
    </div>
</template>

<!-- 脚本 -->
<script>
import Page from "@/components/Page.vue";
export default {
    name: "Donate",
    data() {
        return {
            pageData: {
                title: "关于捐赠",
                content:
                    "<h3>嗨！</h3>" +
                    "<p>你好啊！</p>" +
                    "<h3>关于这个导航</h3>" +
                    "<p>本身是为了整理下自己 Google 浏览器的书签，发现还是挺多的，然后看到网上有专门针对设计方面的导航，想着就自己弄一个自己的导航，然后也加了一些搜索引擎，希望这个也能对其他人有用 😁</p>" +
                    "<h3>感谢你的支持</h3>" +
                    "<p>如果喜欢的可以通过下方二维码进行支持，这里会感谢你的，这里会在下方加上只吃过我的朋友！</p>" +
                    "<p>送你一句个人独创名言，感觉像大师说出来的O(∩_∩)O~</p>" +
                    "<p class='quote-center'>慢慢来，一步一个脚印 👣</p>" +
                    "<p><img src='https://d.blog.melove.net/images/alipay-qr-receipt.jpg-v512'/></p>",
            },
        };
    },
    components: {
        Page,
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#donate {
    width: 100%;
    min-height: 90vh;
    .container {
        padding: 16px;
        margin: auto;
    }
}

@media (min-width: 1920px) {
    #donate .container {
        width: 100%;
        max-width: 1600px;
    }
}
@media (max-width: 1920px) {
    #donate .container {
        width: 95%;
        max-width: 1200px;
    }
}
@media (max-width: 1200px) {
    #donate .container {
        width: 92%;
        max-width: 768px;
    }
}
@media (max-width: 960px) {
    #donate .container {
        width: 95%;
    }
}
@media (max-width: 768px) {
    #donate .container {
        width: 92%;
    }
}
</style>