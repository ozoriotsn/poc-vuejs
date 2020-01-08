<template>

    <div>
        <h2>FreeScroll</h2>
        <flickity  class="carousel js-flickity" ref="flickity" :options="flickityOptions">
            <div class="carousel-cell"><img src="https://placeimg.com/200/200/any?1"></div>
            <div class="carousel-cell"><img src="https://placeimg.com/200/200/any?2"></div>
            <div class="carousel-cell"><img src="https://placeimg.com/200/200/any?3"></div>
            <div class="carousel-cell"><img src="https://placeimg.com/200/200/any?4"></div>
            <div class="carousel-cell"><img src="https://placeimg.com/200/200/any?5"></div>
        </flickity>

        <hr>
        <br>
        <Carousel2></Carousel2>
    </div>

</template>

<script>
    import Flickity from 'vue-flickity'
    import Carousel2 from "./Carousel2";
    export default {
        name: "Carousel",
        components:{
            Carousel2,
            Flickity
        },

        data(){
            return{
                flickityOptions: {
                    initialIndex: 1,
                    prevNextButtons: true,
                    pageDots: true,
                    wrapAround: true,
                    imagesLoaded: true,
                    percentPosition: false
                    // freeScroll: true,
                    // groupCells: true
                }
            }
        }
    }
</script>

<style scoped>

    /* external css: flickity.css */

    * { box-sizing: border-box; }

    body { font-family: sans-serif; }

    .carousel {
        background: #EEE;
    }

    .carousel img {
        display: block;
        height: 200px;
    }

    .carousel-cell {
        width: 66%;
        height: 200px;
        margin-right: 10px;
        background: #8C8;
        border-radius: 5px;
        counter-increment: gallery-cell;
    }

    /* cell number */
    .carousel-cell:before {
        display: block;
        text-align: center;
        content: counter(gallery-cell);
        line-height: 200px;
        font-size: 80px;
        color: white;
    }


</style>