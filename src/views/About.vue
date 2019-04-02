<!-- 组件模板 -->
<template>
    <div id="about">
        <div class="container">
            <Page v-bind="pageData" />
        </div>
    </div>
</template>

<!-- 脚本 -->
<script>
import Page from "@/components/Page.vue";
export default {
    name: "About",
    data() {
        return {
            pageData: {
                title: "关于这里，关于我",
                content:
                    "<h3>嗨！</h3>" +
                    "<p>这里，我要介绍下我自己！</p>" +
                    "<p>一个90后 Android 攻城狮，入门 IT 行业的程序猿！</p>" +
                    "<p>90后伪技术宅，闷骚型，👨‍💻‍爱编程 👨‍🎨爱绘画 🤓爱设计 😎90后攻城狮，熟悉移动、Web、后台开发；</p>" +
                    "<p>虽然有时候在互联网上是个话痨，但是生活中却是一个不善于语言表达的人，内心感情是非常丰富的，就想到用文字来表达自己的心情！通过文字把表达不出来的写出来，用语言表达不了就用文字写下来！</p>" +
                    "<h3>关于Melove</h3>" +
                    "<p>关于melove.net这个域名，当时没想要表达什么确切的意思，只是想建立一个自己的空间博客，做一些自己的项目，分享一些自己做的东西，现在感觉可以通过她透露出我的喜好，我的爱好，在技术方面我爱的广泛，还需要精通深造，我正努力赋予这个域名一定的意义，做一些与此相关的事情</p>" +
                    "<h3>关于这个导航</h3>" +
                    "<p>本身是为了整理下自己 Google 浏览器的书签，发现还是挺多的，然后看到网上有专门针对设计方面的导航，想着就自己弄一个自己的导航，然后也加了一些搜索引擎，希望这个也能对其他人有用 😁</p>" +
                    "<h3>最后</h3>" +
                    "<p>送大家一句个人独创名言，感觉像大师说出来的O(∩_∩)O~</p>" +
                    "<p class='quote-center'>慢慢来，一步一个脚印 👣</p>" +
                    "<h3>最后的最后</h3>" +
                    "<p>如果你感觉到这里对你有所帮助，可以支援我呀 😁</p>" +
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
#about {
    width: 100%;
    min-height: 90vh;
    .container {
        padding: 16px;
        margin: auto;
    }
}

@media (min-width: 1920px) {
    #about .container {
        width: 100%;
        max-width: 1600px;
    }
}
@media (max-width: 1920px) {
    #about .container {
        width: 95%;
        max-width: 1200px;
    }
}
@media (max-width: 1200px) {
    #about .container {
        width: 92%;
        max-width: 768px;
    }
}
@media (max-width: 960px) {
    #about .container {
        width: 95%;
    }
}
@media (max-width: 768px) {
    #site .container {
        width: 92%;
    }
}
</style>
