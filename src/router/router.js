import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: require('views/index') },
		{ path: '/index', redirect: '/' },
		{ path: '/pirates', component: require('views/pirates') },
		{ path: '/hero/:id', component: require('views/hero') }
	]
})
