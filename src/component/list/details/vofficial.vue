<template>
    <main class="official">
        <div class="offi">
            <div>
                <img src="../../../assets/images/offi.jpg">
            </div>
            <div>
                <div>
                    <a href="#"> 苏泊尔电器官方旗舰店 </a>
                    <p><span>服务体验</span><i></i></p>
                </div>
            </div>
            <div>
                <a href="#">进店逛逛</a>
            </div>
        </div>
        <div class="overflex">
            <p>评价: <em class="greeninfo">8.60 低</em></p>
            <p>物流: <em class="redinfo">9.43 高</em></p>
            <p>售后: <em class="greeninfo">9.04 低</em></p>
        </div>
    </main>
</template>

<style lang="" scoped>
    .official{
        margin-top: 10px;
        background-color: #fff;
    }
    .offi{
        padding: 0px 3%;
        width: 94%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: left;
    }
    .offi>div:nth-of-type(1){
        width: 15%;
        border-radius: 10px;
    }
    .offi>div:nth-of-type(1) img{
        border-radius: 5px;
        width: 100%;
    }
    .offi>div:nth-of-type(2){
        width: 50%;
        padding-top: 2%;
    }
    .offi>div:nth-of-type(3){
        width: 30%;
    }
    .offi>div:nth-of-type(2) a{
         color: #333;
         text-decoration: none;
         font-size: 14px;
    }
    .offi>div:nth-of-type(2) p{
        background-color: #f6f6f6;
        display: inline-block;
        border-radius: 10px;
        padding: 0px 10px;
        line-height: 12px;
    }
    .offi>div:nth-of-type(2) span{
        display: inline-block;
        font-size: 10px;
        color: #222;
        margin: 0 3px 0 0;
    }
    .offi>div:nth-of-type(2) i{
        width: 50px;
        height: 10px;
        display: inline-block;
        background: url('../../../assets/images/sstar.png') no-repeat;
        background-size: 100%;
    }
    .offi>div:nth-of-type(3) a{

        font-size: 13px;
        color:#fff;
        margin-top: 15%;
        display: block;
        width: 50%;
        padding: 5px 10px;
        border-radius: 50px;
        text-decoration: none;
        background: linear-gradient(90deg,#ff8f00,#f50);
    }
    .overflex{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: left;
        font-size: 12px;
    }
    .overflex em{
        font-style: normal;
    }
    .greeninfo{
        color:#14ad0f;
    }
    .redinfo{
        color:red;
    }
</style>