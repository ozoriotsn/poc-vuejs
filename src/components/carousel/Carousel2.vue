<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide><img src="https://placeimg.com/200/200/any?1"></swiper-slide>
            <swiper-slide><img src="https://placeimg.com/200/200/any?2"></swiper-slide>
            <swiper-slide><img src="https://placeimg.com/200/200/any?3"></swiper-slide>
            <swiper-slide><img src="https://placeimg.com/200/200/any?4"></swiper-slide>
            <swiper-slide><img src="https://placeimg.com/200/200/any?5"></swiper-slide>
            <swiper-slide><img src="https://placeimg.com/200/200/any?6"></swiper-slide>
            <swiper-slide><img src="https://placeimg.com/200/200/any?7"></swiper-slide>
            <swiper-slide><img src="https://placeimg.com/200/200/any?8"></swiper-slide>
            <swiper-slide><img src="https://placeimg.com/200/200/any?9"></swiper-slide>
            <swiper-slide><img src="https://placeimg.com/200/200/any?10"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

    </div>

</template>

<script>

    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "Carousel2",
        components:{
            swiper,
            swiperSlide
        },

        data(){
            return{

                    swiperOption: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        slidesPerGroup: 1,
                        loop: true,
                        loopFillGroupWithBlank: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }
                    }
                }


        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style scoped>
    @import '../../../node_modules/swiper/dist/css/swiper.css';

</style>