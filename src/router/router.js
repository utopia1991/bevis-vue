import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{ path: '/', component: require('views/index') },
		{ path: '/index', redirect: '/' },
		{ path: '/hero/:id', component: require('views/hero') }
	]
})
