import Vue from 'vue'
import App from './App.vue'
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './assets/js/router.js'
//mint-ui
import Mint from 'mint-ui'
Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css'


//axios
import axios from 'axios'
Vue.prototype.$http=axios

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './assets/js/data.js'

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)




new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
