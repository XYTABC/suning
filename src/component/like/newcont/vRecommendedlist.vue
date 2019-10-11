<template>
    <main>
        <div class="around">
            <div class="around-top">
                <img src="../../../assets/images/tjbd.png" alt="">
            </div>
            <div class="renqibang clear">
                <a href="#">
                    <div class="asc">
                        <img src="../../../assets/images/renqibang02.png" alt="" class="renqibang02">
                        <img src="../../../assets/images/renqibang01.webp" alt="" class="renqibang01">
                        <p><span>人气榜</span></p>
                        <p>鲜嫩水产海鲜榜</p>
                        <p>卖爆3453件</p>
                    </div>
                </a>
                <a href="#">
                    <div class="asc">
                        <ul>
                            <li>
                                <img src="../../../assets/images/renqibang03.png" alt="" class="renqibang02">
                                <img src="../../../assets/images/renqibang03.webp" alt="" class="renqibang01">
                                <p><span>人气榜</span></p>
                                <p>鲜嫩水产海鲜榜</p>
                                <p>卖爆3453件</p>
                            </li>
                            <li>
                                <img src="../../../assets/images/renqibang03.png" alt="" class="renqibang02">
                                <img src="../../../assets/images/renqibang04.webp" alt="" class="renqibang01">
                                <p><span>人气榜</span></p>
                                <p>鲜嫩水产海鲜榜</p>
                                <p>卖爆3453件</p>
                            </li>
                            <li>
                                <img src="../../../assets/images/renqibang03.png" alt="" class="renqibang02">
                                <img src="../../../assets/images/renqibang05.webp" alt="" class="renqibang01">
                                <p><span>人气榜</span></p>
                                <p>鲜嫩水产海鲜榜</p>
                                <p>卖爆3453件</p>
                            </li>
                            <li>
                                <img src="../../../assets/images/renqibang03.png" alt="" class="renqibang02">
                                <img src="../../../assets/images/renqibang03.webp" alt="" class="renqibang01">
                                <p><span>人气榜</span></p>
                                <p>鲜嫩水产海鲜榜</p>
                                <p>卖爆3453件</p>
                            </li>
                        </ul>
                    </div>
                </a>
                <a href="#">
                    <div class="asc">
                        <img src="../../../assets/images/renqibang02.png" alt="" class="renqibang02">
                        <img src="../../../assets/images/renqibang02.webp" alt="" class="renqibang01">
                        <p><span>人气榜</span></p>
                        <p>鲜嫩水产海鲜榜</p>
                        <p>卖爆3453件</p>
                    </div>
                </a>
            </div>
            <div class="around-bto clear">
                <div class="abto r-border">
                    <div class="vsp">
                        <p class="xpsf tjbd">畅销家用空调榜</p><span class="rqb">人气榜</span>
                    </div>
                    <p class="delta">卖爆1151件</p>
                    <div class="abimg clear">
                        <div>
                            <img src="../../../assets/images/tjbd01.webp" alt="">
                        </div>
                        <div>
                            <img src="../../../assets/images/tjbd02.webp" alt="">
                        </div>
                    </div>
                </div>
                <div class="abto b-border">
                    <div class="vsp">
                        <p class="xpsf tjbd">时尚保鲜冰箱榜</p><span class="rqb">人气榜</span>
                    </div>
                    <p class="delta">卖爆1151件</p>
                    <div class="abimg clear">
                        <div>
                            <img src="../../../assets/images/tjbd03.webp" alt="">
                        </div>
                        <div>
                            <img src="../../../assets/images/tjbd04.webp" alt="">
                        </div>
                    </div>
                </div>
                <div class="abto t-border">
                    <div class="vsp">
                        <p class="xpsf tjbd">休闲饼干零食榜</p><span class="rqb">人气榜</span>
                    </div>
                    <p class="delta">卖爆9088件</p>
                    <div class="abimg clear">
                        <div>
                            <img src="../../../assets/images/tjbd05.webp" alt="">
                        </div>
                        <div>
                            <img src="../../../assets/images/tjbd06.webp" alt="">
                        </div>
                    </div>
                </div>
                <div class="abto l-border">
                    <div class="vsp">
                        <p class="xpsf tjbd">人气手机榜</p><span class="rqb">人气榜</span>
                    </div>
                    <p class="delta">卖爆8673件</p>
                    <div class="abimg clear">
                        <div>
                            <img src="../../../assets/images/tjbd07.webp" alt="">
                        </div>
                        <div>
                            <img src="../../../assets/images/tjbd08.webp" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        //js
        var vR=0;
        clearInterval(timer)
        var timer=setInterval(function() {
            vR++;
            if(vR>3){
                vR=0
                $('.renqibang ul').css('top','0px')
            }
            $('.renqibang ul').animate({'top':-100*vR+'%'},1000)
        }, 3000);
    }
}
</script>

<style>
    .tjbd{
        font-size: 12px;
        font-weight: bold;
    }
    .rqb{
        font-size: 12px;
        color: #ab813a;
        background-color: #f9f5ee;
        margin-left: 5%;
        padding: 0 6px;
        border-radius: 5px;
    }
    .renqibang{
        width: 100%;
        overflow: hidden;
    }
    .renqibang a{
        background-color: #fff;
        width: 32%;
        float: left;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        font-size: 13px;
        position: relative;
        padding-bottom: 46%;
    }
    .asc{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .renqibang a:nth-of-type(2){
        margin: 0px 2%;
    }
    .renqibang01{
        width: 90%;
        margin: 0 5%;
    }
    .renqibang02{
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }
    .renqibang p{
        position: relative;
        z-index: 2;
        text-align: center;
        color: #fff;
        line-height: 18px;
    }
    .renqibang p:nth-of-type(1){
        position: relative;
        color: #ab813a;
    }
    .renqibang span{
        background-color: #fff;
        border-radius: 10px;
        border: 1px solid #ab813a;
    }
    .renqibang li{
        height: 33.33%;
        position: relative;
    }
    .renqibang ul{
        position: relative;
        height: 300%;
    }
    .renqibang li span{
        color: #ff8600;
    }
</style>