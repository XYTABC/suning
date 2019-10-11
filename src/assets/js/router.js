import VueRouter from 'vue-router'

import index from '../../component/index/index.vue'
import like from '../../component/like/like.vue'
import classification from '../../component/classification/classification.vue'
import list from '../../component/list/list.vue'
import buycart from '../../component/buycart/buycart.vue'
import mytesco from '../../component/mytesco/mytesco.vue'
import details from '../../component/list/details.vue'
import search from '../../component/index/search.vue'
import login from '../../component/index/login.vue'

export default new VueRouter({
	routes:[
		{
			path:'/',component:index,
			children:[
				{
					path:'/like',component:like
				}
			],
			redirect:'/like'
		},
		{
			path:'/classification',component:classification
		},
		{
			path:'/list',component:list
		},
		{
			path:'/buycart',component:buycart
		},
		{
			path:'/mytesco',component:mytesco
		},
		{
			path:'/details',component:details
		},
		{
			path:'/search',component:search
		},
		{
			path:'/login',component:login
		},
		{
			path:'/*',redirect:'/like'
		}
	]
})
