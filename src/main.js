import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './router/routes'
import Vuex from 'Vuex'
import storeObj from './store/store'
import footer from './components/footer.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import infiniteScroll from 'vue-infinite-scroll'
import './config/rem'

Vue.component("my-footer",footer);

Vue.use(Router);
Vue.use(Vuex);
Vue.use(infiniteScroll);
Vue.use(VueAwesomeSwiper);
const router=new Router({
	routes
})
const store=new Vuex.Store(storeObj);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
