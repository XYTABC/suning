<template>
	<main class="cl">
		<div class="classify">
			<a href="#"  @click="back()"></a>
			<div class="searcha">
				<a></a>
				<a>搜索商品或店铺</a>
			</div>
		</div>
		<div class="classifybtn">
			<div class="fix">
				<ul>
					<li v-for="(v,i) in list" @click="addclass(v,i)" v-bind:class="{active:i==num}">{{v.classify}}</li>
				</ul>
			</div>
			<component :is="classmsg" class="chajian"></component>
		</div>
	</main>
</template>

<script>
import hot from './hot.vue'
import Mobile from './Mobile.vue'
	export default {
		data(){
			return{
				list:[],
				num:0,
				active:'active',
				classmsg:'hot'
			}
		},
		components:{
			'hot': hot,
			'Mobile': Mobile
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			addclass(v,i){
				this.num=i;
				this.classmsg=v.msg
			}
		
		},
		mounted() {
			this.$http.get('./data/classification.json')
			.then((response) => {
				this.list=response.data.clas
			}).catch((err) => {
				
			})
			.then(function () {
		    	// always executed
		  	});
		}
	}
</script>

<style>
	*{
		padding: 0px;
		margin: 0px;
	}
</style>

<style lang="" scoped>
	.cl{
		position: relative;
	}
    .fix{
		position: fixed;
		top: 6%;
		width: 25%;
		height: 100%;
		overflow: auto;
	}
	.classifybtn{
		position: relative;
		width: 100%;
	}
	.chajian{
		font-size: 12px;
		width: 68%;
		position: absolute;
		left: 27%;
		margin: 2%;
		margin-top: 15%;
	}
	.classify{
		width: 100%;
		padding-bottom: 12%;
		background-color: #e6e6e6;
		position: fixed;
		z-index: 5;
		border-bottom: #ccc;
	}
	.classify>a{
		position: absolute;
		top: 0px;
		left: 0px;
		width: 12%;
		height:100%;
		z-index: 2;
	}
	.classify>a::before{
		content:'';
		display: block;
		position: absolute;
		top: 36%;
		left: 40%;
		width: 30%;
		height: 30%;
		border:1px solid #000;
		border-width: 1px 0px 0px 1px;
		transform: rotate(-45deg);
		z-index: 1;
	}
	.searcha{
		position: absolute;
		left: 12%;
		top: 14%;
		width: 83%;
		height: 70%;
		border: 1px solid #ccc;
		background-color: #fff;
		border-radius: 5px;
	}
	.searcha a:nth-of-type(1){
		display: inline-block;
		width: 4%;
		height: 45%;
		position: relative;
		top: 23%;
		left: 2%;
		background: url('../../assets/images/search-icon3.png') no-repeat;
		background-size: 100%;
	}
	.searcha a:nth-of-type(2){
		position: relative;
		top: 12%;
		left: 4%;
		font-size: 13px;
		font-weight: bold;
		width: 90%;
		color: #f9f9f9;
	}
	ul{
		list-style: none;
		width: 100%;
	}
	ul li{
		background-color: #fafafa;
		border-left: 5px solid transparent;
		width: 93%;
		line-height: 4;
		font-size: 12px;
		text-align: center;
		border-right: 1px solid #e9e9e9;
		border-bottom: 1px solid #e9e9e9;
		color: #666;
	}
	.active{
		border-left: 5px solid #ff6600;
		color: #ff6600;
		font-size: 13px;
		line-height: 4s;
		background-color: #fff;
		border-right: 0px;
	}
</style>