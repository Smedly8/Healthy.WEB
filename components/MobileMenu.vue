<template>
    <div class="menu" >
        <div class="menu__nav">
            <div class="menu__nav_link" @click="$router.push({name: 'home', hash: '#home'})">
                <p>Главная</p>
                <img src="@/assets/icons/arrow.svg">
            </div>
            <div class="menu__nav_link" @click="$router.push({name: 'home', hash: '#about'})">
                <p>О нас</p>
                <img src="@/assets/icons/arrow.svg">
            </div>
            <div class="menu__nav_link" @click="$router.push({name: 'home', hash: '#apartments'})">
                <p>Номера</p>
                <img src="@/assets/icons/arrow.svg">
            </div>
                <!-- <p @click="$router.push({name: 'home', hash: '#home'})" class="header__wrap_left-link">Главная</p>
                <p @click="$router.push({name: 'home', hash: '#about'})" class="header__wrap_left-link">О нас</p>
                <p @click="$router.push({name: 'home', hash: '#apartments'})" class="header__wrap_left-link">Номера</p> -->
        </div>
    </div>
    </template>
    <script>
    export default {
        props:{
            links: Array,
        },
        watch:{
            '$route'(){
                console.log('close');
                this.$emit('close')
            },
        }
    }
    </script>
    <style lang="scss">
        $color-text: rgb(231, 231, 231);
        .menu{
            width: 100vw;
            height: calc(100vh - 60px);
            top: var(--heightHeader);
            left: 0;
            position: fixed;
            background:var(--background);
            // backdrop-filter: blur(10px);
            padding: 2vw 5vw 12vw;
            z-index: 100;
            // filter: brightness(50%);
            display: flex;
            flex-direction: column;
            
            
            &__back{
                position: fixed;
                top: 60px;
                left: 0;
                content: "";
                width: 100vw;
                height: calc(100vh - 60px);
                background-position: center;
                background-repeat: none;
                background-size: cover;
                object-fit: cover;
                filter: brightness(60%);
                z-index: 1;

            }
            &__nav{
                display: flex;
                flex-direction: column;
                margin-top: 3vw;
                position: relative;
                z-index: 1;
                &_link{
                    height: 70px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding-left: 25px;
                    padding-right: 25px;
                    align-items: center;
                    & > p{
                        @include baseText;
                        // font-weight: 700;
                        font-size: 20px;
                        color: rgba(25, 29, 31, 0.7);
                        color: $color-text;
                    }
                    & > img{
                        height: 13px;
                        margin-left: 10px;
                        filter: brightness(1000%);
                        transform: rotate(180deg);
                    }
                }
    
            }
            &__bottom{
                z-index: 1;
                flex-grow: 1;
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                align-items: center;
                padding-bottom: 12vw;
                & > p{
                    text-align: center;
                    color: $color-text;
                    font-size: 5vw;
                }
                & > a{
                    width: 100%;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    & > button{
                        display: flex;
                        justify-content: center;
                        margin-top: 5vw;
                        padding: 2.5vw 20px;
                        border-radius: 8px;
                        // border: 1px solid $color-text;
                        color: $color-text;
                        width: 70%;
                        background: var(--mainColor);
                        & > img{
                            margin-right: 2vw;
                            width: 4.5vw;
                            filter: invert(100%) brightness(90%);
                            
                        }
                    }
                } 
            }
        }
    </style>