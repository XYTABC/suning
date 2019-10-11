<template>
	<main>
		<div class="listheader">
			<div class="backa" @click="back()"></div>
			<div class="biqiang"></div>
		</div>
		<ul class="listnav">
			<li v-for="(v,i) in listnav" @click="add(v,i)" v-bind:class="{bianse:i==num}">
				<img :src="v.listnavImg" alt="">
				<i>{{v.title}}</i>
			</li>
		</ul>
		<component :is="msg"></component>
		<router-view></router-view>
	</main>
</template>

<script>
import  electrical from './electrical.vue'
import choiceness from './choiceness.vue'
import machine from './machine.vue'
import supermarket from './supermarket.vue'
import Looks from './Looks.vue'
	export default {
		data(){
			return{
				msg:'choiceness',
				listnav:[],
				num:0,
				bianse:'bianse'
			}
		},
		components:{
			'electrical': electrical,
			'choiceness': choiceness,
			'machine': machine,
			'supermarket': supermarket,
			'Looks': Looks
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
			this.$http.get('./data/my.json')
		  	.then((response)=> {
		    	console.log(response);
		    	this.listnav=response.data.listnav
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

<style>
	*{
		padding: 0px;
		margin: 0px;
	}
	.listnav{
		width: 100%;
		 display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left;
		list-style: none;
	}
</style>
<style scoped>
	.listheader{
		width: 100%;
		position: relative;
	}
	.backa{
		width: 12%;
		padding-bottom: 12%;
		position: absolute;
		z-index: 2;
	}
	.backa::after{
		z-index: 1;
		content: '';
		display: block;
		position: absolute;
		top: 30%;
		left: 40%;
		width: 30%;
		padding-bottom: 30%;
		border: 1px solid #000;
		border-width: 1px 0px 0px 1px;
		transform: rotate(-45deg);
	}
	.biqiang{
		width: 60%;
		margin: 0 auto;
		text-align: center;
		line-height: 36px;
		padding-bottom: 12%;
	}
	.biqiang::after{
		content: '';
		width: 100%;
		position: absolute;
		height: 45%;
		top: 25%;
		left: 0px;
		background: url('.../../../../assets/images/tittle.png') no-repeat center;
		background-size: 20% 100%;
	}
	.listnav li{
		width: 20%;
		background-color: #ff342d;
		text-align: center;
	}
	.listnav li img{
		width: 30%;
	}
	.listnav li i{
		display: block;
		font-style: normal;
		padding-bottom: 4px;
		color: #fff;
	}
	.listnav .bianse{
		background-color: #cd0031;
	}
</style>