<template>
    <main class="vflashSale-main">
        <div class="vflashSale clear">
            <div class="vs1">
                <p class="fp1">限时抢购</p><p class="miaosha"><i></i>天天秒杀</p>
                <p class="fp2">13点场 距离下场 <span id="hour_show">00</span>:<span id="minute_show">00</span>:<span id="second_show">00</span></p>
                <div class="vs1-b clear">
                    <div>
                        <img src="../../../assets/images/H_1.jpg" alt="">
                        <span>￥19.9</span>
                    </div>
                    <div>
                        <img src="../../../assets/images/H_2.jpg" alt="">
                        <span>￥9.9</span>
                    </div>
                    <div>
                        <img src="../../../assets/images/H_3.jpg" alt="">
                        <span>￥49&nbsp;</span>
                    </div>
                </div>
            </div>
            <div class="vs2">
                <p class="fp1">限时抢购</p><p class="miaosha dapai"><i></i>大牌特卖</p>
                <p class="fp2">拉夏贝尔满198减100</p>
                <div class="vs1-b vs5-b clear">
                    <div>
                        <img src="../../../assets/images/yf01.webp" alt="">
                        <p>正品大牌</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/bb01.webp" alt="">
                        <p>限时折扣</p>
                    </div>
                </div>
            </div>
            <div class="vs3">
                <p class="fp1">好货</p>
                <p class="fp2">有品质好物</p>
                <div class="vs1-b vs3-b haode">
                    <img src="../../../assets/images/ysj.webp" alt="">
                    <p>买点好的</p>
                </div>
            </div>
            <div class="vs4">
                <p class="fp1">领券中心</p>
                <p class="fp2">先领券再购物</p>
                <div class="vs1-b vs3-b">
                    <img src="../../../assets/images/ls.webp" alt="">
                    <p>抢零食好券</p>
                </div>
            </div>
            <div class="vs5">
                <p class="fp1">苏宁拼购</p>
                <p class="fp2">2人拼更实惠 全场包邮</p>
                <div class="vs1-b vs5-b clear">
                    <div>
                        <img src="../../../assets/images/KU4Zw.jpg" alt="">
                        <p>2人拼8.8</p>
                    </div>
                    <div>
                        <img src="../../../assets/images/_x.jpg" alt="">
                        <p>2人拼23</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    mounted(){
        var end=new Date("2019/10/1 00:00:00").getTime();
		var today = new Date().getTime();
		var timer1 = (end - today)/1000;
        var intDiff = parseInt(timer1);
        function timer(intDiff){
		    window.setInterval(function(){
		    var day=0,
		        hour=0,
		        minute=0,
		        second=0;        
		    if(intDiff > 0){
		        hour = Math.floor(intDiff / (60 * 60));
		        minute = Math.floor(intDiff / 60) - (hour * 60);
		        second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
		    }
		    if (minute <= 9) minute = '0' + minute;
		    if (second <= 9) second = '0' + second;
		    $('#hour_show').html(hour);
		    $('#minute_show').html(minute);
		    $('#second_show').html(second);
		    intDiff--;
		    }, 1000);
        }
        $(function(){
		    timer(intDiff);
		});
    }
}
</script>

<style>
    .vflashSale-main{
        margin-top: 2%;
    }
    .vflashSale{
        width: 94%;
        margin: 0 auto;
        background-color: #fff;
        padding-bottom: 5px;
    }

    .clear::after{
        content: '';
        display: block;
        clear: both;
    }
    .vflashSale>div{
        float: left;
    }
    .vs1{
        width: 49%;
    }
    .vs2{
        width: 50%;
        border-left: 1px solid #f2f2f2;
        padding-bottom: 2px;
    }
    .vs2 .fp1{
        color: #FA4B49;
    }
    .vs3{
        width: 24%;
        border-top: 1px solid #f2f2f2;
    }
    .vs3 .fp1{
        color: #F840B1;
    }
    .vs3 .haode{
        color: #FA4B49;
    }
    .vs3-b p{
        position: absolute;
        bottom: 0px;
        left: 0px;
        font-size: 12px;
        display: inline-block;
        background-color: rgba(255, 255, 255, 0.8);
        width: 100%;
    }
    .vs4{
        width: 25%;
        border-top: 1px solid #f2f2f2;
        border-left: 1px solid #f2f2f2;
    }
    .vs5{
        width: 49%;
        border-top: 1px solid #f2f2f2;
        border-left: 1px solid #f2f2f2;
    }
    .vs5 .fp1{
        color: #FF6A0C;
    }
    .fp1{
        padding: 10px 0px 0px 10px;
        color: #333;
        display: inline-block;
    }
    .fp2{
        padding-left: 10px;
        padding-top: 2px;
        padding-bottom: 5px;
        font-size: 12px;
        color: #999;
        height: 15px;
    }
    .fp2 span{
        color: #fff;
        background-color: #000;
        border-radius: 5px;
        padding: 0 1px;
        font-weight: bold;
    }
    .vs1-b>div{
        float: left;
        width: 29%;
        text-align: center;
    }
    .vs1-b>div:nth-of-type(1){
        padding-left: 10px;
    }
    .vs1-b img{
        width: 100%;
    }
    .vs1-b span{
        color: #ff4400;
        font-size: 13px;
    }
    .vs5-b{
        padding-left: 0px;
    }
    .vs5-b>div{
        width: 42%;
        position: relative;
    }
    .vs5-b img{
        width: 100%;
    }
    .vs5-b p{
        padding-left: 0px;
        display: inline-block;
        width: 100%;
        font-size: 14px;
        position: absolute;
        bottom: 2px;
        left: 0px;
        background-color: rgba(255, 255, 255, 0.5);
    }
    .vs2 p{
        padding-left: 5px;
    }
    .vs3-b{
        text-align: center;
        position: relative;
    }
    .vs3-b img{
        width: 80%;
    }
    .miaosha{
        display: inline-block;
        color: #fff;
        background-color: #ff6c33;
        border-radius: 10px;
        font-size: 12px;
        margin-left: 5px;
        padding-left: 10px;
        padding-right: 8px;
        position: relative;
    }
    .miaosha i{
        display: inline-block;
        position: absolute;
        background-color: #fff;
        width: 4px;
        height: 2px;
        left: 4px;
        top: 5px;
    }
    .vs2 .dapai{
        padding-left: 10px;
    }
</style>

