<template>
    <main class="listnavbg">
        <div class="listone">
            <div class="listtop" v-for="(v,i) in choice">
                <div class="img-box" v-if="v.imgSrc!=''">
                    <img :src="v.imgSrc" alt="">
                    <i><span>{{v.sp}}</span><span>商品</span></i>
                    <p>{{v.imgtitle}}</p>
                </div>
                <span class="title1" v-if="v.title1!=''">{{v.title1}}</span>
                <ul>
                    <li v-for="(a,b) in v.cho">
                        <a href="#"><img :src="a.iimg" alt=""></a>
                        <i class="detal" v-if="a.txt!=''">{{a.txt}}</i>
                        <div class="pro-price">
                            <p ><i class="manjian"  v-if="a.manjian!=''">{{a.manjian}}</i></p>
                            <p class="price">{{a.price}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nomore">没有更多了</div>
    </main>
</template>

<script>
export default {
    data(){
        return{
            choice:''
        }
    },
    mounted(){
        this.$http.get('./data/choiceness.json')
        .then((response)=> {
            this.choice=response.data.choice
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

<style>
    .listnavbg{
        background-color: #f2f2f2;
    }
    .listone ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: left;
    }
</style>

<style scoped>
    .listnavbg{
        padding-top: 1px;
        overflow: hidden;
    }
    .listone{
        width: 96%;
        margin: 0 2%;
    }
    .listtop{
        width: 100%;
        margin-top: 8px;
        background-color: #fff;
    }
    .title1{
        color: #333;
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 5px;
        display: inline-block;
    }
    .listtop ul{
        list-style: none;
        padding-top: 10px;
    }
    .listtop ul li{
        width: 30%;
        text-align: center;
    }
    .listtop a{
        display: block;
        width: 100%;
        background-color: #f8f8f8;
        position: relative;
    }
    .listtop a::before{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.05);
    }
    .listtop a img{
        width: 100%;
        display: block;
    }
    .pro-price p:nth-of-type(1){
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
    }
    .pro-price{
        width: 100%;
        padding-top: 2px;
        text-align: center;
        padding-bottom: 10px;
        position: relative;
    }
    .listtop i{
        font-style: normal;
    }
    .pro-price .price{
        font-size: 12px;
        color: #adadad;
        font-weight: bold;
        display: block;
        line-height: 15px;
        padding-top: 19px;
    }
    .manjian{
        color: #fe053a;
        border: 1px solid #fe053a;
        background-color: #ffedef;
        font-size: 12px;
        padding: 2px;
        border-radius: 3px;
    }
    .detal{
        padding-top: 10px;
        padding-left: 5px;
        margin-bottom: 5px;
        color: #666;
        font-size: 12px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        -webkit-line-clamp: 1;
        word-break: break-all;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }
    .img-box{
        width: 100%;
        text-align: center;
        position: relative;
        text-align: center;
        overflow: hidden;
    }
    .img-box::before{
        content: '';
        display: block;
        width: 97%;
        height: 95%;
        position: absolute;
        top: 5px;
        left: 5px;
        background-color: rgba(0, 0, 0, 0.2)
    }
    .img-box::after{
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        background-color: #fff;
        transform: rotate(45deg);
        position: absolute;
        bottom: -5px;
        left: 50%;
        margin-left: -6px;
    }
    .img-box img{
        width: 97%;
        margin-top: 5px;
    }
    .img-box i{
        position: absolute;
        top: 10px;
        right: 15px;
        color: #fff;
        border: 1px solid #fff;
        padding: 2px;
        border-radius: 4px;
    }
    .img-box i span:nth-of-type(1){
        font-weight: bold;
    }
    .img-box p{
        position: absolute;
        bottom: 30px;
        text-align: center;
        color: #fff;
        font-weight: bold;
        width: 100%;
    }
    .nomore{
        text-align: center;
        padding: 30px;
        color: #d2d2d2;
        font-size: 12px;
        position: relative;
    }
    .nomore::before,.nomore::after{
        content: '';
        display: block;
        width: 35%;
        height: 1px;
        background-color: #d2d2d2;
        position: absolute;
        top: 50%;
    }
    .nomore::before{
        left: 10px;
    }
    .nomore::after{
        right: 10px;
    }
</style>