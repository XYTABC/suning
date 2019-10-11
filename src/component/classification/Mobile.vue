<template>
    <main>
        <div class="class-title">手机通讯</div>
        <ul>
            <li v-for="(v,i) in mobile">
                <a href="#">
                    <div><img :src="v.classimg"></div>
                    <i>{{v.title}}</i>
                </a>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    data(){
        return{
            mobile:[]
        }
    },
    mounted() {
        this.$http.get('./data/mobile.json')
			.then((response) => {
				this.mobile=response.data.mobile
			}).catch((err) => {
				
			})
			.then(function () {
		    	// always executed
		  	});
    }
}
</script>

<style lang="" scoped>
    .class-title{
        color: #ffb452;
        padding-top: 32px;
        padding-bottom: 10px;
        position: relative;
    }
    .class-title::before{
        content: '';
        display: block;
        position: absolute;
        width: 80%;
        height: 1px;
        background-color: #f2f2f2;
        top: 70%;
        left: 20%;
    }
    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left;
    }
    li{
        list-style: none;
        width: 33.3%;
        margin-top: 5%;
    }
    li a{
        text-align: center;
        display: inline-block;
        width: 100%;
        text-decoration: none;
    }
    li img{
        width: 70%;
        padding-bottom: 5px;
        height: 60px;
    }
    li i{
        display: block;
        font-style: normal;
        color: #666;
    }
</style>