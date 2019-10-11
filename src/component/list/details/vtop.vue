<template>
    <main>
        <div class="details-top" @click="back()">
            <a class="details-back"></a>
            <p>商品详情</p>
            <a class="details-more"></a>
        </div>
    </main>
</template>
<style lang="" scoped>
    .details-top{
        width: 100%;
        position: relative;
    }
    .details-top p{
        text-align: center;
        position: absolute;
        width: 75%;
        left: 12%;
        padding-top: 3%;
    }
    .details-back{
        position: absolute;
        width: 8%;
        display: block;
        padding-bottom: 8%;
        margin-top: 2%;
        margin-left: 2%;
        left: 0px;
        z-index: 2;
        background: url('../../../assets/images/nav-back.png') no-repeat 50%;
        background-size: 100%;
    }
    .details-more{
        position: absolute;
        width: 8%;
        display: block;
        padding-bottom: 8%;
        right: 0px;
        z-index: 2;
        background: url('../../../assets//images/nav-more.png') no-repeat 50%;
        background-size: 100%;
        margin-top: 2%;
        margin-right: 2%;
    }
</style>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>