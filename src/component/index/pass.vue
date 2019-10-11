<template>
    <main>
        <div class="codes">
            <div>
                <h2>欢迎登录苏宁易购</h2>
                <div class="tel-input">
                    <input type="text" placeholder="请输入手机号" required pattern="[0-9]{11}" v-model="msg">
                </div>
                <div class="yzm-box">
                    <label for=""></label>
                    <label for=""></label>
                    <label for=""></label>
                    <label for=""></label>
                    <a href="#">获取验证码</a>
                </div>
                <div class="btnbox">
                    <a href="#" type="button" @click="cuo()">登录</a>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            msg:''
        }
    },
    methods:{
        cuo(){
            if(/^1[3456789]\d{9}$/.test(this.msg)){

            }else{
                this.$toast('格式不正确，请重新输入！');
            }
        }
    }
}
</script>
<style scoped>
    .codes{
        margin-top: 10px;
    }
    .codes>div{
        width: 80%;
        margin: 0 auto;
    }
    h2{
        font-weight: normal;
        font-size: 18px;
    }
    .tel-input{
        padding-top: 30px;
    }
    .tel-input input{
        outline: none;
        border: 0px;
        border-bottom: 1px solid #ccc;
        padding: 10px 0px;
        width: 100%;
    }
    .yzm-box{
        padding-top: 15px;
        padding-bottom: 15%;
    }
    .yzm-box label{
        border-bottom: 1px solid #ccc;
        width: 13%;
        margin-right: 8px;
        display: inline-block;
        text-align: center;
        height: 39px;
        line-height: 39px;
        float: left;
    }
    .yzm-box a{
        text-decoration: none;
        display: inline-block;
        color: #ccc;
        border: 1px solid #ccc;
        padding: 4%;
        border-radius: 40px;
        float: right;
        font-size: 13px;
    }
    .btnbox{
        padding-top: 30px;
        
        width: 100%;
        text-align: center;
        
    }
    .btnbox a{
        display: block;
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        padding: 4% 0;
        border-radius: 30px;
        background-image: linear-gradient(-90deg,#f50 0,#ff8f00 100%);
    }
</style>