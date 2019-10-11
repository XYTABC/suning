<template>
    <main>
        <div class="pass">
            <div>
                <h2>欢迎登录苏宁易购</h2>
                <div class="pass-input">
                    <input type="text" placeholder="请输入手机号/用户名/邮箱" required pattern="[0-9]{11}">
                </div>
                <div class="passbox">
                    <input type="text" placeholder="请输入密码">
                    <i></i>
                    <i></i>
                    <a href="#">忘记密码</a>
                </div>
                <div class="btnbox">
                    <a href="#">登录</a>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
    .pass{
        margin-top: 10px;
    }
    .pass>div{
        width: 80%;
        margin: 0 auto;
    }
    h2{
        font-weight: normal;
        font-size: 18px;
    }
    .pass-input{
        padding-top: 30px;
    }
    .pass-input input{
        outline: none;
        border: 0px;
        border-bottom: 1px solid #ccc;
        padding: 10px 0px;
        width: 100%;
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
    .passbox{
        padding-top: 25px;
        border-bottom: 1px solid #ccc;
    }
    .passbox input{
        padding: 3% 0;
        outline: none;
        border:0px;
        display: inline-block;
        width: 40%;
    }
    .passbox a{
        text-decoration: none;
        color: #333;
        font-size: 12px;
        float: right;
        position: relative;
        top: 5px;
    }
    .passbox i{
        position: relative;
        top: 5px;
        display: inline-block;
        width: 8%;
        height: 20px;
        margin: 0px 4%;
    }
    .passbox i:nth-of-type(1){
        margin-left: 8%;
    }
    .passbox i:nth-of-type(1){
        background: url('../../assets/images/icon_close.png') no-repeat;
        background-size: 100%;
    }
    .passbox i:nth-of-type(2){
        background: url('../../assets/images/eye_close.png') no-repeat;
        background-size: 100%;
    }
</style>