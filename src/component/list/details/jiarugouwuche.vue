<template>
    <main>
        <header>
            <div class="imgbox">
                <img src="../../../assets/images/headerimg.jpg" alt="">
            </div>
            <div class="product">
                <p><em>￥</em>699.00</p>
                <div>商品编码:<em>10576936150</em></div>
                <div>美的（Midea）破壁机PB10Easy203 6叶3D破壁刀 高速加热3-5人不锈钢刀头 自动清洗 预约功能1.75L</div>
            </div>
        </header>
        <div class="content">
            <h2>属性</h2>
            <div class="pro-type">
                <div class="yuan-color " v-for="(v,i) in list" @click="add(i)" v-bind:class="{typecolor:i==num}">
                    <img :src="v.typeimg" alt="">
                   {{v.title}}
                </div>
                
            </div>
           <div class="shuliang">
                <h2>数量</h2>
                <div>
                    <a href="#" @click="sub()">-</a>
                    <input type="text" :value="shuliang">
                    <a href="#" @click="addone()">+</a>
                </div>
           </div>
           <p class="hang"></p>
           <div class="gmzzfw">购买增值服务</div>
           <div class="gmzzfw">
               <div>
                   <span></span>
                   <span>
                       <i></i>
                       99%购买的用户同时选购
                    </span>
               </div>
               <div class="huan-xiu">
                   <div class="huan">只换不修1年 <span>¥90.00</span></div>
                   <a href="#">
                       <span>推荐理由</span>
                       <span class="jiantou"></span>
                   </a>
               </div>
           </div>
           <div class="list-wrap">
               <h3>
                   <img src="../../../assets/images/ZHBX_2.png" alt="">
                   <span>
                       只换不修
                       <em>只换不修</em>
                   </span>
                   <a href="#">查看详情<i></i></a>
               </h3>
               <div>
                   <div class="sdf">
                       <div class="huan">只换不修1年 <span>¥90.00</span></div>
                       <div class="huan">只换不修1年 <span>¥90.00</span></div>
                       <div class="huan">只换不修1年 <span>¥90.00</span></div>
                   </div>
               </div>
           </div>
           <div class="list-wrap">
               <h3>
                   <img src="../../../assets/images/ZHBX_2.png" alt="">
                   <span>
                       全保修
                       <em>  性能意外全保修</em>
                   </span>
                   <a href="#">查看详情<i></i></a>
               </h3>
               <div>
                   <div class="sdf">
                       <div class="huan">只换不修1年 <span>¥90.00</span></div>
                       <div class="huan">只换不修1年 <span>¥90.00</span></div>
                   </div>
               </div>
           </div>
        </div>
        <footer class="product-bto">
            <div>立即购买</div>
            <div class="addcart" @click="addcart()">加入购物车</div>
        </footer>
    </main>
</template>

