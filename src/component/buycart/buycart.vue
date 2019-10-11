<template>
	<main>
		<!-- 头部 -->
		<div class="tesco-top">
			<a href="#" @click="back()"></a>
			<p>购物车</p>
			<a href="#"><img src="../../assets/images/mored.png" alt=""></a>
		</div>
		<!-- 底部 -->
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
		<!-- 购物车 -->
		<div class="buycart">
			<div class="header01">
				<div class="yuanquan1 " v-if="!qx" @click="quanxuan()"></div>
				<div class="yuanquan1 yq" v-if="qx" @click="quanxuan()"></div>
				<div class="snzy">苏宁自营</div>
			</div>
			<div class="wbox" v-for="(v,i) in cart">
				<p v-show="false">{{a}}</p>
				<div class="wboxleft">
					<a href="#">
						<img :src="v.imgsrc" alt="">
					</a>
					<div class="yuanquan1 " v-if="!tf[i]" @click="change(i)"></div>
					<div class="yuanquan1 yq" v-if="tf[i]" @click="change(i)"></div>
				</div>
				<div class="wboxright">
					<p> {{v.title}}</p>
					<p></p>
					<div class="null-cont"></div>
					<div class="wbox-bto">
						<div class="wbox-bto-left">
							<p>¥{{money[i]}}  </p>
						</div>
						<div class="wbox-bto-right">
							<a href="#" @click="add(i)"></a>
							<input type="text" :value="shuliang[i]">
							<a href="#" @click="sub(i)"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="jiesuan">
			<div>
				<div class="jiesuan01">
					<div class="yuanquan1 " v-if="!qx" @click="quanxuan()"></div>
					<div class="yuanquan1 yq" v-if="qx" @click="quanxuan()"></div> 全选
				</div>
				<a href="#" :class="{jiesuan03:true,bs:tf[i]=false}">去结算({{nums}})</a>
				<div class="jiesuan02">
					<p>合计：<span>￥{{numsum}}</span></p>
					<span>免运费</span>
				</div>
			</div>
		</div>
		<!-- {{a}} -->
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
export default {
	data(){
		return{
			a:0,
			tf:[false,false],
			shuliang:[1,1],
			numsum:0,
			money:[70,30],
			nums:0,
			num:[0,0],
			qx:false,
			cart:[
				{
					"imgsrc":"./data/images/kuaizi.jpg",
					
					"title":"双枪 幸运三叶草合金筷 KZ4061 金色十双装"
				},
				{
					"imgsrc":"./data/images/kuaizi.jpg",
				
					"title":"双枪 幸运三叶草合金筷 KZ4061 金色十双装"
				}
			]
		}
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		add(i){
			this.shuliang[i]++;
			this.tf[i]=true;
			if(this.tf[0]==true&&this.tf[1]==true){
				this.qx=true
			}else{
				this.qx=false
			}
			this.a++
			this.num[i]=this.shuliang[i];
			
			if(this.tf[i]==true){
				this.numsum=this.money[i]*this.shuliang[i]
				this.nums=this.shuliang[i]
			}
			if(this.tf[0]==true&&this.tf[1]==true){
				this.numsum=this.money[0]*this.shuliang[0]+this.money[1]*this.shuliang[1]
				this.nums=this.shuliang[0]+this.shuliang[1]
			}
			
			
		},
		sub(i){
			this.shuliang[i]--;
			this.tf[i]=true;
			if(this.tf[0]==true&&this.tf[1]==true){
				this.qx=true
			}else{
				this.qx=false
			}
			this.a--
			
			if(this.shuliang[i]<=0){
				this.shuliang[i]=1;
			}
			this.num[i]=this.shuliang[i];
			this.numsum=this.money[0]*this.shuliang[0]+this.money[1]*this.shuliang[1]
			if(this.tf[i]==true){
				this.numsum=this.money[i]*this.shuliang[i]
				this.nums=this.shuliang[i]
			}
			if(this.tf[0]==true&&this.tf[1]==true){
				this.numsum=this.money[0]*this.shuliang[0]+this.money[1]*this.shuliang[1]
				this.nums=this.shuliang[0]+this.shuliang[1]
			}
		},
		change(i){
			this.tf[i]=!this.tf[i]
			if(this.tf[0]==true&&this.tf[1]==true){
				this.qx=true
			}else{
				this.qx=false
			}
			this.a++
			if(this.tf[i]==true){
				this.numsum+=this.money[i]*this.shuliang[i]
				this.nums+=this.shuliang[i]
				
			}else{
				this.numsum-=this.money[i]*this.shuliang[i]
				this.nums-=this.shuliang[i]
			}
		},
		quanxuan(){
			this.qx=!this.qx
			if(this.qx==true){
				this.tf[0]=true
				this.tf[1]=true
				this.numsum=this.money[0]*this.shuliang[0]+this.money[1]*this.shuliang[1]
				this.nums=this.shuliang[0]+this.shuliang[1]
			}else{
				this.tf[0]=false
				this.tf[1]=false
				this.numsum=0
				this.nums=0
			}
		}
	},
	mounted(){
		
	}
}
</script>
<style scoped>
.jiesuan .bs{
	background-color: #f60;
}
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
		line-height: 38px;
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
	.cart{
		padding-top: 78px;
		text-align: center;
		padding-bottom: 30px;
	}
	.cart span{
		display:inline-block;
		width: 10%;
		padding-bottom: 18%;
		background: url('../../assets/images/null-cart.png') no-repeat;
		background-size: 100%;
	}
	.cart p{
		color: #666;
		padding-bottom: 10px;
	}
	.cart a{
		text-decoration: none;
		display: inline-block;background-color: #fff;
		padding: 5px 20px;
		border: 1px solid #666;
		color: #000;
	}
	.buycart{}
	.header01{
		background-color: #fff;
	}
	.yuanquan1{
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid #DCDCDC;
		margin: 10px 5px 0px 5px;
	}
	.yq{
		background: url('../../assets/images/yuanquan.png') center no-repeat #f60;
		background-size: 80%;
	}
	.snzy{
		max-width: 70%;
		word-break: keep-all;
		white-space: nowrap;
		text-overflow: ellipsis;
    	overflow: hidden;
		display: inline-block;
		color: #353d44;
		font-size: 14px;
		position: relative;
		padding-left: 30px;
	}
	.snzy::before{
		position: absolute;
		content:'';
		left: 5px;
		display: block;
		width: 18px;
		height: 18px;
		background: url('../../assets/images/Suning.png') no-repeat;
		background-size: 100%;
	}
	.wbox{
		display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left;
		padding-top: 5%;
	}
	.wboxleft{
		width: 28%;
		display: inline-block;
		padding-left: 10%;
		padding-right: 2%;
		padding-bottom: 10%;
		position: relative;
	}
	.wboxleft img{
		width: 100%;
	}
	.wboxright{
		width: 60%;
		display: inline-block;
	}
	.wboxright p{
		font-size: 13px;
	}
	.wbox-bto-left p{
		color: #f60;
	}
	.null-cont{
		height: 55%;
	}
	.wbox-bto{
		display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left;
	}
	.wbox-bto-left{
		width: 45%
	}
	.wboxleft .yuanquan1{
		position:absolute;
		top:30%;
		left: 2%;
	}
	.wbox-bto-right{
		width: 50%;
		/* display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: left; */
		margin-right: 5%;
	}
	.wbox-bto-right input{
		display: block;
		width: 30%;
		height: 100%;
		text-align: center;
		float: right;
		border: 1px solid #ccc;;
		border-left: 0px;
		border-right: 0px;

	}
	.wbox-bto-right a{
		display: block;
		text-decoration: none;
		width: 20%;
		height: 100%;
		border: 1px solid #ccc;
		float: right;
	}
	.wbox-bto-right a:nth-of-type(2){
		background: url('../../assets/images/jian.png') no-repeat 2px 50%;
		background-size: 80%;
	}
	.wbox-bto-right a:nth-of-type(1){
		background: url('../../assets/images/add (1).png') no-repeat 2px 0px;
		background-size: 80%;
	}
	.jiesuan{
		position: fixed;
		bottom: 10%;
		width: 100%;
	}
	.jiesuan>div{
		position: relative;
	}
	.jiesuan02{
		float: right;
		position: relative;
		margin-right: 2%;
	}
	.jiesuan02 p{
		font-size: 12px;
		padding: 5px 0px;
	}
	.jiesuan02 p span{
		color: #f60;
		font-size: 16px;
		font-weight: bold;
	}
	.jiesuan02>span{
		font-size: 12px;
		position: absolute;
		right:0px;
	}
	.jiesuan01{
		display: inline-block;
		width: 30%;
	}
	.jiesuan03{
		float: right;
		text-align: center;
		width: 30%;
		background-color: #ccc;
		padding: 0px 10px;
		line-height: 50px;
		text-decoration: none;
		color: #fff;
	}
</style>