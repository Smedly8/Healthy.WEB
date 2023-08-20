<template>
    <div>
        <div class="header__empty">
        </div>
        <header class="header" :class="{'header--shadow':isShadow, 'header--hide':isHide, 'header--white':isOpenMobileMenu}">
            <div class="header__wrap">
                <div class="header__wrap_left">
                    <img src="@/assets/logo.png" alt="">
                    <p>healthy switcher</p>
                </div>
                <div class="header__wrap_right">
                    <div v-for="(link, idx) in links" :key="idx" @click="scrollTo(idx)" class="header__wrap_right-link">
                        {{link.name}}
                    </div>
                    
                    <!-- <div class="header__wrap_right-login">
                        Войти
                    </div> -->
                </div>
                <div class="header__wrap_menuButton">
                    <img v-if="isOpenMobileMenu" @click="isOpenMobileMenu = false"   style="transform: scale(0.9)" src="@/assets/icons/cross.svg" alt="">
                    <img v-else="" @click="isOpenMobileMenu = true"  src="@/assets/icons/menu.svg" alt="">
                </div>
            </div>
            <MobileMenu v-if="isOpenMobileMenu" @close="isOpenMobileMenu =  false" :links="links"/>
        </header>
    </div>
    
    <!-- <MobileMenu v-if="isOpenMobileMenu" :links="links" @openRequest="$emit('openRequest')" @scrollTo="scrollTo"/> -->
</template>
<script>
import MobileMenu from '@/components/MobileMenu.vue'
export default {
    components:{
        // MobileMenu,
    },
    props:{
        triggerToShowHeader: Number,
        isOpenMobileMenu: Boolean,  
    },
    data(){
        return{
            links: [
                {name: 'Menu', link: ''},
                {name: 'Recipes', link: ''},
                {name: 'Chefs', link: ''},
                {name: 'Contacts', link: ''},
            ],
            isShadow: false,
            isHide: false,
            isOpenMenu: false,

            lastScroll: 0,
        }
    },
    
    mounted(){
        const callback = (e) => {
        console.log('header', window.scrollY, e.wheelDelta);
            if(window.scrollY < 50){
                this.isHide = false
            }
            else{
                this.isHide = (this.lastScroll - window.scrollY < 0) && !this.isOpenMenu
            }
            this.lastScroll = window.scrollY
        }
        const checkShadow = (e) => {
            this.isShadow = window.scrollY 
        }
        window.addEventListener('scroll', callback)
        window.addEventListener('scroll', checkShadow)
        // if(this.$refs.target.getBoundingClientRect().bottom < window.innerHeight*1.4){
        //     // console.log("!!!!!!!"); 
        //     this.animation = true
        // }
    },
    methods:{
        scrollTo(idx){
            this.isHide = false
            this.$emit('scrollTo', idx) 
        },
    },
    watch:{
        triggerToShowHeader(){
            this.isHide = false
            this.isShadow = false
        },
    }
}
</script>
<style lang="scss">
    .header{
        width: 100%;
        height: var(--heightHeader);
        display: flex;
        justify-content: center;
        background: transparent;
        position: fixed;
        z-index: 20;
        top: 0;
        left: 0;
        transition: .3s;
        border-bottom: 1px solid rgba(255, 255, 255, 0.386);
        &__empty{
            height: var(--heightHeader);
            display: none;
        }
        &--shadow{
            box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.06);
            background: var(--background);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            // opacity: 0.9;
            // backdrop-filter: blur(10px);
        }
        &--hide{
            transform: translateY(-100%);
            box-shadow: none !important;
        }
        &--white{
            // background: white;
        }
        &__wrap{
            width: var(--width);
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &_left{
                display: flex;
                align-items: center;
                & > img{
                    width: 24px;
                    // height: 36px;
                    object-fit: contain;
                    margin-right: 16px;
                    padding-bottom: 8px;
                }
                & > p{
                    @include baseText(12px);
                    font-weight: bold;
                    color: var(--mainColor);
                    text-transform: uppercase;
                    white-space: nowrap;
                    letter-spacing: 0.2em;
                }
                &-menu{
                    display: none;
                }
            }
            &_right{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                &-link{
                    @include baseText(14px);
                    margin-left: 55px;
                    cursor: pointer;
                    transition: .2s;
                    font-weight: 700;
                    opacity: 0.8;
                    &:hover{
                        opacity: 1;
                    }
                }
            }
            &_menuButton{
                display: none;
            }
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .header{
            padding: 0 40px;
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .header{
            height: var(--heightHeader);
            width: 100vw;
            background: var(--background);
            &__empty{
                display: block;
            }
            &__wrap{
                padding: 0 5vw;
                &_right{
                    display: none;
                }
                &_left{
                    width: 90vw;
                    &-menu{
                        flex-grow: 1;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        &-img{
                            width: 42px !important;
                            height: 42px !important;
                        }
                    }

                }
                &_menuButton{
                    display: block;
                    & > img {
                        filter: brightness(0) invert(1);
                        opacity: 0.5;
                        width: 10vw;
                    }
                }
            }
        }
    }
    
</style>