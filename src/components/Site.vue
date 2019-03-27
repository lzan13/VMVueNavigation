<!-- 组件模板 -->
<template>
    <div id="site">
        <div class="container">
            <div class="site-category" v-for="category in siteCategorys">
                <!-- 常用推荐 -->
                <div :id="category.id" class="site-title">
                    <i :class="'iconfont icon-' + category.id"></i><span class="site-title-text">{{ category.title }}</span>
                </div>
                <div class=" site-list">
                    <div class="site-wrapper" v-for="site in category.sitelist">
                        <a :href="site.url" rel="nofollow" target="_blank">
                            <img class="site-icon" />
                            <div class="site-content">
                                <h3 class="site-name">{{ site.name }}</h3>
                                <p class="site-desc">{{ site.desc }}</p>
                            </div>
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
    name: "Site",
    data() {
        return {
            siteCategorys: [
                {
                    id: "recommend",
                    title: "常用推荐",
                    sitelist: [
                        { name: "网易云音乐", url: "https://music.163.com", icon: "", desc: "网易云音乐，最喜欢的音乐平台，喜欢听私人FM" },
                        { name: "爱范儿", url: "https://www.ifanr.com/", icon: "", desc: "爱范儿，让未来触手可及，我每天都看的互联网资讯平台" },
                        { name: "IconFont", url: "https://www.iconfont.cn", icon: "", desc: "阿里巴巴矢量图标库，平常做自己的项目可以在这上边找图标" },
                        { name: "花瓣", url: "http://huaban.com", icon: "", desc: "陪你做生活的设计师（发现，采集，分享你喜欢的灵感美图）" },
                        { name: "优设网", url: "https://www.uisdc.com", icon: "", desc: "设计师学习交流平台，很多设计干货" },
                        { name: "Pinterest", url: "https://www.pinterest.com", icon: "", desc: "从优美的图海中洞见全球设计创意" },
                        { name: "Dribbble", url: "https://dribbble.com", icon: "", desc: "全球优秀设计师最佳交流展示平台" },
                    ],
                },
                {
                    id: "develop",
                    title: "开发相关",
                    sitelist: [
                        { name: "AndroidDevTools", url: "https://www.androiddevtools.cn", icon: "", desc: "Android 开发工具，为了解决国内访问不顺畅的问题，不过我有梯子😁" },
                        { name: "MaterialPalette", url: "https://www.materialpalette.com", icon: "", desc: "Google Material Design 色彩生成器" },
                        { name: "AndroidStudio中文组", url: "http://android-studio.org", icon: "", desc: "一支针对Android Studio做本地化支持的团队" },
                        { name: "Codota", url: "https://www.codota.com", icon: "", desc: "AI 智能能代码提示工具" },
                        { name: "RunJS", url: "https://runjs.cn", icon: "", desc: "在线编辑、展示、分享、交流你的 JavaScript 代码" },
                        { name: "JSRun", url: "https://jsrun.net", icon: "", desc: "在线编辑器，包括 JS/Nodejs/Java/C/C++/Ruby/Lua/Python/PHP/GO等多种代码" },
                        { name: "CodePen", url: "https://codepen.io", icon: "", desc: "面向前端设计人员和开发人员的社交开发环境" },
                        { name: "VueJS", url: "https://cn.vuejs.org/index.html", icon: "", desc: "渐进式 JavaScript 开发框架，前端开发利器" },
                        { name: "BootCSS", ul: "http://www.bootcss.com/", icon: "", desc: "简洁、直观、强悍的前端开发框架，让web开发更迅速、简单" },
                        { name: "泡在网上的日子", url: "http://www.jcodecraeer.com", icon: "", desc: "很棒的开发社区，里边有不少不错的文章" },
                        { name: "掘金", url: "https://juejin.im/timeline", icon: "", desc: "掘金是帮助开发者成长的社区，包括Android、iOS、前端、后端等方面的内容" },
                        { name: "凹凸实验室", url: "https://aotu.io", icon: "", desc: "一个年轻基情的技术社区组织，面向多终端技术体系，主要是 Web 的内容" },
                        { name: "SegmentFault思否", url: "http://segmentfault.com", icon: "", desc: "思否，国内最大的开发问答社区，在这里学习技能、解决问题" },
                        { name: "StackoverFlow", url: "https://stackoverflow.com", icon: "", desc: "全球最大的开发问答社区，分享交流编程知识" },
                        { name: "V2EX", url: "https://www.v2ex.com", icon: "", desc: "V2EX 是一个关于分享和探索的地方，一个 IT 人交流社区" },
                        { name: "W3School", url: "http://www.w3school.com.cn", icon: "", desc: "在 w3school，你可以找到你所需要的所有的网站建设教程，HTML/CSS/JS/PHP/SQL等" },
                        { name: "菜鸟教程", url: "http://www.runoob.com", icon: "", desc: "提供HTML/CSS/JS/PHP/SQL/Java/C/Ruby/Python等教程，也提供大量实例" },
                        { name: "BootCDN", url: "https://www.bootcdn.cn", icon: "", desc: "稳定、快速、免费的前端开源项目 CDN 加速服务" },
                        { name: "75CDN", url: "https://cdn.baomitu.com", icon: "", desc: "前端静态资源库，首个支持 HTTP/2 的 CDN 服务" },
                        { name: "StaticfileCDN", url: "https://www.staticfile.org", icon: "", desc: "由国内七牛云提供存储和加速赞助，同步国外 CDNJS 源站" },
                        { name: "GoogleLibraries", url: "https://developers.google.com/speed/libraries/", icon: "", desc: "Google Host Libraries - Google提供的 CDN 加速服务" },
                        { name: "CDNJS", url: "https://cdnjs.com", icon: "", desc: "CDNJS - 用于网络相关库的最佳CDN，可加快您的网站速度！" },
                        { name: "JSDelivr", url: "https://www.jsdelivr.com", icon: "", desc: "适用于npm和GitHub的免费，快速，可靠的开源CDN" },
                    ],
                },
                {
                    id: "design",
                    title: "设计资源",
                    sitelist: [
                        { name: "UI中国", url: "http://www.ui.cn", icon: "", desc: "专业用户设计平台，里边的作品都是高质量的" },
                        { name: "站酷", url: "http://www.zcool.com.cn", icon: "", desc: "设计师互动平台 - 打开站酷，发现更好的设计！" },
                        { name: "盒子UI", url: "http://www.boxui.com", icon: "", desc: "专注UI设计，分享精彩的UI设计、交互设计、用户研究作品及相关UI理论知识" },
                        { name: "视觉中国", url: "http://shijue.me", icon: "", desc: "设计师&插画师交流平台" },
                        { name: "优设网", url: "http://www.uisdc.com", icon: "", desc: "设计师交流学习平台 - 看设计文章，学软件教程，找灵感素材，尽在优设网！" },
                        { name: "优优教程网", url: "http://www.uiiiuiii.com", icon: "", desc: "学教程找灵感就上优优 - PS教程、AI教程、原创免费教程" },
                        { name: "学UI网", url: "http://www.xueui.cn", icon: "", desc: "UI 设计师学习教程平台" },
                        { name: "68Design", url: "http://www.68design.net", icon: "", desc: "设计师求职接单一站式服务平台" },
                        { name: "秀设计", url: "https://www.xiusheji.com", icon: "", desc: "大学生设计联盟，集聚了最具潮流时尚、年轻活力的青年及学生人群" },
                        { name: "优阁网", url: "http://uigreat.com", icon: "", desc: "设计师学习交流分享平台，免费UI设计公开课，分享最新UI设计教程，UI设计资源" },
                        { name: "微元素", url: "https://www.element3ds.com", icon: "", desc: "游戏资源下载，游戏原画，手机游戏资源，游戏开发资源" },
                        { name: "游戏UI", url: "http://www.gameui.cn", icon: "", desc: "专注于游戏视觉相关的设计分享，更有ICON、WEB、图标、插画、字形设计、交互灯欣赏" },
                        { name: "字体传奇", url: "http://www.ziticq.com", icon: "", desc: "中国首个字体设计师交流网，不只有字体，挺不错" },
                        { name: "普象网", url: "https://www.pushthink.com", icon: "", desc: "国内工业设计交流社区" },
                        { name: "UpLabs", url: "http://www.uplabs.com", icon: "", desc: "国外设计牛站，提升最佳设计和优势; 每天发现新灵感，资源和免费作品" },
                        { name: "Dribbble", url: "http://dribbble.com", icon: "", desc: "设计师获得灵感、反馈社区，也是您发现和联系全球设计师的最佳资源" },
                        { name: "CollectUI", url: "http://collectui.com", icon: "", desc: "每日收集各种 UI，各种分类，很齐全" },
                        { name: "UI8", url: "https://ui8.net", icon: "", desc: "设计作品商店，挺好的，不买来看看也好" },
                        { name: "Prototypr", url: "https://www.prototypr.io/home", icon: "", desc: "国外一个设计相关大集合站点，包括设计工具，作品分享" },
                        { name: "Seeseed", url: "https://www.seeseed.com", icon: "", desc: "无穷尽设计可能" },
                        { name: "优设导航", url: "http://hao.uisdc.com", icon: "", desc: "SDC设计师网址导航 - 学设计从这里开始！" },
                        { name: "设计导航", url: "http://hao.shejidaren.com", icon: "", desc: "设计导航 - 精选最好的设计网站大全" },
                        { name: "牛大拿", url: "http://niudana.com", icon: "", desc: "牛大拿_最贴心的设计师导航" },
                        { name: "钢笔练习", url: "https://bezier.method.ac", icon: "", desc: "一款游戏，可以帮助您掌握钢笔工具" },
                        { name: "Fotor懒设计", url: "https://www.fotor.com.cn", icon: "", desc: "在线设计网站，提供海量海报、邀请函、贺卡、Banner、Logo、名片等免费设计素材和模板" },
                    ],
                },
                {
                    id: "picture",
                    title: "图片资源",
                    sitelist: [
                        { name: "花瓣", url: "http://huaban.com", icon: "", desc: "陪你做生活的设计师，发现，采集，分享你喜欢的灵感美图" },
                        { name: "堆糖", url: "https://www.duitang.com", icon: "", desc: "分享收集手工DIY、插画手绘、美食菜谱、潮流品牌、搭配街拍、美妆发型等各种图片" },
                        { name: "SSYER", url: "https://www.ssyer.com/home", icon: "", desc: "沙沙野 - 免费背景图片素材，网页设计图片素材网站" },
                        { name: "Pinterest", url: "https://www.pinterest.com", icon: "", desc: "收集分享各种图片，我主要在上边收集一些绘画方面的图" },
                        { name: "500PX", url: "https://500px.com", icon: "", desc: "最出色的摄影社区，有着世界上最好的照片分享，你值得拥有" },
                        { name: "POCO", url: "http://www.poco.cn", icon: "", desc: "以原创图片为核心的分享社区，汇聚百万摄影与视觉爱好者" },
                        { name: "Coverr", url: "https://coverr.co", icon: "", desc: "高质量视频素材，可以作为站点背景等，不错" },
                        { name: "Wallpapers", url: "http://wallpaperswide.com", icon: "", desc: "高清壁纸下载，各种分类" },
                        { name: "Pexels", url: "https://www.pexels.com", icon: "", desc: "提供高清尺寸且品质优良的免费照片网站" },
                        { name: "Pixabay", url: "https://pixabay.com", icon: "", desc: "百万张免费高清图片，高质量可商用" },
                        { name: "StockSnap", url: "https://stocksnap.io", icon: "", desc: "超强的搜索功能，快速拥有高质量免费图片" },
                        { name: "SplitShire", url: "https://www.splitshire.com", icon: "", desc: "免费可商用的图片库，更有视频素材资源" },
                        { name: "UPSplash", url: "https://unsplash.com", icon: "", desc: "知名免费图库，免费下载高分辨率图片，可商用" },
                        { name: "PNG素材库", url: "http://pngimg.com", icon: "", desc: "最知名的PNG 素材库，各种分类，透明的 png 素材" },
                    ],
                },
                {
                    id: "picture",
                    title: "绘画制作",
                    sitelist: [
                        { name: "ArtStation", url: "https://www.artstation.com", icon: "", desc: "ArtStation是游戏，电影，媒体和娱乐领域的领先展示平台" },
                        { name: "Pixiv", url: "http://www.pixiv.net", icon: "", desc: "这里有各种各样不同风格的投稿作品，我们还会举办官方、用户企画的各种比赛" },
                        { name: "CG部落", url: "http://www.cgbolo.com", icon: "", desc: "专业的CG、插画、原画交流平台" },
                        { name: "涂鸦王国", url: "https://www.gracg.com", icon: "", desc: "绘画插画作品，中国优秀的插画师，漫画家，画家的聚集地" },
                        { name: "Grafolio", url: "https://www.grafolio.com/works/list.grfl", icon: "", desc: "韩国插画设计师交流和展示插画作品集的平台" },
                        { name: "蓝铅笔", url: "https://www.lanqb.com", icon: "", desc: "绘画学习平台，提供手绘、板绘、动漫画、插画、原画、绘画培训，零基础轻松学画画" },
                        { name: "LovePixel", url: "http://www.lovepixel.idv.tw", icon: "", desc: "台湾一个绘制像素画的大神，很厉害，很喜欢" },
                    ],
                },
                {
                    id: "read",
                    title: "资讯阅读",
                    sitelist: [
                        { name: "简书", url: "https://www.jianshu.com", icon: "", desc: "简书，没事写写自己的博客，看看别人的博客，挺好" },
                        { name: "爱范儿", url: "https://www.ifanr.com/", icon: "", desc: "爱范儿，让未来触手可及，我每天都看的互联网资讯平台" },
                        { name: "36氪", url: "https://36kr.com", icon: "", desc: "36Kr，和爱范儿一样，我每天都看的互联网资讯平台" },
                        { name: "少数派", url: "https://sspai.com", icon: "", desc: "高效工作，品质生活 - 少数派" },
                        { name: "极客公园", url: "http://www.geekpark.net", icon: "", desc: "聚焦互联网领域，跟踪最新的科技新闻动态，关注极具创新精神的科技产品" },
                        { name: "虎嗅网", url: "https://www.huxiu.com", icon: "", desc: "聚合优质的创新信息与人群，捕获精选|深度|犀利的商业科技资讯" },
                        { name: "码农周刊", url: "https://weekly.manong.io", icon: "", desc: "一份专为程序员打造的IT技术周刊，可以订阅，每周一发送，完全免费" },
                        { name: "开发者头条", url: "https://toutiao.io", icon: "", desc: "可以阅读头条新闻、分享技术文章、发布开源项目、订阅技术极客" },
                        { name: "伯乐在线", url: "http://blog.jobbole.com", icon: "", desc: "专注分享IT互联网程序员、设计、营销、互联网、IT技术、自由职业、创业、运营、管理、翻译和人力等文章" },
                        { name: "Feedly", url: "https://feedly.com", icon: "", desc: "一个订阅比较棒的订阅工具，用来订阅一些博客和资讯阅读站点，需梯子" },
                        { name: "BookSet", url: "https://bookset.me", icon: "", desc: "精品电子书免费下载，分享的免费电子书格式有Mobi/EPUB/AZW3等格式" },
                        { name: "精益制作组", url: "http://www.jebook.org", icon: "", desc: "以“精雕细琢、开卷有益”的宗旨，不断探寻制作精美电子书技术，包括Mobi/EPUB/KF8/AZW3格式" },
                        { name: "周读", url: "http://www.ireadweek.com", icon: "", desc: "提供免费电子书下载、分享，包括Mobi/EPUB/PDF/TXT格式" },
                    ],
                },
                {
                    id: "social",
                    title: "网络社交",
                    sitelist: [
                        { name: "微博", url: "https://www.weibo.com", icon: "", desc: "" },
                        { name: "贴吧", url: "https://tieba.baidu.com", icon: "", desc: "" },
                        { name: "Twitter", url: "https://www.twitter.com", icon: "", desc: "" },
                        { name: "Facebook", url: "https://www.facebook.com", icon: "", desc: "" },
                    ],
                },
                {
                    id: "shop",
                    title: "生活购物",
                    sitelist: [
                        { name: "京东", url: "https://www.jd.com", icon: "", desc: "" },
                        { name: "淘宝", url: "https://www.taobao.com", icon: "", desc: "" },
                        { name: "天猫", url: "https://www.tmall.com", icon: "", desc: "" },
                        { name: "苏宁", url: "https://www.suning.com", icon: "", desc: "" },
                        { name: "小米", url: "https://www.mi.com", icon: "", desc: "" },
                        { name: "华为", url: "https://www.vmall.com", icon: "", desc: "" },
                        { name: "当当", url: "https://www.dangdang.cn", icon: "", desc: "" },
                        { name: "美团", url: "https://www.meituan.com", icon: "", desc: "" },
                        { name: "糯米", url: "https://www.nuomi.com", icon: "", desc: "" },
                        { name: "一号店", url: "https://www.yhd.com", icon: "", desc: "" },
                        { name: "唯品会", url: "https://www.vip.com", icon: "", desc: "" },
                        { name: "蘑菇街", url: "https://www.mogujie.com", icon: "", desc: "" },
                        { name: "亚马逊", url: "https://www.amazon.cn", icon: "", desc: "" },
                        { name: "预约挂号", url: "http://www.bjguahao.gov.cn", icon: "", desc: "北京市预约挂号统一平台，挂号，医院查询等" },
                        { name: "北京人资", url: "http://www.bjrbj.gov.cn", icon: "", desc: "北京市人力资源和社会保障局" },
                        { name: "食品药品管理局", url: "http://samr.cfda.gov.cn/WS01/CL0001", icon: "", desc: "中国国家食品药品监督管理总局" },
                    ],
                },
                {
                    id: "game",
                    title: "游戏娱乐",
                    sitelist: [
                        { name: "NitRome", url: "http://www.nitrome.com", icon: "", desc: "免费玩在线Flash游戏，复古游戏，街机游戏，拼图游戏，动作游戏，技巧游戏" },
                        { name: "3DMGame", url: "https://www.3dmgame.com", icon: "", desc: "为玩家提供最新的游戏新闻、攻略、单机游戏资源、汉化资源、游戏补丁、游戏论坛等" },
                        { name: "游民星空", url: "https://www.gamersky.com", icon: "", desc: "国内单机游戏门户网站，提供特色的游戏资讯，大量游戏攻略，经验，评测文章，以及热门游戏资料专题" },
                        { name: "爱应用", url: "http://www.iapps.im", icon: "", desc: "苹果APP正版限时免费下载、手机游戏与APP攻略评测、移动互联网热点新闻资讯" },
                        { name: "最美应用", url: "http://zuimeia.com", icon: "", desc: "致力于帮助用户发掘最优质的 iPhone 和安卓应用,功能要好用,界面要好看,让精美的应用在您的手机里灼灼发光^_^" },
                        { name: "XClient", url: "https://xclient.info", icon: "", desc: "精品MAC应用分享，每天分享大量mac软件，为您提供优质的mac软件,免费软件下载服务" },
                        { name: "异次元", url: "https://www.iplaysoft.com", icon: "", desc: "专注于推荐优秀软件、APP应用和互联网资源，每篇图文评测都极其用心，并提供大量软件资源下载" },
                        { name: "远景论坛", url: "http://bbs.pcbeta.com", icon: "", desc: "远景论坛 - 微软极客社区，之前经常在这里找 Windows 资源" },
                        { name: "吾爱破解", url: "https://www.52pojie.cn", icon: "", desc: "坛致力于软件安全与病毒分析的前沿，丰富的技术版块交相辉映，由无数热衷于软件加密解密及反病毒爱好者共同维护" },
                    ],
                },
                {
                    id: "gps",
                    title: "定位出行",
                    sitelist: [
                        { name: "百度地图", url: "https://map.baidu.cn", icon: "", desc: "百度地图" },
                        { name: "Google地图", url: "https://map.google.com", icon: "", desc: "Google 地图" },
                        { name: "高德地图", url: "https://map.gaode.com", icon: "", desc: "高德地图" },
                        { name: "携程", url: "https://www.ctrip.com", icon: "", desc: "酒店预订，机票预订查询，旅游度假，商旅管理" },
                        { name: "去哪儿", url: "https://www.qunar.com", icon: "", desc: "机票查询预订，酒店预订，旅游团购，度假搜索，门票预订" },
                    ],
                },
                {
                    id: "tools",
                    title: "工具",
                    sitelist: [
                        { name: "有道翻译", url: "http://fanyi.youdao.com", icon: "", desc: "国内比较厉害的翻译工具" },
                        { name: "Google翻译", url: "https://translate.google.cn", icon: "", desc: "Google 翻译，强大的翻译工具" },
                        { name: "站长工具", url: "http://tool.chinaz.com", icon: "", desc: "各种常用的在线工具，用的最多的就是代码格式化，时间戳转换" },
                        { name: "百度搜索资源平台", url: "https://ziyuan.baidu.com/site", icon: "", desc: "提供有助于搜索引擎收录的工具、SEO建议、API接口、多端适配服务的能力等" },
                        { name: "GoogleSearchConsole", url: "https://search.google.com/search-console", icon: "", desc: "Google Search Console 提升您的网站在 Google 搜索结果中的排名" },
                        { name: "DuckDuckGo", url: "https://duckduckgo.com", icon: "", desc: "DuckDuckGo不一样的搜索引擎，保护你的隐私，不过有时候还是没Google好用" },
                    ],
                },
            ],
        };
    },

    methods: {
        // test: function() {},
    },
};
</script>

