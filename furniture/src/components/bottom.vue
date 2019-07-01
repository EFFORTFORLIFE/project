<template>
    <div id="bottom">
        <ul>
            <li class="bottomItem" v-for="item in bottomList" :key="item">{{item}}<span></span></li>
            <div class="copyright">&copy;Copyright this website is belongs to linxiaosheng only</div>
        </ul>
    </div>
</template>

<script>
export default {
    name:'bottom',
    data(){
        return{
            bottomList:['关于我们','经典案例',' 新闻动态',' 服务项目','咨询团队','联系我们']
        }
    }
}
</script>

<style scoped lang="scss">
#bottom{
    min-width:1200px;
    height: 125px;
    display:flex;
    align-items: center;
    text-align: center;
    ul{
        width:100%;
        li{
            position:relative;
            width:70px;
            text-align:center;
            font-size:14px;
            color:#5a5a5a;
        }
        span::after{
            content:"";
            width:1px;
            height:14px;
            line-height: 14px;
            background:#5a5a5a;
            position:absolute;
            right:0px;
            top:55%;
            transform: translateY(-50%);
        }
    }
}
.copyright{
    color:#5a5a5a;
    font-size:14px;
}
.bottomItem:nth-last-of-type(1){
    span{
        display:none;
    }
}
</style>
