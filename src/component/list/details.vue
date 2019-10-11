<template>
	<main>
		<div class="heidel"></div>
		<v-lunbo></v-lunbo>
		<v-top class="v-top"></v-top>
		<v-introduct></v-introduct>
		<v-map></v-map>
		<!-- <v-bto class="v-bto"></v-bto> -->
		<div class="bto">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <a @click="change1()" class="open">加入购物车</a>
            <a @click="change2()" class="open">立即购买</a>
            
        </div>
		<a href="#" class="close" @click="change3()"></a>
		<component :is="buymsg" class="jia"></component>
		<br>
        <br>
	</main>
</template>

<script>
import vtop from './details/vtop.vue'
import vlunbo from './details/vlunbo.vue'
// import vbto from './details/vbto.vue'
import vintroduct from './details/introduct.vue'
import lijigoumai from '../list/details/lijigoumai.vue'
import jiarugouwuche from '../list/details/jiarugouwuche.vue'
import vmap from './details/vmap.vue'
	export default {
		data(){
			return{
				msg:'',
				buymsg:''
			}
		},
		components:{
			'v-top':vtop,
			'v-lunbo':vlunbo,
			// 'v-bto':vbto,
			'v-introduct':vintroduct,
			'lijigoumai':lijigoumai,
			'jiarugouwuche':jiarugouwuche,
			'v-map':vmap
		},
		methods:{
			change1(){
				this.buymsg='jiarugouwuche'
			},
			change2(){
				this.buymsg='lijigoumai'
			},
			change3(){
				this.buymsg=''
			}
		},
		mounted(){
			$('.close').click(function(){
				$('.jia').hide();
				$('.heidel').hide();
				$('.close').hide();
			})
			$('.open').click(function(){
				$('.jia').show();
				$('.heidel').show();
				$('.close').show();
			})
			var _this=this;  //修改this指向
			// setTimeout(() => {
				
			// }, 100);
			$(window).scroll(function(event){
					var h=$(window).scrollTop();
					_this.height=$(window).scrollTop();
					if(_this.height>20){
						$('.v-top').css('background-color','#fff')
						$('.v-top').css('border-bottom','1px solid #ccc')
					}else{
						$('.v-top').css('background-color','transparent')
						$('.v-top').css('border-bottom','0px solid #ccc')
					}
					if(_this.height>1500){
						$('.map ul').css({
							position:'fixed',
							top:'6.5%'

						})
					}else{
						$('.map ul').css({
							position:'',
							top:''

						})
					}
				})
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
	.close{
        margin-right: 10px;
        display: none;
		position: fixed;
		top: 23%;;
		z-index: 30;
		right: 10px;
        width:30px;
        height: 30px;
        border-radius:50%;
        border: 1px solid #fff;
        background:url('../../assets/images/color-close.png') no-repeat;
        background-size: 100%;
    }
	.heidel{
		width: 100%;
		height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
		top: 0px;
		z-index: 10;
		display: none;
	}
	.v-top{
		/* background-color: transparent; */
		width: 100%;
		padding-bottom: 12%;
		position: fixed;
		top: 0px;
		z-index: 8;
	}
	/* .v-bto{
		position: fixed;
		bottom: 0px;
		width: 100%;
		background-color: #fff;
	} */
	.jia{
		width: 100%;
        position: fixed;
		bottom: 0px;
		z-index: 20;
        display: none;
    }
    .bto{
        width: 100%;
        position: relative;
        background-color: #fff;
		position: fixed;
		bottom: 0px;
    }
    .bto ul{
        width: 45%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: left;
        list-style-type: none;
        padding-bottom: 1%;
        float: left;
    }
    .bto li{
        width: 33.33%;
        position: relative;
        padding-bottom: 27%;
    }
    .bto li::before{
        content:'';
        position: absolute;
        width: 90%;
        height: 100%;
        top: 0px;
        margin-left: 5%;
        margin-right: 5%;
    }
    .bto li:nth-of-type(1)::before{
        background: url('../../assets/images/action-service.png') no-repeat;
		/* background: url('../../assets/images/ac') */
        background-size: 100%;
    }
    .bto li:nth-of-type(2)::before{
        background: url('../../assets/images/action-shop.png') no-repeat;
        background-size: 100%;
    }
    .bto li:nth-of-type(3)::before{
        background: url('../../assets/images/action-cart.png') no-repeat;
        background-size: 100%;
    }
    .bto a{
        float: right;
        background: linear-gradient(90deg,#ffd000,#ff9200);
        padding: 3% 4%;
        margin-top: 1%;
        color: #fff;
        margin-right: 3px;
		font-size: 13px;
    }
    .bto a:nth-of-type(1){
        border-radius: 0px 10px 10px 0px;
    }
    .bto a:nth-of-type(2){
        border-radius: 10px 0px 0px 10px;
    }
</style>