<template>
    <main>
        <div class="login-top">
            <div>
                <a href="#">联系客服</a>
                <a href="#" v-if="sp=='pass'">企业注册</a>
            </div>
        </div>
        <component :is="msg"></component>
        <p @click="ddd()" v-if="sp=='pass'" class="login-p">账号密码登录</p>
        <p @click="bbb()" v-if="sp=='codes'" class="login-p">验证码登录</p>
        <div class="login-bto">
            <div>
                <p class="other">其他登录方式</p>
                <div class="f-icons">
                    <a href="#"><img src="../../assets/images/icon_qq.png" alt=""></a>
                    <a href="#"><img src="../../assets/images/icon_epp.png" alt=""></a>
                    <a href="#"><img src="../../assets/images/icon_k.png" alt=""></a>
                </div>
                <p class="pbto">
                    <span>我同意<b>《</b><a href="#">苏宁易购会员章程</a><b>》</b><b>《</b><a href="#">易付宝协议</a><b>》</b></span>
                </p>
            </div>
        </div>
    </main>
</template>

<script>
import pass from './pass.vue'
import codes from './code.vue'
export default {
    data(){
        return{
            msg:'pass',
            sp:'pass'
        }
    },
    components:{
        'pass':pass,
        'codes':codes
    },
    methods:{
        ddd(){
            this.sp='codes',
            this.msg='codes'
        },
        bbb(){
            this.sp='pass',
            this.msg='pass'
        }
    }
}
</script>
<style>
    *{
        padding: 0px;
        margin: 0px;
    }
</style>
<style scoped>
    .login-top{
        width: 100%;
        padding-bottom: 10%;
    }
    .login-top>div{
        position: relative;
        float: right;
        top: 10px;
        right: 5px;
    }
    .login-top a{
        text-decoration: none;
        color: #222;
        font-size: 12px;
        padding-left: 8px;
        padding-right: 8px;
    }
    .login-top a:nth-of-type(2){
        border-left: 1px solid #ccc;
    }
    .login-p{
        text-align: center;
        margin-top: 5%;
    }
    .login-bto{
        position: fixed;
        bottom: 0px;
        width: 100%;
    }
    .login-bto>div{
        width: 70%;
        margin: 0 auto;
    }
    .other{
        color:#999;
        font-size: 12px;
        text-align: center;
        position: relative;
        margin-bottom: 15px;
    }
    .other::before,.other:after{
        content:'';
        display: block;
        width: 35%;
        height: 1px;
        background-color: #999;
        position: absolute;
        top: 50%;
    }
    .other::before{
        left: 0px;
    }
    .other:after{
        right: 0px;
    }
    .f-icons{
        margin-bottom: 15px;
    }
    .f-icons a{
        display: inline-block;
        width: 12%;
    }
    .f-icons img{
        width: 100%;
    }
    .f-icons a:nth-of-type(1),a:nth-of-type(2){
        margin-right: 28%;
    }
    .pbto{
        color: #999;
        font-size: 12px;
        margin-bottom: 20px;
    }
    .pbto a{
        color:#000;
        margin-right: 0px;
    }
    .pbto b{
        color: #000;
    }
</style>