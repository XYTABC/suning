<template>
    <main>
        <section class="pro-main">
            <a class="vip-mode">
                <div class="vip-left">
                    <span></span>
                    <span>SUPER会员预计返价值3.58元云钻</span>
                </div>
                <div class="vip-right">立即开通</div>
            </a>
            <div class="pro-title">
                <h1>
                    <i>自营</i>
                    苏泊尔（SUPOR)电炖锅DG40YC806A电炖盅煲汤锅4L土陶内胆智能预约煲汤 多功能电炖锅 红陶内胆单胆
                </h1>
                <div class="favirot"></div>
            </div>
            <div class="pro-sub">
                <p> 
                    【秋季滋补，养生必备！限时钜惠179！限量抢购！】
                    <a href="#">新品嗨翻购！先到鲜得~猛戳>></a>
                </p>
            </div>
            <div class="info-item">
                <div>优惠</div>
                <div>
                    <p>可参加以下优惠活动<span class="chakan">查看</span></p>
                    <p><i>云钻促销</i><span class="info-span">普通会员立返53云钻</span></p>
                    <p><i>实名领券</i><span class="info-span">实名认证领10元支付券</span></p>
                </div>
                <div></div>
            </div>
            <div class="info-item info-item2">
                <div>刮卷</div>
                <div>
                    <p><img src="../../../assets/images/yunzun.png" class="yunzun">100%刮中券 </p>
                </div>
                <div></div>
            </div>
        </section>
        <section class="pro-main pro-main2">
            <div class="info-item info-item2">
                <div>已&nbsp;&nbsp;选</div>
                <div>
                    <p> 爆款-冷热双盖-真空保鲜 1件</p>
                </div>
                <div></div>
            </div>
        </section>
        <section class="pro-main  pro-main3">
            <div class="info-item info-item2">
                <div>送&nbsp;&nbsp;至&nbsp;&nbsp;</div>
                <div>
                    <p class="addbg"><span>广东</span><span>广州</span><span>荔湾区</span></p>
                </div>
                <div></div>
            </div>
            <div class="info-item info-item2">
                <div>付款支持</div>
                <div>
                    <p class=""><span>易付宝</span><span>支付宝</span></p>
                </div>
                <div></div>
            </div>
            <div class="info-item info-item2">
                <div>运&nbsp;&nbsp;费</div>
                <div>
                    <p class=""><span>免运费</span></p>
                </div>
                <div></div>
            </div>
            <div class="info-item info-item2 info1">
                <div>
                    <ul>
                        <li>店铺发货&售后</li>
                        <li>7天无理由退货</li>
                    </ul>
                </div>
                <div></div>
                <div></div>
            </div>
        </section>
        <v-evaluate></v-evaluate>
        <v-official></v-official>
        <!-- <v-map></v-map> -->
    </main>
</template>

<script>
import vevaluate from './vevaluate.vue'
import vofficial from './vofficial.vue'
// import vmap from './vmap.vue'
export default {
    components:{
        'v-evaluate':vevaluate,
        'v-official':vofficial
        // 'v-map':vmap
    }
}
</script>

