<template>
    <div ref="target" class="decorTitle" :class="{'decorTitle--animation' : !animationDecor}">
        <h2>{{title}}</h2>
        <p>{{text}}</p>
        <span></span>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                animationDecor: false,
            }
        },
        props: {
            title: String,
            text: String,
        },
        mounted(){
            const callback = (() => {
                if(this.$refs.target.getBoundingClientRect().top - window.innerHeight < -200) {
                    this.animationDecor = true
                    window.removeEventListener("scroll", callback)
                }
            })
            window.addEventListener("scroll", callback)
        },
    }
</script>
<style lang="scss">
.decorTitle{
    @include decorTitle;
    width: 100%; 
    &--animation{
        & > h2{
            transform: scale(1.1);
            opacity: 0;
        }
        & > p{
            transform: scale(0.9);
            opacity: 0;
        }
        & > span{
            width: 0;
        }
    }
}
</style>
