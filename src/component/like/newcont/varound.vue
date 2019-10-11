<template>
    <main>
        <div class="around">
            <div class="around-top">
                <img src="../../../assets/images/around.webp" alt="">
            </div>
            <div class="around-bto clear">
                <div class="abto ">
                    <div class="vsp">
                        <p class="xpsf xp">新品首发</p><p class="miaosha shoufa"><i></i>大牌新品抢先</p>
                    </div>
                    <p class="delta">万物皆可盘</p>
                    <div class="abimg clear">
                        <div>
                            <img src="../../../assets/images/opa01.webp" alt="">
                        </div>
                        <div>
                            <img src="../../../assets/images/opa02.webp" alt="">
                        </div>
                    </div>
                </div>
                <div class="abto l-border">
                    <div class="vsp">
                        <p class="xpsf">苏宁超市</p>
                    </div>
                    <p class="delta">超市屯好货 优惠享不停</p>
                    <div class="abimg clear">
                        <div>
                            <img src="../../../assets/images/opa03.webp" alt="">
                        </div>
                        <div>
                            <img src="../../../assets/images/opa04.webp" alt="">
                        </div>
                    </div>
                </div>
                <div class="abto r-border t-border">
                    <div class="vsp">
                        <p class="xpsf">苏宁国际</p>
                    </div>
                    <p class="delta">进口爆款第2件半价</p>
                    <div class="abimg clear">
                        <div>
                            <img src="../../../assets/images/opa05.webp" alt="">
                        </div>
                        <div>
                            <img src="../../../assets/images/opa06.webp" alt="">
                        </div>
                    </div>
                </div>
                <div class="abto1 l-border t-border">
                    <div class="vsp">
                        <p class="xpsf">0元试用</p>
                    </div>
                    <p class="delta mate30">华为mate30</p>
                    <div class="abimg1 clear">
                        <div>
                            <img src="../../../assets/images/opa07.webp" alt="">
                        </div>
                    </div>
                </div>
                <div class="abto1 t-border l-border">
                    <div class="vsp">
                        <p class="xpsf">苏宁生鲜</p>
                    </div>
                    <p class="delta">满158减50</p>
                    <div class="abimg1 clear">
                        <div>
                            <img src="../../../assets/images/opa08.webp" alt="">
                        </div>
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
    .around{
        width: 94%;
        margin: 0 auto;
    }
    .around-top{
        width: 100%;
        display: block;
        padding-top: 10px;
    }
    .around-top img{
        width: 100%;
    }
    .around-bto{
        background-color: #fff;
    }
    .around-bto>div{
        float: left;
    }
    .around-bto .abto{
        width: 49%;
    }
    .around-bto .abto1{
        width: 24.5%;
    }
    .vsp{
        width: 100%;
        height: 30px;
        overflow: hidden;
    }
    .around-bto .shoufa{
        background-color: #ff4b7e;
    }
    .around-bto .xpsf{
        color: #333;
        padding-left: 10px;
        padding-top: 10px;
        display: inline-block;
    }
    .around-bto .xp{
        color: #FF4950;
    }
    .delta{
        padding-left: 10px;
        font-size: 12px;
        color: #999;
        height: 20px;
    }
    .abimg{
        width: 100%;
    }
    .abimg>div{
        width: 50%;
        text-align: center;
        float: left;
    }
    .abimg img{
        width: 80%;
    }
    .abimg1>div{
        width: 100%;
        text-align: center;
    }
    .abimg1 img{
        width: 80%;
    }
    .mate30{
        color: #ffba8c;
    }
    .r-border{
        border-right: 1px solid #f2f2f2;
    }
    .t-border{
        border-top: 1px solid #f2f2f2;
    }
    .b-border{
        border-bottom: 1px solid #f2f2f2;
    }
    .l-border{
        border-left: 1px solid #f2f2f2;
    }
</style>