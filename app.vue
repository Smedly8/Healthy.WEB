<template>
<div class="layout">
    <HeaderApp :isOpenMobileMenu="false" :triggerToShowHeader="0"/>
    <NuxtPage/>
    <FooterApp/>
</div>
</template>
<style lang="scss">
@import '@/style/fonts.scss';
</style>
<!-- <script>
import Navbar from '@/components/Navbar.vue'
export default {
components:{
    Navbar,
}
}
</script> -->

  