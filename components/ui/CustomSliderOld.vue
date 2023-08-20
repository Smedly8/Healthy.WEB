<template>
    <div class="slider">
        <div class="slider__arrowWrap">
            <div class="slider__arrowWrap-circle">
                <img src="@/assets/icons/arrow.svg" alt="">
            </div>
        </div>
        <div class="slider__wrap">
            <slider :autoplay="false" v-model="sliderIndex">
                <slider-item  v-for="(slide, idx) in list" :key="idx">
                    <img :src="slide.img" alt="">
                </slider-item>
            </slider>
        </div>
        <div class="slider__arrowWrap slider__arrowWrap--right">
            <div class="slider__arrowWrap-circle">
                <img src="@/assets/icons/arrow.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import {Slider, SliderItem} from 'vue-easy-slider'
export default {
    components:{
        Slider,
        SliderItem,
    }, 
    data() {
        return{
            sliderIndex: 1,
            list: [
                { backgroundColor: '#3f51b5', width: '45%', height: '100%' },
                { backgroundColor: '#eee', width: '45%', height: '100%' },
                // { backgroundColor: '#f44336', width: '45%', height: '100%' },
            ],
        }
    },
    created() {
        this.list.map((el, idx) => {
            el.img = this.slides[idx]
        })
    },
    props: {
        slides: Array,
    }
}
</script>
<style lang="scss">
.slider{
    display: flex;
    justify-content: space-between;
    &__arrowWrap{
        width: auto;
        flex-grow: 1;
        width: 100%;
        @include flexCenter;
        justify-content: flex-start;
        &--right{
            justify-content: flex-end;
            .slider__arrowWrap-circle{
                & > img{
                    transform: rotate(180deg);
                }
            }
        }
        &-circle{
            width: 60px;
            height: 60px;
            border: 2px solid var(--darkGray);
            border-radius: 100px;
            @include flexCenter;
            & > img{
                width: 22px;
            }
        }
    }
    &__wrap{
        flex-shrink: 0;
        width: 740px;
        overflow: hidden;
        &_slides{
            // display: flex;
            // justify-content: space-between;
            // gap: 20px;
            &-slide{
                
            }
        }
    }
}
</style>