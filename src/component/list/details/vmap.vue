<template>
    <main class="map">
        <ul>
            <li v-for="(v,i) in list"  @click="add(v,i)" v-bind:class="{redbtn:i==num}">{{v.title}}</li>
        </ul>
        <component :is="msg"></component>
    </main>
</template>

<script>
import  tu1 from './tu1.vue'
import tu2 from './tu2.vue'
import tu3 from './tu3.vue'
	export default {
		data(){
			return{
				msg:'tu1',
                num:0,
                list:[],
				redbtn:'redbtn'
			}
		},
		components:{
			'tu1': tu1,
			'tu2': tu2,
			'tu3': tu3
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			add(v,i){
				this.msg=v.com
				this.num=i
			}
		},
		mounted(){
			this.$http.get('./data/xiangqing.json')
		  	.then((response)=> {
		    	console.log('哈哈哈哈哈哈哈哈哈哈哈哈哈哈'+response);
		    	this.list=response.data.list
		  	})
		  	.catch(function (error) {
		    	console.log(error);
		  	})
		  	.then(function () {
		    	// always executed
		  	});
			//js
		}
	}
</script>

<style lang="" scoped>
    .map{
        margin-top: 10px;
    }
    ul{
        list-style: none;
        text-align: center;
        overflow: hidden;
        background-color: #fff;
		width: 100%;
    }
    li{
        float: left;
        width:20%;
        line-height: 36px;
        font-size: 13px;
        margin: 0px 5px;
		
    }
	li:nth-of-type(1){
		margin-left: 15%;
	}
    .redbtn{
        border-bottom: 3px solid red;
    }
</style>