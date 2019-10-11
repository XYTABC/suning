<template>
	<main>
		<div class="tesco-top">
			<a href="#" @click="back()"></a>
			<p>我的易购</p>
			<a href="#"><img src="../../assets/images/mored.png" alt=""></a>
		</div>
		<div class="tesco-sec">
			<a href="#" class="setting"></a>
			<div class="tesco-con">
				<div>
					<img src="../../assets/images/logosuning.jpg" alt="">
					<a href="#">去实名认证</a>
				</div>
				<div>
					<div class='con2'>
						<span>177******42</span>
						<a href="#"></a>
					</div>
					<div class="con21">
						<span>升级权益<i></i></span>
					</div>
				</div>
			</div>
			<a class="supervip"><span>免费试用</span></a>
		</div>
		<div class="con-three">
			<a href="#">
				<b>0</b>
				<span>优惠券</span>
			</a>
			<a href="#">
				<b>0</b>
				<span>领云钻</span>
			</a>
			<a href="#">
				<b>0</b>
				<span>任性付</span>
				<p>未开通</p>
			</a>
			<a href="#">
				<b>+0.00</b>
				<span>零钱宝</span>
				<p>立即转入</p>
			</a>
			<a href="#">
				<i></i>
				<span>我的钱包</span>
			</a>
		</div>
		<div class="mydingdan">
			<div class="order">
				<span>我的订单</span>
				<a href="#">查看全部订单&nbsp;&gt;</a>
			</div>
			<div class="mynto">
				<a href="#">
					<i></i>
					<span>待支付</span>
				</a>
				<a href="#">
					<i></i>
					<span>待收货</span>
				</a>
				<a href="#">
					<i></i>
					<span>评价有礼</span>
				</a>
				<a href="#">
					<i></i>
					<span>退还/售后</span>
				</a>
				<a href="#">
					<i></i>
					<span>购物清单</span>
				</a>
			</div>
		</div>
		<div class="tesco-bto">
			<a href="#">
				<img src="../../assets/images/tesco-bto01.png" alt="">
				<span>商品关注</span>
			</a>
			<a href="#">
				<img src="../../assets/images/tesco-bto02.png" alt="">
				<span>店铺关注</span>
			</a>
			<a href="#">
				<img src="../../assets/images/tesco-bto03.png" alt="">
				<span>足迹</span>
			</a>
			<a href="#">
				<img src="../../assets/images/tesco-bto04.png" alt="">
				<span>客户服务</span>
			</a>
			<a href="#">
				<img src="../../assets/images/tesco-bto05.png" alt="">
				<span>必抢清单</span>
			</a>
			<a href="#">
				<img src="../../assets/images/tesco-bto06.png" alt="">
				<span>拼购</span>
			</a>
			<a href="#">
				<img src="../../assets/images/tesco-bto07.png" alt="">
				<span>校园VIP</span>
			</a>
			<a href="#">
				<img src="../../assets/images/tesco-bto08.png" alt="">
				<span>我的试用</span>
			</a>
		</div>
		<div class="tesco-bottom">
			<div>
				<router-link to="/like">
					<img src="../../assets/images/tesco01.png" alt="">
				</router-link>
				<router-link to="/classification">
					<img src="../../assets/images/tesco02.png" alt="">
				</router-link>
				<router-link to="/mytesco">
					<img src="../../assets/images/tesco03.png" alt="">
				</router-link>
				<router-link to="/search">
					<img src="../../assets/images/tesco04.png" alt="">
				</router-link>
				<router-link to="/buycart">
					<img src="../../assets/images/tesco05.png" alt="">
				</router-link>
			</div>
		</div>
		<v-youlike></v-youlike>
	</main>
</template>

<script>
</script>

<style>
	*{
		padding: 0px;
		margin: 0px;
	}
