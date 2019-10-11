<template>
    <main class="vnewxia-main">
        <div class="vnewxia">
            <img src="../../../assets/images/xrlb.jpg" alt="" class="xrlb">
            <div class="space-xia">
                <div class="space-left">
                    <p>新会员专享</p>
                    <p>45减5话费卷</p>
                    <div class="sl">
                        <div class="sl-left"><img src="../../../assets/images/xhy01.png" alt=""></div>
                        <div class="sl-right"><img src="../../../assets/images/xhy02.png" alt=""></div>
                    </div>
                </div>
                <div class="space-right">
                    <div class="sr-left">
                        <p>新人专区</p>
                        <p>特价包邮</p>
                        <img src="../../../assets/images/xhy03.png" alt="">
                    </div>
                    <div class="sr-right">
                        <p>今日爆款</p>
                        <p>新人必够</p>
                        <img src="../../../assets/images/xhy04.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    
}
</script>

<style>
    .vnewxia-main{
        margin-top: 2%;
    }
    .vnewxia{
        
        width: 94%;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 15px;
        overflow: hidden;
    }
    .vnewxia .xrlb{
        width: 100%;
    }
    .space-xia{
        width: 100%;
        border-top: 1px solid #f2f2f2;
    }
    .space-xia::after{
        content: '';
        display: block;
        clear: both;
    }
    .space-left{
        float: left;
        width: 50%;
    }
    .space-left p:nth-of-type(1){
        display: inline-block;
        padding: 10px 0px 0px 10px;
        color: #ff6a0c;
        font-size: 15px;
    }
    .space-left p:nth-of-type(2){
        color: #fa4b49;
        padding: 2px 0px 5px 10px;
        font-size: 12px;
    }
    .sl{
        padding-left: 10px;

    }
    .sl::after{
        content: '';
        display: block;
        clear: both;
    }
    .sl-left{
        float: left;
        width: 50%;
    }
    .sl-right{
        float: right;
        width: 50%;
        font-size: 15px;
    }
    .sl img{
        width: 80%;
    }



    .space-right{
        float:right;
        width: 50%;
        text-align: center;
    }
    .space-right::after{
        content: '';
        display: block;
        clear: both;
    }
    .sr-left{
        color: #fa4b49;
        float: left;
        width: 49%;
        border-left: 1px solid #f2f2f2;
        border-right: 1px solid #f2f2f2;
    }
    .sr-left p:nth-of-type(1){
        display: inline-block;
        padding: 10px 0px 0px 0px;
        font-size: 15px;
        text-align: left;

    }
    .sr-left p:nth-of-type(2){
        font-size: 12px;
        padding: 2px 0px 5px 10px;
        text-align: left;
    }
    .sr-right{
        float: right;
        width: 49%;
    }
    .sr-right p:nth-of-type(1){
        display: inline-block;
        text-align: left;
        padding: 10px 0px 0px 0px;
        font-size: 16px;
    }
    .sr-right p:nth-of-type(2){
        font-size: 12px;
        padding: 2px 0px 5px 10px;
        text-align: left;
        color: #999;
    }
    
    .space-right img{
        width: 85%;;
    }
</style>