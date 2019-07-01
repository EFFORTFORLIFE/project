<template>
    <div id="product">
        <Carousel></Carousel>
        <div id="productList">
            <div class="productItem" v-for="item in productList" :key="item.detail">
                <div>
                    <img :src="item.pic"/>
                    <span></span>
                </div>
                <div class="price">{{item.price}}</div>
                <span>{{item.detail}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import Carousel from '@C/carousel';
import Mock from 'mockjs';
export default {
    name:'product',
    data(){
        return Mock.mock({
            "productList|8":[
                {
                    "pic|+1":[
                        '../static/imgs/product/1.jpg',
                        '../static/imgs/product/2.jpg',
                        '../static/imgs/product/3.jpg',
                        '../static/imgs/product/4.jpg',
                        '../static/imgs/product/5.jpg',
                        '../static/imgs/product/6.jpg'
                    ],
                    "price|+1":['￥34','￥645','￥76','￥8','￥98','￥809'],
                    detail:"@csentence(30)"
                }
            ]
        })
    },
    components:{
        Carousel
    }
}
</script>

<style scoped lang="scss">
#productList{
    display:flex;
    flex-wrap:wrap;
    min-width:1200px;
    margin-top:20px;
}
.productItem  div:nth-of-type(1){
    position:relative;
    width:210px;
    height: 210px;
        margin:0 auto;
}
.productItem{
    width:25%;
    padding:20px;
    box-sizing: border-box;
    img{
        width:100%;
        height:100%;
        display:block;
    }
    div span::after{
        content:"新品";
        width:40px;
        height:40px;
        line-height: 40px;
        border-radius: 20px;
        background:chartreuse;
        color:#fff;
        position: absolute;
        top:-24px;
        right:-28px;
        font-size:15px;
        text-align:center;
    }
    .price{
        position:relative;
        margin-top:20px;
        color:#e50d34;
        font-size:20px;
        padding:0 10px;
    }
    span{
        height: 30px;
        line-height: 30px;
        color:#505050;
        font-size:14px;
        padding:0 10px;
    }
}
</style>