<script>
export default {
    data(){
        return{
            list:'',
            typecolor:'typecolor',
            num:0,
            shuliang:1
        }
    },
    methods:{
        add(i){
            this.num=i
        },
        addcart(){
            this.$toast('添加购物车成功');
        },
        addone(){
            this.shuliang++;
        },
        sub(){
            this.shuliang--;
            if(this.shuliang<=0){
                this.shuliang=1;
            }
           
        }
    },
    mounted(){
        this.$http.get('./data/colortype.json')
        .then((response)=> {
            console.log(response);
            this.list=response.data.colortype
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
}
</script>

<style scoped>
    main{
        width: 100%;
        background-color: #fff;
        height: 70%;
        position: relative;
    }
    header{
        position: relative;
        min-height: 70px;
        height: auto;
        padding: 10px 14px 0;
        border-bottom: 1px solid #ddd;
    }
    .imgbox{
        width: 32%;
        height: 32%;
        overflow: hidden;
        border: 1px solid #ddd;
        position: relative;
        top: -30px;
    }
    .imgbox img{
        width: 100%;
    }
    .product{
        position: absolute;
        left: 37%;
        top: 10px;
    }
    .product p{
        color: #f60;
        font-size: 14px;
    }
    .product div:nth-of-type(1){
        margin: 5px 0;
        font-size: 12px;
        color: #999;
    }
    .product div:nth-of-type(2){
        margin: 2px 0;
        font-size: 12px;
        line-height: 18px;
        font: .12rem/1.5 Arial,Helvetica,STHeiTi,sans-serif;
    }
    em{
        font-style: normal;
    }
    .content{
        overflow: auto;
        height: 65%;
    }
    .content h2{
        font-size: 14px;
        font-weight: normal;
        padding: 13px 0px 10px 10px;
        display: inline-block;
    }
    .pro-type{
        width: 94%;
        padding: 0 3%;
    }
    .pro-type::after{
        content:'';
        display: block;
        clear: both;
        width: 100%;
        height: 1px;
        background-color: #ddd;
    }
    .pro-type>div{
        float: left;
        font-size: 12px;
        border-radius: 6px;
        border: 1px solid transparent;
        margin-right: 5%;
        margin-bottom: 10px;
    }
    .yuan-color{
        border: 1px solid #f60;
        background: #f6f6f6;
    }
    .pro-type .typecolor{
        color: #f60;
        border: 1px solid #f60;
        background: #fff2ec;
    }
    .pro-type img{
        width: 15%;
        margin: 5px;
        display: inline-block;
        vertical-align: middle;
    }
    .shuliang>div{
        float: right;
        margin-top: 3%;
        margin-right: 2%;
    }
    .shuliang>div a{
        text-decoration: none;
        color: #000;
        display: inline-block;
        width: 20px;
        height: 21px;
        border: 1px solid #ccc;
        text-align: center;
        float: left;
    }
    .shuliang>div input{
        width: 40px;
        padding: 2px 0px;
        outline: none;
        display: inline-block;
        text-align: center;
        float: left;
    }
    .hang{
        background-color: #f2f2f2;
        width: 100%;
        height: 12px;
        margin-top: 10px;
    }
    .gmzzfw{
        font-size: 13px;
        padding: 8px;
        border: 1px solid #ddd;
    }
    .gmzzfw>div:nth-of-type(1){
        width: 100%;
    }
    .gmzzfw>div:nth-of-type(1) span{
        display: inline-block;
    }
    .gmzzfw>div:nth-of-type(1) span:nth-of-type(1){
        width: 15%;
        height: 14px;
        background: url('../../../assets/images/jxhd.png');
        background-size: 100% 100%;
    }
    .gmzzfw>div:nth-of-type(1) span:nth-of-type(2){
        color: #fff;
        width: 45%;
        height: 22px;
       border-radius: 10px;
        background: linear-gradient(90deg,#ff6f4c,#ff2941);
    }
    .gmzzfw>div:nth-of-type(1) i{
        margin-top: 1%;
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url('../../../assets/images/fire-icon.png') no-repeat;
        background-size: 100%;
    }
    .gmzzfw>div:nth-of-type(2){
        width: 100%;
    }
    .huan-xiu{
        padding-top: 2%;
        position: relative;
    }
    .huan{
        padding: 2%;
        background-color: #f2f2f2;
        display: inline-block;
        border-radius: 6px;
    }
    .huan span{
        color: #333;
        padding-left: 10px;
        border-left: 1px solid #ccc;
    }
    .huan-xiu a{
        text-decoration: none;
        color: #333;
        position: absolute;
        right: 10px;
        top: 30%;
    }
    .jiantou{
        width: 8px;
        height: 8px;
        border: 1px solid #ccc;
        border-width: 0px 1px 1px 0px;
        transform: rotate(-45deg);
        display: inline-block;
    }
    .list-wrap{
        padding: 3%;
        position: relative;
    }
    .list-wrap img{
        width: 4%;
    }
    .list-wrap span{
        color: #333;
    }
    .list-wrap em{
        color: #666;
        font-size: 12px;
    }
    .list-wrap h3{
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
    }
    .list-wrap a{
        position: absolute;
        right: 10px;
        text-decoration: none;
        color: #f60;
        font-size: 12px;
    }
    .list-wrap i{
        display: inline-block;
        width: 13px;
        height: 13px;
        background: url('../../../assets/images/question-mark.png') no-repeat;
        background-size: 100%;
        position: relative;
        top: 3px;
    }
    .sdf{
        padding: 3%;
    }
    .sdf::after{
        content:'';
        display: block;
        clear: both;
    }
    .sdf>div{
        font-size: 12px;
        padding-left: 5%;
        padding-right: 5%;
        margin-bottom: 5px;
        float: left;
        margin-right: 2%;
    }




    footer{
        position: fixed;
        bottom: 0px;
        width: 100%;
    }
    footer::after{
        content:'';
        display: block;
        clear: both;
    }
    footer>div:nth-of-type(1){
        float: left;
        width: 48%;
        text-align: center;
        background: linear-gradient(90deg,#ffd000,#ff9200);
        border-radius: 9px 2px 2px 9px;
        padding: 10px 0px;
        color: #fff;
        margin-left: 5px;
    }
    footer>div:nth-of-type(2){
        float: right;
        width: 48%;
        text-align: center;
        background: linear-gradient(90deg,#ff8f00,#f50);
        border-radius: 2px 9px 9px 2px;
        padding: 10px 0px;
        color: #fff;
        margin-right: 5px;
    }
</style>