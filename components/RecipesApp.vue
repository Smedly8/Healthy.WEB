<template>
    <section class="recipes">
        <div class="recipes__wrap">
            <decor-title title="RECIPES" text="Recipes From Our Chefs"/>
            <div ref="animationItem" class="recipes__wrap_grid">
                <div class="recipes__wrap_grid-bigCard" >
                    <img src="@/assets/recipes/big.png" alt="" class="recipes__wrap_grid-bigCard-back">
                    <h2 class="recipes__wrap_grid-bigCard-banner">
                        breakfast
                    </h2>
                    <div class="recipes__wrap_grid-bigCard-centerWrap">
                        <p class="recipes__wrap_grid-bigCard-date">
                            05 Jule 2016
                        </p>
                        <p class="recipes__wrap_grid-bigCard-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        <p class="recipes__wrap_grid-bigCard-date">
                            Jason Keller
                        </p>
                    </div>
                    <stats-app/>
                </div>

                <div class="recipes__wrap_grid-card recipes__wrap_grid-card--black" >
                    <p class="recipes__wrap_grid-card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </p>
                    <div class="recipes__wrap_grid-card-bottomRow">
                        <div class="recipes__wrap_grid-card-bottomRow-left">
                            <p class="recipes__wrap_grid-card-bottomRow-left-banner">
                                lunch
                            </p>
                            <p class="recipes__wrap_grid-card-bottomRow-left-date">
                                07 Jan 2016
                            </p>
                        </div>
                        <div class="recipes__wrap_grid-card-bottomRow-right">
                            <stats-app/>
                        </div>
                    </div>
                </div>

                <div class="recipes__wrap_grid-card recipes__wrap_grid-card--decor recipes__wrap_grid-card--content" >
                    <img src="@/assets/recipes/small.png" alt="" class="recipes__wrap_grid-card-back">
                    <p class="recipes__wrap_grid-card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </p>
                    <div class="recipes__wrap_grid-card-bottomRow">
                        <div class="recipes__wrap_grid-card-bottomRow-left">
                            <p class="recipes__wrap_grid-card-bottomRow-left-banner">
                                lunch
                            </p>
                            <p class="recipes__wrap_grid-card-bottomRow-left-date">
                                07 Jan 2016
                            </p>
                        </div>
                        <div class="recipes__wrap_grid-card-bottomRow-right">
                            <stats-app/>
                        </div>
                    </div>
                </div>

                <div class="recipes__wrap_grid-card recipes__wrap_grid-card--black">
                    <p class="recipes__wrap_grid-card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </p>
                    <div class="recipes__wrap_grid-card-bottomRow">
                        <div class="recipes__wrap_grid-card-bottomRow-left">
                            <p class="recipes__wrap_grid-card-bottomRow-left-banner">
                                lunch
                            </p>
                            <p class="recipes__wrap_grid-card-bottomRow-left-date">
                                07 Jan 2016
                            </p>
                        </div>
                        <div class="recipes__wrap_grid-card-bottomRow-right">
                            <stats-app/>
                        </div>
                    </div>
                </div>

            </div>
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
    .recipes{
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
            margin-top: 60px;
            &_decorTitle{
                @include decorTitle;
                width: 100%; 
            }
            &_grid{
                margin-top: 60px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(3, 1fr);
                gap: 30px;
                width: 100%;
                height: 510px;
                &-bigCard{
                    width: 100%;
                    grid-row: 1 / 4;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    padding: 60px;
                    overflow: hidden;
                    &:hover{
                        .recipes__wrap_grid-bigCard-back{
                            transform: scale(1.02);
                        }
                    }
                    &-back{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        top: 0;
                        left: 0;
                        z-index: -1;
                        transition: .2s
                    }
                    &-banner{
                        @include banner;
                    }
                    &-centerWrap{
                        height: 200px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                    }
                    &-date{
                        @include baseText(14px);
                        color: white;
                    }
                    &-text{
                        @include baseText(24px);
                        text-align: center;
                    }
                    &-statsWrap{
                        display: flex;
                        align-items: center;
                        gap: 30px;
                        &-stat{
                            display: flex;
                            & > img {
                                height: 16px;
                                margin-right: 10px;
                            }
                            & > p {
                                @include boldText(12px);
                            }

                        }
                    }
                }
                &-card{
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                    padding: 30px 30px 20px;
                    background: var(--lightBlack);
                    position: relative;
                    overflow: hidden;
                    &--decor{
                        background: transparent; 
                        z-index: 1;
                    }
                    * {
                        transition: .2s;
                    }
                    &--black{
                        &:hover{
                            background: var(--mainColor); 
                            & > p{
                                color: black;
                            }
                            .recipes__wrap_grid-card-bottomRow-left-date{
                                color: black;
                            }
                            .recipes__wrap_grid-card-bottomRow-right{
                                filter: brightness(0);
                            }
                            .recipes__wrap_grid-card-bottomRow-left-banner{
                                background: black;
                            }
                        }

                    }    
                    &--content{
                        &:hover{
                            .recipes__wrap_grid-card-back{
                                transform: scale(1.02);
                            }
                        }
                    }                
                    &-back{
                        position: absolute;
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        z-index: -1;
                        transition: .2s;
                    }
                    &-text{
                        @include baseText(16px);
                        line-height: 1.7em; 
                    }
                    &-bottomRow{
                        display: flex;
                        justify-content: space-between;
                        margin-top: 20px;
                        &-left{
                            display: flex;
                            align-items: center;
                            &-banner{
                                @include banner;
                                margin-right: 10px;
                            }
                            &-date{
                                @include baseText(12px);
                                color: var(--gray);
                            }
                        }
                        &-right{
                            display: flex;
                            align-items: center;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .recipes{
            &__wrap{
                &_grid{
                    padding: 0 40px;
                    grid-template-columns: 1fr 400px;
                    height: auto;
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .recipes{
            &__wrap{
                padding-top: 5vw;
                &_grid{
                    grid-template-columns: 1fr;
                    grid-template-rows: none;
                    justify-content: center;
                    height: auto;
                    width: auto;
                    padding: 0;
                    &-bigCard{
                        width: 90vw;
                        padding: 10vw;
                        &-centerWrap{
                            height: auto;
                            padding: 10vw 0;
                            height: 60vw;
                        }
                        &-text{
                            width: 80vw;
                        }
                    }
                    &-card{
                        width: 90vw;
                    }
                }
            }
        }
    }
</style>