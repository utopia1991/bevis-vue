import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'app',
			component: require('views/index')
		},
		{
			path: '/luffy',
			name: 'luffy',
			component: require('views/luffy')
		}
	]
})