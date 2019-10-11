<template>
    <main>
        <div class="vnew">
            <div class="vnew-img">
                <img src="../../../assets/images/toutiao.png" alt="">
            </div>
            <div class="vnew-right">
                <ul class="newul">
                    <li v-for="(v,i) in vnew">
                        <div class="l-zi">
                            <p>
                                <i>热门</i>
                                <span>{{v.title1}}</span>
                            </p>
                            <p>
                                <i>热门</i>
                                <span>{{v.title2}}</span>
                            </p>
                        </div>
                        <div class="r-img">
                            <img :src="v.imgSrc" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            vnew:[]
        }
    },
    mounted(){
        this.$http.get('./data/my.json')
        .then((response)=> {
            console.log(response);
            this.vnew=response.data.vnew
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });


        //js
        var an=0;
        clearInterval(timer)
        var timer=setInterval(function() {
            an++;
            if(an>3){
                an=1
                $('.newul').css('top','0px')
            }
            $('.newul').animate({'top':-58*an+'px'},1000)
        }, 3000);
        
    }
}

</script>



<style>
    .vnew{
        display: block;
        width: 94%;
        height: 52px;
        background-color: #fff;
        margin:0px auto;
        border-radius: 15px 0px 0px 15px;
        overflow: hidden;
    }
    .vnew::after{
        content: '';
        display: block;
        clear: both;
    }
    .vnew-img{
        width: 10%;
        float: left;
        padding: 3%;
    }
    .vnew-img img{
        width: 100%;
    }
    .vnew-right{
        float: right;
        width: 84%;
        overflow: hidden;
    }
    .newul{
        position: relative;
    }
    .vnew-right ul{
        list-style: none;
    }
    .vnew-right li{
        height: 100%;
    }
    .vnew-right li::after{
        content: '';
        display: block;
        clear: both;
    }
    .l-zi{
        float: left;
        width: 80%;
        font-size: 12px;
        padding-top: 4%;
    }
    .r-img{
        float: right;
        width: 20%;
    }
    .r-img img{
        width: 100%;
        display: block;
    }
    .l-zi p{
        color: #333;
    }
    .l-zi i{
        font-style: normal;
        font-size: 12px;
        display: inline-block;
        padding: 0 2%;
        border-radius: 10px;
        background-color: #ff820d;
        color: #fff;
        width: 12%;
        text-align: center;
        float: left;
    }
    .l-zi span{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: inline-block ;
        width: 75%;
    }
</style>