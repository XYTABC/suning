<template>
    <main id="vheader">
        <router-link to="/classification" class="vh-left">
            <div>
                <img src="../../assets/images/classification-white.png" alt="">
            </div>
        </router-link>
        <router-link to="/search" class="vh-center">
            <div>
                <form action="">
                    <input type="text" class="input" placeholder="商品/店铺">
                </form>
                <i class="search-icon"></i>
            </div>
        </router-link>
        <router-link to="/login" class="vh-right"><span>登录</span></router-link>
    </main>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #vheader{
        background-color: transparent;
        width: 100%;
        position: fixed;
        top: 0px;
        z-index: 10;
    }
    .vh-left,.vh-center,.vh-right{
        display: inline-block;
    }
    .vh-left{
        width: 10%;
        padding-top: 1%;
    }
    .vh-left>div{
        widows: 100%;
        padding-left: 20%;
    }
    .vh-left img{
        width: 60%;
    }
    .vh-center{
        display: inline-block;
        width: 75%;
        position: absolute;
        height: 100%;
        top: 14%;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
    .vh-center>div{
        position: relative;
    }
    .vh-center i{
        position: absolute;
        top: 24%;
        left: 3%;
        width: 6%;
        height: 55%;
        background-image: url('../../assets/images/search.png');
        background-size: 100%;
    }
    .vh-center .input{
        padding:3% 1%;
        padding-left: 10%;
        width: 90%;
        border-radius: 40px;
        border: 0px;
        outline: none;
        background-color: rgba(255, 255, 255, 0.8)
    }
    .vh-left>div{
        width: 100%;
        height: 100%;
    }
    .vh-right{
        width: 10%;
        padding: 0% 2%;
        text-align: center;
        position: absolute;
        top: 30%;
        right: 0%;
    }
    .vh-right .input{
        widows: 100%;
    }
</style>