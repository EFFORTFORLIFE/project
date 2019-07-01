<template>
    <div id="realScene">
        <div class="introduce">
            <div>{{introduce.title}}</div>
            <div>{{introduce.detail}}</div>
        </div>
        <div class="carousel1" v-for="item in carouselList" :key="item.title">
            <div>
                <img :src="item.pic">
            </div>
            <div class="title">{{item.title}}</div>
            <div class="detail">{{item.detail}}</div>
        </div>
    </div>
</template>

<script>
import Mock from 'mockjs'
export default {
    name:'realScene',
    data(){
        return Mock.mock({
            introduce:{
                title:"@ctitle(10)",
                detail:"@csentence(180)"
            },
            "carouselList|4":[
                {
                    "pic|+1":['../static/imgs/realScene/1.png','../static/imgs/realScene/2.png','../static/imgs/realScene/3.png','../static/imgs/realScene/4.png'],
                    title:"@ctitle(4)",
                    detail:"@cword(6)"
                }
            ]
        })
    }
}
</script>

<style scoped lang="scss">
#realScene{
    text-align:center;
    min-width:1200px;
    height: auto;
}
.introduce{
    padding:0 160px;
    border-bottom:60px solid #f9f9f9;
}
.introduce div:nth-of-type(1){
    font-size:20px;
    color:#1c1c1c;
    line-height:60px;
    height:60px;
}
.introduce div:nth-of-type(2){
    font-size:14px;
    color:#323232;
    line-height: 30px;
}
.carousel1{
    border-bottom:60px solid #f9f9f9;
    padding-top:40px;
    .title{
        font-size:20px;
        color:#1c1c1c;
        height: 40px;
        line-height: 40px;
    }
    .detail{
        font-size:16px;
        color:#616161;
        height: 30px;
        line-height: 30px;
    }
    img{
        width:920px;
        height: 400px;
    }
}
</style>
