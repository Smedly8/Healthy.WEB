<template>
    <footer class="footer">
        <div class="footer__wrap">
            <ul class="footer__wrap_cards">
                <li class="footer__wrap_cards-card">
                    <img src="@/assets/icons/clock.png" alt="">
                    <h2>Today 10:00 am - 7:00 pm</h2>
                    <p>Working hours</p>
                </li>
                <li class="footer__wrap_cards-card">
                    <img src="@/assets/icons/geo_arrow.png" alt="">
                    <h2>Today 10:00 am - 7:00 pm</h2>
                    <p>Working hours</p>
                </li>
                <li class="footer__wrap_cards-card">
                    <img src="@/assets/icons/phone.png" alt="">
                    <h2>Today 10:00 am - 7:00 pm</h2>
                    <p>Working hours</p>
                </li>
            </ul>
            <div class="footer__wrap_bottom">
                <img src="@/assets/full_logo.png" alt="">
                <p>© Designed by Yellow Snow. All Rights Reserved. </p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            links: [
                {name: 'Главная', link: ''},
                {name: 'О продукте', link: ''},
                {name: 'Функционал', link: ''},
                {name: 'Контакты', link: ''},
            ]
        }
    },
    methods:{
        scrollUp(){
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
            this.$emit('scrollTop')
        }
    }
}
</script>
<style lang="scss">
    .footer{
        display: flex;
        justify-content: center;
        background: var(--lightBlack);
        &__wrap{
            width: 1200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 40px 0 30px;
            &_cards{
                width: 840px;
                display: flex;
                justify-content: space-between;
                padding-bottom: 30px;
                border-bottom: 1px solid var(--darkGray);
                &-card{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    & > img{ 
                        width: 26px;
                    }
                    & > h2{
                        @include baseText(16px);
                        margin-top: 20px;
                    }
                    & > p{
                        @include grayText(14px);
                        margin-top: 12px;
                    }
                }
            }
            &_bottom{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                & > img{
                    width: 207px;
                    margin-top: 30px;
                }
                & > p{
                    @include grayText(14px);
                    opacity: 0.6;
                    margin-top: 20px;
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery1){
        .footer{
            &__wrap{
                padding: 16vw 0;
                &_cards{
                    width: 90vw;
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2){
        .footer{
            &__wrap{
                padding: 16vw 0;
                &_bottom{
                    & > img{
                        margin-top: 0;
                    }
                }
                &_cards{
                    display: none;
                }
            }
        }
    }
</style>