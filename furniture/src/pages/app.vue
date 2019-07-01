<template>
    <div id="app">
        <Nav></Nav>
        <router-view></router-view>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Nav from "../components/nav.vue";
import Bottom from "../components/bottom.vue"
export default {
    name:'app',
    components:{
        Nav,
        Bottom
    }
}
</script>

<style>

</style>
