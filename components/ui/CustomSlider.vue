<template>
    <div class="slider">
        <!-- <div class="slider__arrowWrap">
            <div @click="$refs.agile.goToPrev()" class="slider__arrowWrap-circle">
                <img src="@/assets/icons/arrow.svg" alt="">
            </div>
        </div>
        <div class="slider__wrap">
            <agile 
                ref="agile" 
                class="slider__agile" 
                :slidesToShow="slidesToShow"
                :navButtons="false" 
                :dots="false"
            >
                <div class="slider__agile_slide" v-for="(slide, idx) in slides" :key="idx">
                    <img :src="slide" alt="">
                </div>
            </agile>
        </div>
        <div class="slider__arrowWrap slider__arrowWrap--right">
            <div @click="$refs.agile.goToNext()" class="slider__arrowWrap-circle">
                <img src="@/assets/icons/arrow.svg" alt="">
            </div>
        </div> -->
    </div>
</template>
<script>
// import { VueAgile } from 'vue-agile'
export default {
    components:{
        // agile: VueAgile,
    }, 
    data() {
        return{
            sliderIndex: 1,
            slidesToShow: 2,
            list: [
                { backgroundColor: '#3f51b5', width: '45%', height: '100%' },
                { backgroundColor: '#eee', width: '45%', height: '100%' },
                { backgroundColor: '#f44336', width: '45%', height: '100%' },
            ],
        }
    },
    created() {
        this.list.map((el, idx) => {
            el.img = this.slides[idx]
        })
    },
    mounted() {
        if(window.innerWidth < 800){
            this.slidesToShow = 1
        }
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
            transition: .2s;
            cursor: pointer;
            &:hover{
                background: var(--mainColor);
                & > img{
                    filter: brightness(0%);
                }
            }
            & > img{
                width: 22px;
            }
        }
    }
    &__wrap{
        flex-shrink: 0;
        width: 740px;
        overflow: hidden;
    }
    &__agile{
        &_slide{
            user-select: none;
            & > img{
                user-select: none;
            }
        }
    }
}
</style>