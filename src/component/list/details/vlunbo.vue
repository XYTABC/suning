<template>
    <main>
        <md-card>
            <md-card-actions>
            <div class="md-subhead">
            </div>
            <md-button class="md-icon-button"
                        target="_blank"
                        href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/06-pagination-fraction.vue">
            </md-button>
            </md-card-actions>
            <md-card-media>
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide class="imgbox"><img src="../../../assets/images/FPQ01.jpg" alt=""></swiper-slide>
                <swiper-slide class="imgbox"><img src="../../../assets/images/FPQ02.jpg" alt=""></swiper-slide>
                <swiper-slide class="imgbox"><img src="../../../assets/images/FPQ03.jpg" alt=""></swiper-slide>
                <swiper-slide class="imgbox"><img src="../../../assets/images/FPQ04.jpg" alt=""></swiper-slide>
                <swiper-slide class="imgbox"><img src="../../../assets/images/FPQ05.jpg" alt=""></swiper-slide>
                <swiper-slide class="imgbox"><img src="../../../assets/images/FPQ06.jpg" alt=""></swiper-slide>
                <swiper-slide class="imgbox"><img src="../../../assets/images/FPQ07.jpg" alt=""></swiper-slide>
                <swiper-slide class="imgbox"><img src="../../../assets/images/FPQ08.jpg" alt=""></swiper-slide>
                <swiper-slide class="imgbox"><img src="../../../assets/images/FPQ09.jpg" alt=""></swiper-slide>
                <swiper-slide class="imgbox"><img src="../../../assets/images/FPQ10.jpg" alt=""></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            </md-card-media>
        </md-card>
        <div class="lunbo-txt">
            <div class="txttop">
                <div><em>¥</em>1399</div>
                <div><span>11</span>件已抢</div>
                <div></div>
            </div>
            <div class="txtbto">
                <span><del>￥1599.00</del></span>
                <span class="time"></span>
            </div>
        </div>
    </main>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    mounted(){
        
        // 倒计时
        var end=new Date("2019/11/11 00:00:00").getTime();
		var today = new Date().getTime();
		var timer1 = (end - today)/1000;
        var intDiff = parseInt(timer1);//倒计时总秒数量
        function timer(intDiff){
		    window.setInterval(function(){
		    var day=0,
		        hour=0,
                minute=0,
		        second=0;//时间默认值        
		    if(intDiff > 0){
		        day = Math.floor(intDiff / (60 * 60 * 24));
		        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
		        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		    }
		    if (minute <= 9) minute = '0' + minute;
		    if (second <= 9) second = '0' + second;
            $('.time').html('距结束'+' '+day+'天'+hour+':'+minute+':'+second);
		    intDiff--;
		    }, 1000);
		}
		$(function(){
		    timer(intDiff);
		}); 
    }
  }
</script>
<style lang="" scoped>
    .imgbox img{
        width: 100%;
        display: block;
    }
    .swiper-button-prev,.swiper-button-next{
        background-image: url('')
    }
    .lunbo-txt{
        background-color: #eb272a;
        margin-bottom: 20px;
        padding: 8px 12px 14px;
        color: #fff;
    }
    .txttop{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left;
    }
    .txttop em{
        font-style: normal;
        font-size: 24px;
    }
    .txttop>div:nth-of-type(1){
        font-size: 26px;
        width: 22%;
    }
    .txttop>div:nth-of-type(2){
        padding-left: 10px;
        font-size: 12px;
        width: 53%;
        margin-top: 3%;
    }
    .txttop>div:nth-of-type(3){
        width: 75px;
        height: 23px;
        background: url('../../../assets/images/djhtag.png') no-repeat;
        background-size: 75px 23px;
    }
    .txtbto{
        font-size: 12px;
    }
    .time{
        float: right;
        color: #fff180;
    }
</style>