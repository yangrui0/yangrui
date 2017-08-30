import indexPage from '../page/index.vue'
import searchPage from '../page/search.vue'
import classify from '../page/classify.vue'
import contact from '../page/contact.vue'
import information from '../page/user.vue'
import ShoppingCart from '../page/Shopingcar.vue'
import address from '../page/address.vue'
import newaddress from '../page/newaddress.vue'
import setting from '../page/setting.vue'

export default [{
	path:'/',
	redirect:'/index'
},{
	path:'/index',
	component:indexPage
},{
	path:'/search',
	component:searchPage
},{
	path:'/classify',
	component:classify
},{
	path:'/contact',
	component:contact
},{
	path:'/ShoppingCart',
	component:ShoppingCart
},{
	path:'/information',
	component:information
},{
	path:'/address',
	component:address
},{
	path:'/newaddress',
	component:newaddress
},{
	path:'/setting',
	component:setting
}]