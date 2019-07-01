<template>
<div id="navi">
    <img src="../static/imgs/logo.png">
    <ul>
        <li v-for="item in navList" :key="item.label"><a :href="item.value">{{item.label}}</a></li>
    </ul>
</div>
</template>

<script>
export default {
    name:'navi',
    data(){
        return{
            navList:[{label:'首页',value:'#/'},
            {label:'家具产品',value:'#/product'},
            {label:'实景客户',value:'#/realScene'},
            {label:'设计团队',value:'#/designer'},
            {label:'家具展厅',value:'#/'},
            {label:'家具定制',value:'#/'},
            {label:'关于我们',value:'#/'}]
        }
    }
}
</script>
<style scoped lang="scss">
#navi{
    position:relative;
    min-width:1200px;
    display: flex;
    align-items: center;
    height: 100px;
    img{
        width:211px;
        height:93px;
        position: absolute;
        left: 36px;
    }
    ul{
        position:absolute;
        right:10px;
        li{
            width:80px;
            font:18px;
            text-align: center;
        }
    }
}
</style>
