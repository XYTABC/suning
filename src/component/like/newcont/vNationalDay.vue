<template>
    <main class="NationalDay">
        <a href="#"><img src="../../../assets/images/ND01.png" alt=""></a>
        <div class="ND clear">
            <a href="#" v-for="(n,i) in ND">
                <img :src="n.NDImg" alt="">
            </a>
            <div class="NDshu">
                <a href="#" v-for="(v,i) in NDdetails">
                    <img :src="v.bgImg" alt="">
                    <div>
                        <img :src="v.details" alt="">
                        <p>{{v.cont1}}</p>
                        <p><span>{{v.cont2}}</span></p>
                    </div>
                </a>
            </div>
        </div>
        <a href="#"><img src="../../../assets/images/bbb.png" alt=""></a>
    </main>
</template>

<script>
export default {
    data(){
        return{
            NDdetails:[],
            ND:[]
        }
    },
    mounted(){
        this.$http.get('./data/my.json')
        .then((response)=> {
            console.log(response);
            this.NDdetails=response.data.NDdetails
            this.ND=response.data.ND
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
    .NationalDay{
        width: 100%;
    }
    .NationalDay img{
        width: 100%;
    }
    .NationalDay img{
        display: block;
    }
    .NationalDay>a{
        width: 100%;
    }
    .ND{
        width: 100%;
    }
    .ND a{
        width: 50%;
        display: block;
        float: left;
    }
    .ND img{
        width: 100%;
    }
    .NDshu a:nth-of-type(1){
        width: 26.17%;
        position: relative;
    }
    .NDshu a:nth-of-type(2){
        width: 23.83%;
        position: relative;
    }
    .NDshu a:nth-of-type(3){
        width: 23.83%;
        position: relative;
    }
    .NDshu a:nth-of-type(4){
        width: 26.17%;
        position: relative;
    }
    .NDshu div{
        width: 80%;
        position: absolute;
        top: 8%;
        left: 10%;
        text-align: center;
        color: #fff;
        font-size: 12px;
    }
    
    .NDshu div>img{
        width: 90%;
        margin: 0 auto;
    }
    .NDshu div p:nth-of-type(1){
        margin-top: 20%;
    }
</style>