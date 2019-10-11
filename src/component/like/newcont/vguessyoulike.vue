<template>
    <main class="guessyoulike">
        <div class="around">
            <div class="around-top">
                <img src="../../../assets/images/guessyoulike.webp" alt="">
            </div>
            <div class="guess clear">
                <router-link  class="gue" v-for="(v,i) in guess" to="/details">
                    <div class="imgbox">
                        <img :src="v.gueImg" alt="">
                    </div>
                    <div class="txtbox"><i v-if="v.zy!=''">{{v.zy}}</i>{{v.gueTxt}}</div>
                    <p><span v-if="v.gueSpan1!=''">{{v.gueSpan1}}</span><span v-if="v.gueSpan2!=''">{{v.gueSpan2}}</span></p>
                    <p>{{v.money}}</p>
                </router-link>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return{
            guess:[]
        }
    },
    mounted(){
        this.$http.get('./data/guessyoulike.json')
        .then((response)=> {
            console.log(response);
            this.guess=response.data.guess
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

<style >
    .guessyoulike .guess{
        width: 100%;
        font-family: Arial,Helvetica,STHeiTi,sans-serif;
    }
    .guess>a{
        width: 49%;
        float: left;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 8px;
        display: block;
        text-decoration: none;
        font-size: 12px;
        color: #333;
        line-height: 16px;
    }
    .guess>a:nth-of-type(2n+1){
        margin-right: 6px;
    }
    .gue i{
        font-style: normal;
        background-color: #ff8600;
        border-radius: 8px;
        font-size: 12px;
        color: #fff;
        line-height: 16px;
        padding: 0 5px;
        margin-right: 5px;
    }
    .gue .imgbox{
        width: 90%;
        margin: 10px auto;
        margin-bottom: 0px;
    }
    .gue .imgbox img{
        width: 100%;
    }
    .gue .txtbox{
        margin: 5px auto;
        width: 85%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        -webkit-line-clamp: 2;
        word-break: break-all;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }
    .gue span{
        color: #F50;
        border:1px solid #F50;
        border-radius: 10px;
        padding: 0 5px;
        font-size: 12px;
        padding: 0 5px;
    }
    .gue p{
        padding-left: 10px;
        color: #f40;
        font-size: 17px;
        line-height: 20px;
    }
    .gue p:nth-of-type(1){
        height: 20px;
    }
</style>