<style lang="" scoped>
    main{
        background: #f6f6f6;
    }
    .pro-main{
        width: 94%;
        padding: 3%;
        padding-bottom: 0px;
        background: #fff;
        margin-bottom: 15px;
    }
    .pro-main2{
        padding-top: 0px;
    }
    .pro-main2 .info-item p{
         font-weight: bold;
         font-size: 14px;
     }
     .pro-main3{
        padding-right: 0px;
        padding-left: 0px;
        padding-top: 0px;
        width: 100%;
     }
    .pro-main3 .info-item{
        padding-left: 3%;
        padding-right: 3%;
        width: 94%;
        border-bottom: 1px solid #ddd;
    }
    .pro-main3 span{
        font-size: 14px;
        padding-left: 4px;
        padding-right: 4px;
    }
    .pro-main .info1 div:nth-of-type(1){
        width: 85%;
    }
    .pro-main .info1 div:nth-of-type(2){
        width: 0%;
    }
    .pro-main .info1 div:nth-of-type(3){
        width: 15%;
    }
    .pro-main .info1{
        background-color: #f8f8f8;
        color: #999;
    }
    .info1 ul{
        list-style: none;
    }
    .info1 ul li{
        float: left;
        position: relative;
        padding-right: 10px;
        padding-left: 20px;
        
    }
    .info1 ul li::before{
        content:'';
        position: absolute;
        width: 13px;
        height: 13px;
        left: 0px;
        background: url('../../../assets/images/icon-sprite.png') -126px -42px no-repeat;
        background-size: 152px 364px
    }
    .vip-mode{
        background-color: #f2f2f2;
        border-radius: 5px;
        display: block;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: left;
    }
    .vip-mode .vip-left{
        width: 74%;
        position: relative;
    }
    .vip-left span:nth-of-type(1){
        position: absolute;
        width: 15%;
        left: 0px;
        height: 45%;
        background: url('../../../assets/images/vip-info-icon2.gif') no-repeat;
        background-size: 100% 100%;
        margin: 3%;
        color: #222;
    }
    .vip-left span:nth-of-type(2){
        width: 75%;
        right: 0px;
        position: absolute;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        -webkit-line-clamp: 1;
        word-break: break-all;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        margin-right: 3%;
        margin-top: 4%;
        color: #222;
    }
    .vip-mode .vip-right{
        width: 22%;
        color: #222;
        font-size: 12px;
        padding-top: 3%;
        padding-bottom: 3%;
        text-align: center;
        margin-top:1%;
        margin-bottom:1%;
        border-left: 1px solid #ccc;
    }
    .pro-title{
        width: 100%;
        position: relative;
        padding: 2% 0;
    }
    .pro-title h1{
        font-size: 16px;
        display: block;
        width: 87%;
        line-height: 140%;
    }
    .pro-title h1 i{
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        display: inline-block;
        color: #fff;
        background-color: #f60;
        line-height: 16px;
        padding: 0 3px;
        border-radius: 3px;
    }
    .favirot{
        position: absolute;
        top: 18%;
        right: 0%;
        width: 8%;
        height: 38%;
        background-color: red;
        background: url('../../../assets/images/favrite.png') no-repeat;
        background-size: 100% 100%;
    }
    .pro-sub{
        padding: 1% 0;
        width: 100%；
    }
    .pro-sub p{
        color: #666;
        font-size: 13px;
    }
    .pro-sub a{
        color: #f60;
    }
    .info-item{
        padding: 3% 0px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: left;
        border-bottom: 1px solid #ddd;
    }
    .info-item2{
        border-bottom: 0px;
    }
    .info-item div:nth-of-type(1){
        width: 15%;
        color: #999;
        font-size: 13px;
    }
    .info-item div:nth-of-type(2){
        width: 78%;
    }
    .info-item div:nth-of-type(3){
        width: 7%;
        color: #999;
        position: relative;
        font-size: 13px;
    }
    .info-item div:nth-of-type(3)::after{
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border:1px solid #999;
        border-width:1px 0px 0px 1px;
        transform: rotate(135deg);
        right: 5px;
        top: 5%;
        position: absolute;
    }
     .info-item p{
         color: #222;
         font-size: 13px;
     }
    .info-item .chakan{
        float: right;
        color: #999;
        font-size: 13px;
    }
    .info-item  i{
        font-style: normal;
        font-size: 12px;
        color: #f60;
        border: 1px solid #f60;
        display: inline-block;
        padding: 0px 3px;
        border-radius: 10px;
        margin-right: 7px;
    }
    .info-item .info-span{
        line-height: 25px;
    }
    .yunzun{
        width: 20%;
        height: 50%;
    }
    .addbg{
        background: url('../../../assets/images/add.png') no-repeat;
        background-size: 6%;
        padding-left: 6%;
    }
</style>