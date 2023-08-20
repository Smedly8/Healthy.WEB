<template>
    <div>
        <home-app/>
        <!-- <about-app/> -->
        <work-app/>
        <dishes-app/>
        <chefs-app/>
        <recipes-app/>
        <social-app/>
    </div>
</template>
<script>
import HomeApp from '@/components/HomeApp.vue'
import AboutApp from '@/components/AboutApp.vue'
import WorkApp from '@/components/WorkApp.vue'
import DishesApp from '@/components/DishesApp.vue'
import ChefsApp from '@/components/ChefsApp.vue'
import RecipesApp from '@/components/RecipesApp.vue'
import SocialApp from '@/components/SocialApp.vue'
// import FuncApp from '@/components/gram/FuncApp.vue'
// import OfferApp from '@/components/gram/OfferApp.vue'
export default {
    components:{
        HomeApp,
        AboutApp,
        WorkApp,
        DishesApp,
        ChefsApp,
        RecipesApp,
        SocialApp,
    },
    // data(){
    //     return{

    //     }
    // },
    created(){
    },
}
</script>
<style lang="scss">
    @import '@/style/reset.scss';
    body {
        background: var(--background);
    }
</style>