<template>
    <section class="home">
        <img src="@/assets/background.png" ref="backImage" alt="" class="home__background">
        <div class="home__wrap">
            <div class="home__wrap_textBlock">
                <h2 class="home__wrap_title">
                    Your <strong>favourite food</strong> <br> Delivered hot & fresh
                </h2>
                <p class="home__wrap_text">HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.</p>
                <div class="home__wrap_buttonWrap">
                    <button>Order Now</button>
                </div>
            </div>
            <ul class="home__wrap_cards">
                <li class="home__wrap_cards-card">
                    <img src="@/assets/icons/clock.png" alt="">
                    <h2>Today 10:00 am - 7:00 pm</h2>
                    <p>Working hours</p>
                </li>
                <li class="home__wrap_cards-card">
                    <img src="@/assets/icons/geo_arrow.png" alt="">
                    <h2>Today 10:00 am - 7:00 pm</h2>
                    <p>Working hours</p>
                </li>
                <li class="home__wrap_cards-card">
                    <img src="@/assets/icons/phone.png" alt="">
                    <h2>Today 10:00 am - 7:00 pm</h2>
                    <p>Working hours</p>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return {
            backgroundShift: 0,
        }
    },
    mounted(){
        window.addEventListener('scroll', () => {
           if(window.scrollY < window.innerHeight*2) {
               this.$refs.backImage.style.transform = `translatey(${window.scrollY*0.2}px)`
           }
        })
    },
}
</script>
<style lang="scss">
    .home{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        &__background{
            // height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: bottom;
            position: absolute;
            top: 0;
            left: 0;
            // max-height: 120vh;
        }
        &__wrap{
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
            align-items: center;
            &_textBlock{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            &_title{
                @include baseText(72px);
                text-align: center;
                letter-spacing: 0.1em;
                font-weight: 300;
                & > strong{
                    text-transform: capitalize;
                    font-weight: 700;
                }
            }
            &_text{
                @include baseText(16px);
                width: 600px;
                opacity: 0.7;
                text-align: center;
                margin-top: 5px;
            }
            &_buttonWrap{
                width: 220px;
                margin-top: 40px;
                & > button{
                    @include button;
                }
            }
            &_cards{
                margin-top: 70px;
                display: flex;
                gap: 110px;
                &-card{
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    & > img{
                        width: 24px;
                    }
                    & > h2{
                        @include baseText(16px);
                        font-weight: 200;
                        margin-top: 18px;
                    }
                    & > p{
                        @include baseText(16px);
                        opacity: 0.5;
                        margin-top: 8px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .home{
            &__wrap{
                padding: 0 40px;
                &_title{
                    font-size: 54px;
                }
                &_cards{
                    width: 780px;
                    gap: 0;
                    justify-content: space-between;
                    &-card{
                        width: 250px;
                        max-width: none;
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .home{
            position: relative;
            height: auto;
            &__background{
                height: 100vh;
                object-position: center;
            }
            
            &__wrap{
                padding: 0;
                &_title{
                    font-size: 7vw;
                    margin-top: 40vw;
                }
                &_textBlock{
                    height: calc(100vh - var(--heightHeader));
                }
                &_text{
                    font-size: 4.2vw;
                    width: 90vw;
                    margin-top: 8vw;
                    line-height: 2em;
                }
                &_cards{
                    width: 100%;
                    flex-direction: column;
                    gap: 12vw;
                    margin-top:0;
                    padding-bottom: 16vw;
                    align-items: center;
                }
                &_buttonWrap{
                    width: 40vw;
                    height: 20vw;
                    margin-top: 30vw;
                    & > button{
                        height: 16vw;
                    }
                }
            }
        }
    }
</style>