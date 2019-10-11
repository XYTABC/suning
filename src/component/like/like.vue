<template>
	<main>
		<!-- 轮播图 -->
		<mt-swipe :auto="4000" class="banner">
			<mt-swipe-item v-for="(v,i) in list">
				<img :src="v" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<v-header-list></v-header-list>
		<v-zimg></v-zimg>
		<v-newhead></v-newhead>
	</main>
</template>

<script>
	import vheaderlist from './vheader-list.vue'
	import zimg from './zimg.vue'
	import newhead from './newcont.vue'
	export default {
		components:{
			'v-header-list':vheaderlist,
			"v-zimg":zimg,
			"v-newhead":newhead
		},
		data(){
			return{
				list:''
			}
		},
		mounted(){
			this.$http.get('./data/banner.json')
		  	.then((response)=> {
		    	console.log(response);
		    	this.list=response.data
		  	})
		  	.catch(function (error) {
		    	console.log(error);
		  	})
		  	.then(function () {
		    	// always executed
		  	});
		}
	}
</script>

<style>
	.banner img{
		width:100%;
	}
	.banner .mint-swipe-items-wrap{
		padding-bottom: 49%;
		height: 0px;
	}
	.banner .mint-swipe-indicator{
		width: 5px;
		height: 3px;
		background-color: rgba(255, 255, 255, 0.5);
		opacity: 1;
	}
	.banner .is-active{
		background:#fff;
		opacity: 1;
	}
</style>

<style scoped>
	
</style>