<template>
    <div class="statsWrap">
        <div class="statsWrap-stat">
            <img src="@/assets/icons/eye.svg" alt="">          
            <p>275</p>              
        </div>
        <div class="statsWrap-stat">
            <img src="@/assets/icons/comment.svg" alt="">          
            <p>12</p>              
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss">
.statsWrap{
    display: flex;
    align-items: center;
    gap: 30px;
    &-stat{
        display: flex;
        align-items: center;
        & > img {
            height: 16px;
            margin-right: 10px;
        }
        & > p {
            @include baseText(12px);
        }

    }
}
@media screen and (max-width: $mediaQuery2) {
    .statsWrap{
        gap: 4vw;
        &-stat{
            
            & > p{
                font-size: 2.5vw;
            }
        }
    }
}
</style>