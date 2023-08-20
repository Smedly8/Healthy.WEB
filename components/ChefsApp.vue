<template>
    <section class="chefs">
        <div class="chefs__wrap">
            <decor-title title="CHEFS" text="This month's chefs"/>
            <ul ref="animationItem" class="chefs__wrap_cards">
                <div v-for="(card, idx) in cards" :key="idx" class="chefs__wrap_cards-cardWrap">
                    <li  class="chefs__wrap_cards-card">
                        <div class="chefs__wrap_cards-card-header">
                            <img :src="card.avatar" alt="" class="chefs__wrap_cards-card-header-img">
                            <div class="chefs__wrap_cards-card-header-textWrap">
                                <h2>
                                    {{card.title}}
                                </h2>
                                <p>
                                    {{ card.subtitle }}
                                </p>
                            </div>
                        </div>
                        <div class="chefs__wrap_cards-card-gallery">
                            <img v-for="image in card.images" :key="image.name" :src="image" alt="" class="chefs__wrap_cards-card-gallery-img">
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
                    title: "Gregory Flores",
                    subtitle: "Chef of the cold",
                    avatar: '/images/chefs/1.png',
                    images: [ '/images/chefs/gallery/1.png', '/images/chefs/gallery/2.png', '/images/chefs/gallery/3.png']
                },
                {
                    title: "Annette Cooper",
                    subtitle: "Chef of the hot",
                    avatar: '/images/chefs/2.png',
                    images: [ '/images/chefs/gallery/4.png', '/images/chefs/gallery/5.png', '/images/chefs/gallery/6.png']
                },
                {
                    title: "Greg Fox",
                    subtitle: "Сhef macro kitchen",
                    avatar: '/images/chefs/3.png',
                    images: [ '/images/chefs/gallery/7.png', '/images/chefs/gallery/8.png', '/images/chefs/gallery/9.png']
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    $transitionTime: 0.3s;
    .chefs{
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        &__wrap{
            width: var(--width);
            padding: 50px 0 90px;
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
                    width: 350px;
                    transition: background .3s;
                    &-header{
                        display: flex;
                        &-img{
                            height: 65px;
                            width: 65px;
                            object-fit: cover;
                        }
                        &-textWrap{
                            display: flex;
                            flex-direction: column;
                            margin-left: 20px;
                            & > h2{
                                @include baseText(18px);
                                color: white;
                            }
                            & > p{
                                @include baseText(12px);
                                color: var(--gray);
                                margin-top: 5px;
                            }
                        }
                    }
                    &-gallery{
                        display: flex;
                        justify-content: space-between;
                        margin-top: 24px;
                        &-img{
                            height: 65px;
                        }
                    }
                    
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .chefs{
            &__wrap{
                &_cards{
                    flex-direction: column;
                    align-items: center;
                    display: grid;
                    grid-template-columns: repeat(2, auto);
                    justify-content: center;
                    gap: 40px;
                    // width: var(--width);
                    &-cardWrap:nth-child(3){
                        grid-column-start: 1;
                        grid-column-end: 3;
                        .chefs__wrap_cards-card{
                            margin: auto;
                        }
                    }
                    &-card{
                        margin-bottom: 104px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .chefs{
            &__wrap{
                padding-bottom: 0vw;
                &_cards{
                    display: flex;
                    width: 90vw;
                    &-card{
                        margin-bottom: 20vw;
                    }
                }
            }
        }
    }
</style>