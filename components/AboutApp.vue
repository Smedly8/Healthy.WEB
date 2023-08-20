<template>
    <section class="about">
        
        <div class="about__wrap">
            <div class="about__wrap_decorTitle">
                <h2>About</h2>
                <p>The Basics Of Healthy Food</p>
            </div>
            <p class="about__wrap_text">
                In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
            </p>
            <div class="about__wrap_slider">
                <!-- <custom-slider :slides="images"/> -->
                <div class="about__wrap_slider-arrow">
                    <div @click="swiper.slidePrev()" class="about__wrap_slider-arrow-imgWrap">
                        <img class="about__wrap_slider-arrow-img" src="@/assets/arrow.svg" style="transform: rotate(-90deg);" alt="">
                    </div>
                </div>
                
                <swiper
                    :slides-per-view="2"
                    :space-between="20"
                    :loop="true"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    class="slider__wrap_slide"
                    >
                    <swiper-slide
                        v-for="image in images"
                        :key="image"
                        class="test"
                    >
                        <img
                        :src="image"
                        class="about__wrap_image"
                        width="600"
                        height="400"
                        blank="true"
                        style="object-fit: contain;"
                        >
                    </swiper-slide>
                </swiper>
                <div  class="about__wrap_slider-arrow">
                    <div @click="swiper.slideNext()" class="about__wrap_slider-arrow-imgWrap">
                        <img class="about__wrap_slider-arrow-img" style="transform: rotate(90deg);" src="@/assets/arrow.svg" alt="">
                    </div>
                </div>
                <!-- <SliderApp v-if="isShow" :slides="images"/> -->
            </div>
        </div>
        
    </section>
</template>
<script>
import CustomSlider from '@/components/ui/CustomSlider.vue'

import SliderApp from '@/components/ui/SliderApp.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    components: {
        CustomSlider,
        SliderApp,
        Swiper, 
        SwiperSlide,
    },
    data() {
        return{
            images: [
                '/images/slider/1.png',
                '/images/slider/2.png',
                '/images/slider/1.png',
                '/images/slider/2.png',
            ],
            isShow: false,
            swiper: null,
        }
    },
    methods: {
        onSwiper(swiper){
            this.swiper = swiper
        }
    },
    mounted(){
        setTimeout(() => {
            this.isShow = true
        }, 1000)
    }
}
</script>
<style lang="scss">
    .about{
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        &__wrap{
            width: var(--width);
            background: var(--lightBlack);
            padding: 105px 0 90px;
            display: flex;
            flex-direction: column;
            align-items: center;
            &_decorTitle{
                @include decorTitle;
                width: 100%; 
            }
            &_text{
                @include baseText(16px);
                margin-top: 30px;
                color: var(--gray);
                width: 740px;
                text-align: center;
            }
            &_image{
                height: 400px;
            }
            &_slider{
                margin-top: 40px;
                width: 1000px;
                display: flex;
                &-arrow{
                    width: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    &-imgWrap{
                        width: 60px;
                        height: 60px;
                        border-radius: 100px;
                        border: 2px solid #303030;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        &:hover{
                                & > img{
                                    opacity: 0.7;
                                }
                            }
                        & > img{
                            width: 14px;
                            filter: invert(1);
                            opacity: 0.2;
                            transition: .2s;
                        }
                    }
                }
            }
        }
    }
    .swiper{
        width: 800px;
    }
    @media screen and (max-width: $mediaQuery1) {
        .about{
            &__wrap{
                width: 100%;
                margin-left: 40px;
                margin-right: 40px;
                &_slider{
                    width: 97%;
                }
                &_image{
                    height: 300px;
                }
            }
        }
        .swiper{
            width: 72vw;
        }   
    }
    @media screen and (max-width: $mediaQuery2) {
        .about{
            &__wrap{
                &_text{
                    width: 80vw;
                }
            }
        }
    }
</style>