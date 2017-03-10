import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: require('views/index') },
		{ path: '/index', redirect: '/' },
		{ path: '/come', component: require('views/come') },
		{ path: '/pirates', component: require('views/pirates') },
		{ path: '/about', component: require('views/about') },
		{ path: '/hero/:id', component: require('views/hero') }
	]
})