</style>
<script>
import youlike from '../like/newcont/vguessyoulike'
export default {
	components:{
		'v-youlike':youlike
	},
	methods:{
		back(){
			this.$router.go(-1);
		}
	}
}
</script>
<style scoped>
    main{
		background-color: #f2f2f2;
		width: 100%;
	}
	.tesco-top{
		width: 100%;
		padding-bottom: 12%;
		background-color: #fff;
	}
	.tesco-top p{
		float: left;
		width: 76%;
		text-align: center;
		line-height: 40px;
	}
	.tesco-top a{
		display: block;
		float: left;
		width: 12%;
		padding-bottom: 12%;

	}
	.tesco-top a:nth-of-type(1){
		position: relative;
	}
	.tesco-top a:nth-of-type(1)::after{
		content:'';
		display: block;
		position: absolute;
		top: 35%;
		left: 40%;
		width: 30%;
		height: 30%;
		transform: rotate(-45deg);
		border: 1px solid #000;
		border-width: 1px 0px 0px 1px;
	}
	.tesco-top a:nth-of-type(2){
		padding-bottom: 0px;
	}
	.tesco-top a img{
		padding-top: 20%;
		width: 60%;
	}
	.tesco-sec{
		width: 90%;
		padding: 10% 5% 10% 5%;
		background: url('../../assets/images/resco-bg.jpg');
		background-size: 100% 100%;
		position: relative;
	}
	.setting{
		position: absolute;
		right: 3%;
		top: 10%;
		width: 20px;
		height: 20px;
		background: url('../../assets/images/setting.png') no-repeat;
		background-size: 100% 100%;
	}
	.tesco-con{
		width: 100%;
	}
	.tesco-con>div:nth-of-type(1){
		width: 20%;
		position: relative;
		display: inline-block;
		text-align: center;
	}
	.tesco-con>div:nth-of-type(1) a{
		width: 90%;
		left: 0px;
		font-size: 12px;
		text-decoration: none;
		position: absolute;
		bottom: 5%;
		background-color: #666;
		border-radius: 10px;
		color: #fff;
		padding: 0px 5px;
	}
	.tesco-con>div:nth-of-type(2){
		display: inline-block;
		position: relative;
		top: -15px;;
	}
	.tesco-con>div:nth-of-type(1) img{
		width: 80%;
		border-radius: 50%;
		border:2px solid #eaaa00;
	}
	.con2{
		font-size: 12px;
		
	}
	.con2 a{
		display: inline-block;
		width: 13px;
		height: 13px;
		background: url('../../assets/images/erweima.png') no-repeat;
		background-size: contain;

	}
	.con21 span{
		color: #fff;
		background: #000;
		display: inline-block;
		padding: 0px 5px;
		font-size: 12px;
		border-radius: 10px;
	}
	.con21 i{
		display: inline-block;
		width: 5px;
		height: 10px;
		background: url('../../assets/images/con21.png') no-repeat;
		background-size: contain;
	}
	.supervip{
		position: absolute;
		width: 30%;
		height: 50%;
		right: 0%;
		bottom: 0%;
		background-color: red;
		background: url('../../assets/images/super-vip-bg1.png') no-repeat;
		background-size: 100%;
	}
	.supervip span{
		position: relative;
		top: 55%;
		left: 30%;
		font-size: 12px;
		display: block;
		transform: rotate(6deg);
		width: 50%;
	}
	.con-three{
		width: 100%;
		display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left;
		padding-top: 15px;
		background-color: #fff;
		margin-bottom: 3%;
		text-align: center;
	}
	.con-three a{
		width: 20%;
		text-decoration: none;
		color: #222;
		font-size: 13px;
		text-align: center;
	}
	.con-three b{
		display: block;
		text-align: center;
		font-weight: normal;
		height: 20px;
	}
	.con-three i{
		display: block;
		text-align: center;
		font-style: normal;
		width: 28%;
		height: 20px;
		margin-left: 35%;
		background: url('../../assets/images/qianbao.png') no-repeat;
		background-size: 100% 100%;
	}
	.con-three p{
		font-size: 12px;
		color: #f60;
	}
	.mydingdan{
		background-color: #fff;
		width: 100%;
	}
	.order{
		padding: 10px;
		border-bottom: 1px solid #f2f2f2;
	}
	.order a{
		text-decoration: none;
		color: #666;
		font-size: 12px;
		float: right;
	}
	.mynto{
		width: 100%;
		text-align: center;
		display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left;
		padding: 5% 0;
		margin-bottom: 3%;
	}
	.mynto a{
		width: 20%;
		text-decoration: none;
		color: #222;
		font-size: 12px;
		
	}
	.mynto a:nth-of-type(1) i{
		background: url('../../assets/images/mynto01.png') no-repeat;
		background-size: 100%;
		margin-left: 35%;
	}
	.mynto a:nth-of-type(2) i{
		background: url('../../assets/images/mynto02.png') no-repeat;
		background-size: 100%;
		margin-left: 35%;
	}
	.mynto a:nth-of-type(3) i{
		background: url('../../assets/images/mynto03.png') no-repeat;
		background-size: 100%;
		margin-left: 35%;
	}
	.mynto a:nth-of-type(4) i{
		background: url('../../assets/images/mynto04.png') no-repeat;
		background-size: 100%;
		margin-left: 35%;
	}
	.mynto a:nth-of-type(5) i{
		background: url('../../assets/images/mynto05.png') no-repeat;
		background-size: 100%;
		margin-left: 35%;
	}
	.mynto i{
		font-style: normal;
		display: block;
		width: 21px;
		height: 21px;
	}
	
	.mynto span{
		padding-top: 5px;
		display: block;
	}
	.tesco-bto{
		width: 100%;
		display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left;
		background-color: #fff;
	}
	.tesco-bto a{
		display: block;
		width: 25%;
		text-align: center;
		text-decoration: none;
		font-size: 12px;
		padding: 4% 0;
		padding-bottom: 2%;
		color: #222;
	}
	.tesco-bto a img{
		width: 30%;
		display: block;
		margin: 0 auto;
		margin-bottom: 5px;
	}
	.youlike{
		padding: 10px 35%;
	}
	.youlike img{
		width: 100%;
	}
	.tesco-bottom{
		position: fixed;
		bottom: 0px;
		width: 100%;
		background-color: #fff;
	}
	.tesco-bottom>div{
		display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left;
		padding-top: 5px;
		padding-bottom: 10px;
	}
	.tesco-bottom a{
		display: block;
		width: 20%;
	}
	.tesco-bottom img{
		width: 45%;
		display: block;
		margin: 0 auto;
	}
</style>