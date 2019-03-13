<!-- 组件模板 -->
<template>
    <div id="nav">
        <ul>
            <li class="nav-item">
                <router-link to="/">导航</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/About">关于</router-link>
            </li>
        </ul>
    </div>
</template>

<!-- 脚本 -->
<script>

</script>

<!-- 样式 -->
<style lang="less">
#nav {
    height: 48px;
    line-height: 48px;
    color: @text-light;
    background: @top-nav-bg;
    ul {
        margin: auto;
        list-style: none;
        li {
            float: left;
            a {
                padding: 0px 8px;
                text-decoration: none;
            }
        }
    }
}

@media (min-width: 960px) {
    #nav ul {
        width: 100%;
    }
}

@media (min-width: 1200px) {
    #nav ul {
        width: 90%;
    }
}

@media (min-width: 1620px) {
    #nav ul {
        width: 1600px;
    }
}
</style>
