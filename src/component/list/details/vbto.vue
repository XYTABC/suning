<template>
    <main>
        <div class="bto">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <a @click="change1()" class="open">加入购物车</a>
            <a @click="change2()" class="open">立即购买</a>
            <component :is="buymsg" class="jia"></component>
        </div>
    </main>
</template>

<script>
import lijigoumai from './lijigoumai.vue'
import jiarugouwuche from './jiarugouwuche.vue'
export default {
    data(){
        return{
            buymsg:''
        }
    },
    components:{
        'lijigoumai':lijigoumai,
        'jiarugouwuche':jiarugouwuche
    },
    methods:{
        change1(){
            this.buymsg='lijigoumai'
        },
        change2(){
            this.buymsg='jiarugouwuche'
        }
    },
    mounted(){
        $('.close').click(function(){
            $('.jia').hide();
        })
        $('.open').click(function(){
            $('.jia').show();
        })
    }
}
</script>

<style lang="" scoped>
    .jia{
        /* height: 500px; */
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        bottom: 0px;
        z-index: 20;
        display: none;
    }
    .bto{
        width: 100%;
        position: relative;
        background-color: #fff;
    }
    .bto ul{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: left;
        list-style-type: none;
        padding-bottom: 1%;
        float: left;
    }
    .bto li{
        width: 33.33%;
        position: relative;
        padding-bottom: 27%;
    }
    .bto li::before{
        content:'';
        position: absolute;
        width: 90%;
        height: 100%;
        top: 0px;
        margin-left: 5%;
        margin-right: 5%;
    }
    .bto li:nth-of-type(1)::before{
        background: url('../../../assets/images/action-service.png') no-repeat;
        background-size: 100%;
    }
    .bto li:nth-of-type(2)::before{
        background: url('../../../assets/images/action-shop.png') no-repeat;
        background-size: 100%;
    }
    .bto li:nth-of-type(3)::before{
        background: url('../../../assets/images/action-cart.png') no-repeat;
        background-size: 100%;
    }
    .bto a{
        float: right;
        background: linear-gradient(90deg,#ffd000,#ff9200);
        padding: 2%;
        margin-top: 3%;
        color: #fff;
        margin-right: 3px;
    }
    .bto a:nth-of-type(1){
        border-radius: 0px 10px 10px 0px;
    }
    .bto a:nth-of-type(2){
        border-radius: 10px 0px 0px 10px;
    }
</style>