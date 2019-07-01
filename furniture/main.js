import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@C/nav'
import Index from '@P/index'
import App from '@P/app'
import Carousel from '@C/carousel.vue'
import Css from './src/static/css/common.css'
import Product from '@P/product'
import RealScene from '@P/realScene'
import Designer from '@P/designer'

Vue.use(Router)
const routes = [
    {path:'/',component:Index},
    {path:'/product',component:Product},
    {path:'/realScene',component:RealScene},
    {path:'/designer',component:Designer}
]
// var indexVue = {
//     template:Nav
// }
const router = new Router({routes})
var vm = new Vue({
    el:"#app",
    render:c => c(App),
    router,
})