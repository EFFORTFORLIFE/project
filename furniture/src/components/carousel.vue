<template>
    <div id="carousel">
        <a href="#" v-for="item in carouselPics" :key="item">
            <img :src="item">
        </a>
    </div>
</template>

<script>
export default {
    name:'carousel',
    data(){
        return{
            carouselPics:['../static/imgs/carousel1.png','../static/imgs/carousel2.png']
        }
    },
    mounted(){
    }
}
</script>

<style scoped lang="scss">
#carousel{
    min-width:1200px;
    height: 400px;
    overflow: hidden;
}
</style>
