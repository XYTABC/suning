<template>
    <main class="evaluate">
        <div class="top">
            <div>评价(200+)</div>
            <div>好评率  99%</div>
        </div>
        <div class="evalute-content">
            <ul class="txtul">
                <li>
                    <div class="ec">
                        <span>用户<em>1***2</em></span>
                        <div class="ectxt"></div>
                    </div>
                    <p>
                          试用了下，东西不错，终于解决了早餐的千古难题！目前只用了豆浆功能，口感细腻。 
                    </p>
                    <div>
                        <ul class="txtimg">
                            <li>
                                <img src="../../../assets/images/pjia01.jpg">
                            </li>
                             <li>
                                <img src="../../../assets/images/pjia01.jpg">
                            </li>
                             <li>
                                <img src="../../../assets/images/pjia01.jpg">
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="ec">
                        <span>用户<em>1***2</em></span>
                        <div class="ectxt"></div>
                    </div>
                    <p>
                          试用了下，东西不错，终于解决了早餐的千古难题！目前只用了豆浆功能，口感细腻。 
                    </p>
                    <div>
                        <ul class="txtimg">
                            <li>
                                <img src="../../../assets/images/pjia01.jpg">
                            </li>
                             <li>
                                <img src="../../../assets/images/pjia01.jpg">
                            </li>
                            <li>
                                <img src="../../../assets/images/pjia01.jpg">
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="look">
            <div>
                查看全部评价
            </div>
        </div>
        <div class="top">
            <div>问问已购用户</div>
            <div class="answer">共8条问答 </div>
        </div>
        <div class="quest">
            <div>
                <i>问</i>
                <p>用过的亲，这款机方便好用吗？</p>
                <p>5条回答</p> 
            </div>
            <div>
                <i>问</i>
                <p>用过的亲，这款机方便好用吗？</p>
                <p>5条回答</p> 
            </div>
        </div>
    </main>
</template>

<style lang="" scoped>
    .evaluate{
        background-color: #fff;
        width: 100%;
    }
    .top{
        font-size: 13px;
        padding: 10px;
        padding-bottom: 8%;
    }
    .top>div:nth-of-type(1){
        float: left;
    }
    .top>div:nth-of-type(2){
        float: right;
        margin-right: 31px;
        position: relative;
    }
    .top>div:nth-of-type(2)::after{
        content:'';
        position: absolute;
        width: 15px;
        height: 15px;
        right: -30px;
        top: 9px;
        margin: -8px -3px 0 5px;
        background-size: 15px 15px;
        background: url('../../../assets/images/pjia.png') no-repeat 100%;
    }
    .evalute-content{
        padding-left: 10px;
        padding-right: 10px;
    }
    .evalute-content .txtul li{
        padding: 10px 0px;
       
    }
    .evalute-content .txtul li .ec{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: left;
    }
    .ec span{
        font-size: 12px;
        width: 80%;
    }
    .ec div{
        width: 20%;
        padding-bottom: 5%;
        background-color: red;
        background: url('../../../assets/images/orgstar.png') no-repeat;
        background-size: 72px 12px;
    }
    .txtul li>p{
        font-size: 13px;
        line-height: 20px;
        color:#222;
        padding-bottom: 10px;
    }
    .txtimg{
        overflow: hidden;
        list-style: none;
        border-bottom: 1px solid #ccc;
    }
    .txtul .txtimg li{
        width: 28%;
        padding: 0px;
        float: left;
        padding-right: 5px;
        padding-bottom: 10px;
    }
    .txtul .txtimg li img{
        width: 100%;
    }
    .look{
        width: 100%;
        text-align: center;

    }
    .look div{
        border:1px solid #ccc;
        display: inline-block;
        padding: 2px 5px;
        border-radius: 5px;
    }
    .answer{
        color:#f50!important;
    }
    .quest i{
        font-style: normal;
        width: 23px;
        background-color: #feebe2;
        color:#f50;
        font-size: 12px;
        display: block;
        text-align: center;
        border-radius: 16px;
    }
    .quest{
        padding: 0 10px 10px;
    }
    .quest div{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: left;
        padding: 8px 0px;
    }
    .quest p{
        font-size: 12px;
    }
    .quest p:nth-of-type(1){
        width: 60%;
    }
    .quest p:nth-of-type(2){
        width: 30%;
        text-align: right;
        color:#999;
    }
</style>