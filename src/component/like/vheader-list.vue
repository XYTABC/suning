<template>
	<main class="vhlist">
		<ul>
			<li v-for="(v,i) in list">
				<div>
					<img :src="v.vhimgSrc" alt="">
				</div>
				<p>{{v.title}}</p>
			</li>
		</ul>
	</main>
</template>
	
<script>
	export default{
		data(){
			return{
				list:''
			}
		},
		mounted(){
			this.$http.get('./data/vheaderlist.json')
		  	.then((response)=> {
		    	console.log(response);
		    	this.list=response.data.headerlist
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

<style scoped>
.vhlist{
	padding-bottom: 4%;
}
ul{
	overflow: hidden;
}
ul li{
	float: left;
	width: 20%;
	list-style: none;
	text-align: center;
	font-size: 12px;
	color: #666;
	padding-top: 3%;
}
ul li img{
	width: 56%;
}
ul li>div{
	width: 100%;
}
</style>

