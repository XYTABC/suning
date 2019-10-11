<template>
    <main id="newcont">
        <v-new></v-new>
        <v-newxia></v-newxia>
        <v-flashSale></v-flashSale>
        <v-NationalDay></v-NationalDay>
        <!-- 每日必逛 -->
        <v-around></v-around>
        <!-- 酷玩潮流 -->
        <v-coldPlay></v-coldPlay>
        <!-- 生活风尚 -->
        <v-lifeStyle></v-lifeStyle>
        <!-- 推荐榜单Recommendedlist -->
        <v-Recommendedlist></v-Recommendedlist>
        <!-- 特色专享 -->
        <v-Features></v-Features>
        <!-- 省钱秘籍 -->
        <v-Savingtips></v-Savingtips>
        <!-- 好店优选Goodstore -->
        <v-Goodstore></v-Goodstore>
        <!-- 猜你喜欢 guess -->
        <v-guessyoulike></v-guessyoulike>
        <v-likebtn></v-likebtn>
    </main>
</template>

<script>
import vnew from './newcont/vnew.vue'
import vnewxia from './newcont/vnewxia.vue'
import vflashSale from './newcont/vflashSale.vue'
import vNationalDay from './newcont/vNationalDay.vue'
import varound from './newcont/varound.vue'
import vcoldPlay from './newcont/vcoldPlay.vue'
import vlifeStyle from './newcont/vlifeStyle.vue'
import vRecommendedlist from './newcont/vRecommendedlist.vue'
import vFeatures from './newcont/vFeatures.vue'
import vSavingtips from './newcont/vSavingtips.vue'
import vGoodstore from './newcont/vGoodstore.vue'
import vguessyoulike from './newcont/vguessyoulike.vue'
import vlikebtn from './newcont/vlikebtn.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        "v-new":vnew,
        "v-newxia":vnewxia,
        "v-flashSale":vflashSale,
        "v-NationalDay":vNationalDay,
        "v-around":varound,
        "v-coldPlay":vcoldPlay,
        "v-lifeStyle":vlifeStyle,
        "v-Recommendedlist":vRecommendedlist,
        "v-Features":vFeatures,
        "v-Savingtips":vSavingtips,
        "v-Goodstore":vGoodstore,
        "v-guessyoulike":vguessyoulike,
        "v-likebtn":vlikebtn
    }
}
</script>

<style>
    #newcont{
        background-color: #f2f2f2;
        padding-bottom: 10px;
    }
</style>