<!-- 样式 -->
<style lang="less">
#site {
    width: 100%;
    padding-bottom: 56px;
    // 头部容器
    .container {
        margin: auto;
        .site-category {
            margin-top: 16px;
            .site-title {
                .iconfont {
                    font-size: 24px;
                    color: @desc-dark;
                    margin-right: 8px;
                }
                .site-title-text {
                    color: @desc-dark;
                    font-size: 24px;
                    font-weight: 400;
                }
            }
        }
        .site-list {
            display: grid;
            grid-row-gap: 24px;
            grid-column-gap: 24px;
            margin-top: 8px;
            .site-wrapper {
                padding: 8px;
                border-radius: 4px;
                background: @bg-light;
                .card-shadow();
                &:hover {
                    .card-shadow-hover();
                }
                a {
                    display: flex;
                    text-decoration: none;
                    .site-icon {
                        flex: none;
                        width: 36px;
                        height: 36px;
                        margin: 8px;
                        border-radius: 50%;
                    }
                    .site-content {
                        flex: 1;
                        .site-name {
                            color: @title-dark;
                            font-size: 14px;
                            font-weight: 500;
                        }
                        .site-desc {
                            color: @desc-dark;
                            font-size: 12px;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            display: -webkit-box; /* 对象作为伸缩盒子模型显示 */
                            -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
                            -webkit-line-clamp: 2; /* 显示的行数 */
                            overflow: hidden; /* 隐藏超出的内容 */
                        }
                    }
                    &:hover {
                        .site-content .site-name {
                            color: @active-link;
                        }
                    }
                }
            }
        }
    }
}

@media (min-width: 1920px) {
    #site .container {
        width: 100%;
        max-width: 1600px;
        .site-list {
            grid-template-columns: repeat(5, 1fr);
        }
    }
}
@media (max-width: 1920px) {
    #site .container {
        width: 95%;
        max-width: 1200px;
        .site-list {
            grid-template-columns: repeat(4, 1fr);
        }
    }
}
@media (max-width: 1200px) {
    #site .container {
        width: 92%;
        max-width: 768px;
        .site-list {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
@media (max-width: 960px) {
    #site .container {
        width: 95%;
        .site-list {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media (max-width: 768px) {
    #site .container {
        width: 92%;
        .site-list {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
