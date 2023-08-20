<template>
    <section class="work">
        <div class="work__wrap">
            <decor-title title="work" text="how it works"/>
            <!-- <div class="work__wrap_decorTitle" :class="{'work__wrap_decorTitle--animation' : animationDecor}">
                <h2>work</h2>
                <p>how it works</p>
                <span></span>
            </div> -->
            <ul class="work__wrap_cards" ref="animationItem">
                <div v-for="(card, idx) in cards" class="work__wrap_cards-cardWrap"  :key="idx">
                    <li  class="work__wrap_cards-card">
                        <h2>{{ card.title }}</h2>
                        <span></span>
                        <p>{{ card.text }}</p>
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
                    text: "Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options."
                },
                {
                    title: "Choose how often",
                    text: "Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!"
                },
                {
                    title: "fast deliveries",
                    text: "Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box."
                },
                {
                    title: "tasty meals",
                    text: "Gobble makes cooking fast, so you have more time to unwind and be with family."
                },
            ],
            
        }
    },
    mounted(){
         console.log('foo', this.foo)
    }
}
</script>
<style lang="scss">
    .work{
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        &__wrap{
            width: var(--width);
            padding: 165px 0 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            &_decorTitle{
                
            }
            &_cards{
                display: flex;
                margin-top: 60px;
                justify-content: space-between;
                width: 100%;
                &-card{
                    border-radius: 6px;
                    padding: 24px;
                    background: var(--lightBlack);
                    width: 255px;
                    height: 205px;
                    justify-content: space-between;
                    transition: background .3s;
                    &:hover{
                        background: var(--mainColor);
                        & > h2, p {
                            color: black;
                            
                        }
                        & > span{
                            
                            background: black;
                        }
                    }
                    & > h2{
                        @include baseText(22px);
                        line-height: 1em;
                        text-transform: capitalize;
                        transition: color .3s;
                        // color: var(--black);
                    }
                    & > span{
                        display: block; 
                        width: 56px;
                        height: 2px;
                        background: var(--mainColor);
                        margin-top: 18px;
                        transition: background .3s;
                    }
                    & > p{
                        @include grayText(13px);
                        margin-top: 24px;
                        transition: color .3s;
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .work{
            &__wrap{
                &_cards{
                    display: grid;
                    grid-template-columns: repeat(2, auto);
                    justify-content: space-around;
                    justify-content: center;
                    gap: 40px;
                    &-card{
                        margin: 0 auto;
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .work{
            &__wrap{
                &_cards{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10vw;
                    &-card{
                        width: 90vw;
                        & > p{
                            font-size: 4vw;
                        }
                    }
                }
            }
        }
    }
</style>