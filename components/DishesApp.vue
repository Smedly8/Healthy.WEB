<template>
    <section class="dish">
        <div class="dish__wrap">
            <decor-title title="dishes" text="Dish Of The Day"/>
            <ul class="dish__wrap_cards" ref="animationItem">
                <div v-for="(card, idx) in cards" :key="idx" >
                    <li class="dish__wrap_cards-card">
                        <div class="dish__wrap_cards-card-imgWrap">
                            <img :src="card.img" class="dish__wrap_cards-card-img">
                        </div>
                        <div class="dish__wrap_cards-card-textWrap">
                            <h2 class="dish__wrap_cards-card-textWrap-title">Featured Meal</h2>
                            <p class="dish__wrap_cards-card-textWrap-subtitle">Served with french fries + drink</p>
                            <p class="dish__wrap_cards-card-textWrap-text">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
                            <div class="dish__wrap_cards-card-textWrap-bottomRow">
                                <div class="dish__wrap_cards-card-textWrap-bottomRow-starsWrap">
                                    <img src="@/assets/stars/full.png" alt="">
                                    <img src="@/assets/stars/full.png" alt="">
                                    <img src="@/assets/stars/full.png" alt="">
                                    <img src="@/assets/stars/half.png" alt="">
                                    <img src="@/assets/stars/empty.png" alt="">
                                </div>
                                <p class="dish__wrap_cards-card-textWrap-bottomRow-rating">12</p>
                                <button class="dish__wrap_cards-card-textWrap-bottomRow-button">
                                    order
                                </button>
                            </div>
                        </div>
                    </li>
                </div>
            </ul>
            <!-- <slider-app :slides="images"/> -->
        </div>
    </section>
</template>
<script>
import SliderApp from '@/components/ui/SliderApp.vue'
import DecorTitle from '@/components/ui/DecorTitle.vue'
import AnimationScript from '@/components/script/AnimationScript.vue'
export default {
    extends: AnimationScript,
    components: {
        SliderApp,
        DecorTitle,
    },
    data(){
        return{
            images: ['/images/slider/1.png'],
            cards: [
                {
                    title: "Pick meals",
                    text: "Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.",
                    img: '/images/dishes/1.png',
                },
                {
                    title: "Choose how often",
                    text: "Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!",
                    img: '/images/dishes/2.png',
                },
                {
                    title: "fast deliveries",
                    text: "Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.",
                    img: '/images/dishes/3.png',
                },
                {
                    title: "tasty meals",
                    text: "Gobble makes cooking fast, so you have more time to unwind and be with family.",
                    img: '/images/dishes/4.png',
                },
                {
                    title: "tasty meals",
                    text: "Gobble makes cooking fast, so you have more time to unwind and be with family.",
                    img: '/images/dishes/5.png',
                },
                {
                    title: "tasty meals",
                    text: "Gobble makes cooking fast, so you have more time to unwind and be with family.",
                    img: '/images/dishes/6.png',
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    $transitionTime: 0.3s;
    .dish{
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        &__wrap{
            width: var(--width);
            padding: 105px 0 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            &_decorTitle{
                @include decorTitle;
                width: 100%; 
            }
            &_cards{
                display: flex;
                flex-wrap: wrap;
                margin-top: 60px;
                justify-content: space-between;
                width: 100%;
                &-card{
                    border-radius: 6px;
                    background: var(--lightBlack);
                    width: 350px;
                    justify-content: space-between;
                    transition: background .3s;
                    margin-bottom: 30px;
                    overflow: hidden;
                    &:hover{
                        .dish__wrap_cards-card-textWrap-bottomRow-starsWrap{
                            filter: none;
                            opacity: 1;
                        }
                        .dish__wrap_cards-card-textWrap-bottomRow-button{
                            @include smallButton;
                        }
                        .dish__wrap_cards-card-img{
                            transform: scale(1.03);
                        }
                    }
                    &-imgWrap{
                        overflow: hidden;
                    }
                    &-img{
                        height: 260px;
                        width: 100%;
                        object-fit: cover;
                        transition: $transitionTime ease;
                    }
                    &-textWrap{
                        padding: 20px 30px;
                        &-title{
                            @include baseText(32px)
                        }
                        &-subtitle{
                            @include grayText(12px);
                            color: #A4A8B2;
                            margin-top: 4px;
                        }
                        &-text{
                            @include grayText(12px); 
                            margin-top: 20px;
                        }
                        &-bottomRow{
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            margin-top: 20px;
                            &-starsWrap{
                                display: flex;
                                filter: grayscale(100%);
                                opacity: 0.4;
                                transition: opacity $transitionTime, filter $transitionTime;
                                
                                & > img{
                                    margin-right: 5px;
                                }
                            }
                            &-rating{
                                @include baseText(12px);
                                font-weight: 700;
                                color: #B3B3B3;
                            }
                            &-button{
                                @include smallButton;
                                width: 100px;
                                height: 40px;
                                font-size: 10px;
                                text-transform: uppercase;
                                transition: $transitionTime;
                                background: transparent;
                                color: gray;
                                border: 1px solid gray;
                            }
                        }
                    }
                    
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .dish{
            &__wrap{
                &_cards{
                    // display: grid;
                    justify-content: center;
                    gap: 24px;
                    padding: 0 40px;
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .dish{
            &__wrap{
                padding-top: 16vw;
                &_cards{
                    align-items: center;
                    flex-direction: column;
                    padding: 0;
                    &-card{
                        width: 90vw;
                    }
                }
            }
        }
    }
</style>