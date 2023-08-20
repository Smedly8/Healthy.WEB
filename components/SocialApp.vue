<template>
    <section class="recipes">
        <div class="social__wrap">
            <decor-title title="Social" text="We in Social"/>
            <ul class="social__wrap_cards" ref="animationItem">
                <li class="social__wrap_cards-card">
                    <div class="social__wrap_cards-card-top">
                        <div class="social__wrap_cards-card-top-social">
                            <div class="social__wrap_cards-card-top-social-icon">
                                <img src="@/assets/icons/twitter.svg" alt="">
                            </div>
                            <p>Twitter</p>
                        </div>
                        <div class="social__wrap_cards-card-top-button">
                            FOLLOW US
                        </div>
                    </div>
                    <div class="social__wrap_cards-card-body">
                        <p class="social__wrap_cards-card-body-date">
                            24 Jun at 16:20 pm
                        </p>
                        <p class="social__wrap_cards-card-body-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                        <p class="social__wrap_cards-card-body-author">
                            @DennisFerguson
                        </p>
                    </div>
                </li>

                <li class="social__wrap_cards-card">
                    <div class="social__wrap_cards-card-top">
                        <div class="social__wrap_cards-card-top-social">
                            <div class="social__wrap_cards-card-top-social-icon">
                                <img src="@/assets/icons/inst.svg" alt="">
                            </div>
                            <p>Instagramm</p>
                        </div>
                        <div class="social__wrap_cards-card-top-button">
                            FOLLOW US
                        </div>
                    </div>
                    <div class="social__wrap_cards-card-gallery">
                        <div class="social__wrap_cards-card-gallery-wrap">
                            <div v-for="(image, idx) in images" :key="idx" class="social__wrap_cards-card-gallery-wrap-imgWrap">
                                <img :src="image" alt="">
                            </div>
                        </div>
                    </div>
                </li>

                <li class="social__wrap_cards-card">
                    <div class="social__wrap_cards-card-top">
                        <div class="social__wrap_cards-card-top-social">
                            <div class="social__wrap_cards-card-top-social-icon">
                                <img src="@/assets/icons/facebook.svg" alt="">
                            </div>
                            <p>Facebook</p>
                        </div>
                        <div class="social__wrap_cards-card-top-button">
                            FOLLOW US
                        </div>
                    </div>
                    <div class="social__wrap_cards-card-body">
                        <p class="social__wrap_cards-card-body-date">
                            24 Jun at 16:20 pm
                        </p>
                        <p class="social__wrap_cards-card-body-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                        <p class="social__wrap_cards-card-body-author">
                            @DennisFerguson
                        </p>
                    </div>
                </li>

            </ul>
            <!-- <slider-app :slides="images"/> -->
        </div>
    </section>
</template>
<script>
import SliderApp from '@/components/ui/SliderApp.vue'
import StatsApp from '@/components/ui/StatsApp.vue'
import DecorTitle from '@/components/ui/DecorTitle.vue'
import AnimationScript from '@/components/script/AnimationScript.vue'
export default {
    extends: AnimationScript,
    components: {
        SliderApp,
        StatsApp,
        DecorTitle,
    },
    data(){
        return{
            images: [
                '/images/social/1.png', 
                '/images/social/2.png', 
                '/images/social/3.png',
                '/images/social/4.png',
                '/images/social/5.png',
                '/images/social/6.png',
                '/images/social/1.png', 
                '/images/social/2.png', 
                '/images/social/3.png',
                '/images/social/4.png',
                '/images/social/5.png',
                '/images/social/6.png',
            ],
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
    .social{
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
                justify-content: space-between;
                margin-top: 50px;
                width: 100%;
                &-card{
                    width: 350px;
                    border-radius: 4px;
                    background: var(--lightBlack);
                    height: 330px;
                    &-top{
                        display: flex;
                        justify-content: space-between;
                        padding: 25px;
                        border-bottom: 1px solid var(--darkGray);
                        &-social{
                            display: flex;
                            align-items: center;
                            &-icon{
                                width: 40px;
                                height: 40px;
                                border: 2px solid var(--darkGray);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 50px;
                                margin-right: 20px;
                                & > img{
                                    width: 25px;
                                    height: 25px;
                                }
                            }
                            & > p{
                                @include baseText(14px);
                                color: var(--gray);
                            }
                        }
                        &-button{
                            @include smallButton;
                            width: 120px;
                        }
                    }   
                    &-body{
                        padding: 25px;
                        &-date{
                            @include baseText(14px);
                            color: var(--gray);
                            opacity: 0.7;
                        }
                        &-text{
                            margin-top: 14px;
                            @include baseText(14px);
                            color: var(--gray);
                            line-height: 2.1em;
                        }
                        &-author{
                            @include baseText(14px);
                            color: var(--mainColor);
                            margin-top: 14px;
                        }
                    }
                    &-gallery{
                        overflow: auto;
                        height: 100%;
                        height: 240px;
                        &-wrap{
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            &-imgWrap{
                                overflow: hidden;
                                & > img{
                                    width: 100%;
                                    height: 120px;
                                    object-fit: cover;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .social{
            &__wrap{
                &_cards{
                    display: grid;
                    grid-template-columns: repeat(2, auto);
                    justify-content: center;
                    gap: 30px;
                    &-card{
                        margin: auto;
                        // margin-bottom: 40px;
                        &:nth-child(3){
                            grid-column-start: 1;
                            grid-column-end: 3;
                            
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .social{
            &__wrap{
                padding-bottom: 10vw;
                &_cards{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10vw;
                    &-card{
                        width: 90vw;
                        &-top{
                            &-button{
                                width: 30vw;
                            }
                        }
                    }
                }
            }
        }
    }

</style>