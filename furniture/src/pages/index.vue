<template>
  <div id="indexPage">
    <Carousel></Carousel>
    <div class="details">
      <div>家具产品</div>
      <ul>
        <li v-for="item in furnitures" :key="item">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <div id="furList">
        <div class="listItem" v-for="item in furnituresItem" :key="item.pic">
            <img :src="item.pic">
            <span>{{item.price}}</span>
            <div>{{item.detail}}</div>
        </div>
    </div>
    <div class="moreDetail">
        <div class="dynamic">
            <div>
                <span>行业动态</span>
                <span>更多</span>
            </div>
            <div class="dynamicList">
                <div class="dynamicItem" v-for="item in dynamicList" :key="item.dynamicTitle">
                    <div>
                      <img :src="item.pic">
                    </div>
                    <div class="dynamicTitle">
                      <div>{{item.dynamicTitle}}</div>
                      <span>{{item.detail}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="teams">
            <div>
                <span>设计师团队</span>
                <span>更多</span>
            </div>
            <div class="designers">
              <div class="designersItem" v-for="item in designers" :key="item.pic">
                <img :src="item.pic">
                <span>{{item.name}}</span>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/carousel.vue";
import Mock from "mockjs";
export default {
  name: "indexPage",
  data() {
    return Mock.mock({
      furnitures: ["餐厅家具", "客厅家具", "书房家具", "儿童家具", "卧室家具"],
      "furnituresItem|8": [
        {
          "pic|+1": ["../static/imgs/furniturePics/1.jpg",
           "../static/imgs/furniturePics/2.jpg",
           "../static/imgs/furniturePics/3.jpg",
           "../static/imgs/furniturePics/4.jpg",
           "../static/imgs/furniturePics/5.jpg",
           "../static/imgs/furniturePics/6.jpg",
           "../static/imgs/furniturePics/7.jpg",
           "../static/imgs/furniturePics/8.jpg",],
           "price|+1":['￥234','￥567','￥676','￥89','￥333'],
          detail: "@csentence(30)"
        },
      ],
      "dynamicList|3":[
        {
          "pic|+1":[
              "../static/imgs/furniturePics/5.jpg",
              "../static/imgs/furniturePics/6.jpg",
              "../static/imgs/furniturePics/7.jpg"
          ],
          dynamicTitle:"@csentence(10)",
          detail:"@csentence(100)"
        }
      ],
      designers:[
        {pic:'../static/imgs/designer/1.png',name:"创意设计师(Liang.Yang)"},
        {pic:'../static/imgs/designer/2.png',name:"首席设计师(Deanay.Wang)"},
        {pic:'../static/imgs/designer/3.png',name:"创意设计师(Liang.Yang)"},
        {pic:'../static/imgs/designer/4.png',name:"高级设计师(Linso.Liu)"}
      ]
    });
  },
  components: {
    Carousel
  }
};
</script>

<style scoped lang="scss">
// .dynamicItem div:nth-of-type(1){
//   width:200px !important;
//   height:130px !important;
// }
.dynamicItem{
  padding:10px 0;
  border-bottom:dashed 1px #ccc;
  display:flex;
  height:130px;
  img{
    width:200px;
    height:130px;
  }
  .dynamicTitle{
    padding-left:20px;
    div{
      font:#333;
      font-size:4px;
      font-weight: bold;
      height: 35px;
      line-height: 35px;
    }
    span{
      font:#555;
      font-size:12px;
      
    }
  }
} 
.moreDetail{
    display:flex;
}
.dynamic,.teams{
    width:50%;
    margin:0 20px;
    position:relative;
    &>div:nth-of-type(1){
        border-bottom: 2px solid #BD1337;
    }
    div span:nth-of-type(2){
        position: absolute;
        right:0px;
        top:0px;
        background:#BD1337;
        padding:0 18px;
        color:white;
        font-size:12px;
        height: 22px;
        line-height: 22px;
    }
}
#furList{
    display:flex;
    justify-content: space-around;
    padding:0 10px;
    margin-bottom:20px;
    flex-wrap: wrap;
    .listItem{
        width:24%;
        box-shadow: 5px 5px 5px #ccc;
        border-radius: 5px;
        margin-bottom:10px;
        img{
            width:100%;
            border-radius: 5px;
        }
        span{
            color:red;
        }
        div{
            font-size:14px;
            color:#3e3e3e;
        }
    }
}
#indexPage {
  min-width: 1200px;
}
.details {
  text-align: center;
  padding-top: 39px;
  div {
    font-size: 20px;
    color: #333;
  }
  ul {
    height: 83px;
    line-height: 83px;
    display: flex;
    justify-content: space-around;
    padding: 0 200px;
    a {
      color: #555;
    }
  }
  li {
    font-size: 14px;
  }
}
.designers{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between
}
.designersItem{
  width:49%;
  box-sizing: border-box;
  margin-top:10px;
  background:#f3f2f0;
  padding:5px;
  img{
    width:100%;
  }
  span{
    display:block;
    font-size:14px;
    line-height: 40px;
    color:#555;
    text-align:center;
  }
}
</style>
