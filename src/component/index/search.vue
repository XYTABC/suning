<template>
    <main>
        <div class="search-top clear">
            <div class="backicon" @click="back()"><a href="#"></a></div>
            <div class="search-box">
                <i></i>
                <form action="#">
                    <input type="text" placeholder="请输入您想找的商品">
                </form>
            </div>
            <div class="search-txt"><a href="#">搜索</a></div>
        </div>
        <dl>
            <dt>热门搜索</dt>
            <dd>
                <a href="#">手机</a>
                <a href="#">Mate30首销</a>
                <a href="#">零食199减129</a>
                <a href="#">洗碗机</a>
                <a href="#">电视</a>
                <a href="#">荣耀9X赠耳机</a>
                <a href="#">每满300减30</a>
                <a href="#">冰箱</a>
                <a href="#">笔记本</a>
                <a href="#">电饭煲</a>
                <a href="#">牛奶</a>
                <a href="#">热水器</a>
                <a href="#">牛奶</a>
            </dd>
        </dl>
    </main>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}
dd{
        display: flex;
        /* flex-direction: column; */
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left;
            
    }
</style>

<style scoped>
    .search-top{
        width: 100%;
        border-bottom: 1px solid #eee;
    }
    .clear::after{
        content: '';
        display: block;
        clear: both;
    }
    .search-top a{
        text-decoration: none;
        color: #000;
    }
    .search-top>div{
        float: left;
    }
    .backicon{
        width: 4%;
        padding: 6% 3%;
        position: relative;
    }
    .backicon a{
        display: inline-block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        padding-bottom: 100%;

    }
    .backicon a::after{
        content: '';
        position: absolute;
        display: block;
        top: 40%;
        left: 40%;
        width: 35%;
        height: 35%;
        border: 1px solid #000;
        border-width: 1px 0px 0px 1px;
        transform: rotate(-45deg);
    }
    .search-box{
        background: #eeeeee;
        width: 75%;
        margin: 8px 0;
        border-radius: 5px;
    }
    .search-box form{
        float: left;
    }
    .search-box i{
        float: left;
        width: 5%;
        padding-top: 5%;
        margin: 2.5%;
        background-color: pink;
        background: url('../../assets/images/search-icon3.png') 0px 0px no-repeat;
        background-size: 100%;
    }
    .search-box input{
        border: 0px;
        outline: none;
        background-color: #eeeeee;
        padding: 5px 0;
        line-height: 20px;
    }
    .search-txt{
        width: 15%;
    }
    .search-txt a{
        text-align: center;
        display: inline-block;
        padding-top: 21%;
        margin-left: 5px;
    }
    dl{
        padding: 1%;
    }
    dt{
        padding-left: 2%;
        padding-top: 2%;
        padding-bottom: 2%;
    }
    dd{
        width: 100%;
            
    } 
    dd a{
        text-decoration: none;
        font-size: 12px;
        width: 31%;
        background-color: #eee;
        text-align: center;
        line-height: 28px;
        border-radius: 5px;
        color: #333;
        margin: 1% 0;
    }
    dd a:nth-of-type(2),a:nth-of-type(3),a:nth-of-type(6),a:nth-of-type(7){
        color: #ff6600;
    }
</style>