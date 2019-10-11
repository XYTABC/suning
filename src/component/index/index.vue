<template>
	<main id="index">
		<v-header></v-header>
		<router-view></router-view>
		<ul>
			<li>
				<router-link to="/like">
					<div><img src="../../assets/images/opa1.png" alt=""></div>
					猜你喜欢
				</router-link>
			</li>
			<li>
				<router-link to="/classification">
					<div><img src="../../assets/images/opa2.png" alt=""></div>	
					分类
				</router-link>
			</li>
			<li>
				<router-link to="/list">
					<div><img src="../../assets/images/opa3.png" alt=""></div>
					必抢清单
				</router-link>
			</li>
			<li>
				<router-link to="/buycart">
					<div><img src="../../assets/images/opa4.png" alt=""></div>
					购物车
				</router-link>
			</li>
			<li>
				<router-link to="/mytesco">
					<div><img src="../../assets/images/opa5.png" alt=""></div>
					我的易购
				</router-link>
			</li>
		</ul>
		<img src="../../assets/images/suningapp.png" alt="" class="suningapp">
		<div class="backtop" v-if="height>1000?true:false"></div>
		
	</main>
</template>

<script>
	import vheader from '../like/vheader.vue'
	export default {
		data(){
			return {
				height:0
			}
		},
		components:{
			'v-header':vheader
		},
		mounted(){
			//js
			var _this=this;  //修改this指向
			$(window).scroll(function(event){
				var h=$(window).scrollTop();
				_this.height=$(window).scrollTop();

				$('.backtop').click(function(){
					$('html,body').animate({'scrollTop':0},0)
				})

				if(_this.height>20){
					$('#vheader').css('background-color','#ffbd00')
				}else{
					$('#vheader').css('background-color','transparent')
				}
			})
		},
		watch:{
			
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
#index{
	position: relative;
}
.suningapp{
	position: fixed;
	right: 10px;
	bottom: 160px;
	width: 15%;
}
.backtop{
	width: 40px;
	height: 40px;
	/* background-color: #5b6167; */
	position: fixed;
	bottom: 100px;
	right: 20px;
	border-radius: 50%;
	background: url('../../assets/images/backtop.png') center no-repeat #5B6167;
	background-size: 50% 50%;
	background-repeat: no-repeat;
}
ul{
	list-style: none;
	overflow: hidden;
	position: fixed;
	bottom: 0px;
	z-index: 10;
}
ul li{
	font-size: 13px;
	width: 20%;
	float: left;
	text-align: center;
	background-color: #fff;
}


ul li a{
	color: #545454;
	text-decoration: none;
}
ul li:nth-of-type(1) a{
    color: #ff8b00;
}
ul li div{
	width: 100%;
}
ul li img{
	width: 37%;
}
</style>