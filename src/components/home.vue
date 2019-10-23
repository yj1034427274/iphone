<template>
    <div>
        <router-view />
        <div class="fonter">
            <ul>
                <li>
                    <router-link   to="/">首页</router-link>
                </li>
                <li>
                    <router-link   to="/classify">分类</router-link>
                </li>
                <li>
                    <router-link   to="/shopcar">购物车</router-link>
                </li>
                <li>
                    <router-link   to="/oneuser">个人</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>