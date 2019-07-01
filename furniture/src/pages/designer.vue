<template>
    <div id="designer">
        <div id="title">
            <div>设计团队</div>
            <div>国际顶级设计师</div>
        </div>
        <div class="designerList">
            <div class="designerItem" v-for="item in designerList" :key="item.detail">
                <img :src="item.pic">
                <div class="name">{{item.name}}</div>
                <div class="detail">{{item.detail}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Mock from "mockjs"
export default {
    name:'designer',
    data(){
        return Mock.mock({
            "designerList|16":[
                {
                    "pic|+1":['../static/imgs/designer/1.jpg',
                    '../static/imgs/designer/2.jpg',
                    '../static/imgs/designer/3.jpg',
                    '../static/imgs/designer/4.jpg'],
                    "name|+1":[
                        '王仲谋/创始人',
                        '露露/市场总监',
                        '凯文/渠道总监',
                        '穆林苑/客服总监',
                    ],
                    detail:"@cword(35)"
                }
            ]
        })
    }
}
</script>

<style scoped lang="scss">
#designer{
    background:#f6f6f6;
    min-width:1200px;
}
#title{
    text-align: center;
    min-width:1200px;
}
#title div:nth-of-type(1){
    padding-bottom:10px;
    line-height: 75px;
    display:inline;
    color:#000;
    font-size:26px;
    border-bottom:2px #000 solid;
}
#title div:nth-of-type(2){
    color:#4d4d4d;
    font-size:16px ;
}
.designerList{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-width:1200px;
    margin:20px 0;
}
.designerItem{
    width:25%;
    padding:10px;
    box-sizing:border-box;
    text-align:center;
    background:#fff;
    margin-bottom:10px;
    .name{
        font-size:18px;
        color:#4d4d4d;
        line-height:36px;
    }
    .detail{
        font-size:14px;
        color:#7a7a7a;
        line-height: 26px;
        margin:0 10px;
    }
}
</style>
