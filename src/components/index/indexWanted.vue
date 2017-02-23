<style scoped lang="less">
	@import '../../assets/less/index/indexWanted.less';
</style>

<template>
	<div class="wanted-box">
		<h2>WANTED</h2>
		<div class="wanted-captain">
			<div class="wanted-captain-box">
				<p class="pic">
					<a class="luffy"></a>
				</p>
				<div class="price">
					<p class="captain">{{captainName}}</p>
					<p class="bd">${{captainPrice}}</p>
					<p class="sale">
						<b>{{captainMethod}}</b>
					</p>
				</div>
			</div>
		</div>

		<div class="wanted-main">
			<ul class="wanted_list cle" id="wanted_list">
				<li class="show" v-for="character in characters">
					<a :href="character.link" target="_blank">
						<p class="pic">
							<img v-lazy="character.url">
						</p>
						<h3>{{character.name}}</h3>
						<p class="price">
							<span class="bd">
								<strong>${{character.price}}</strong>
							</span>
							<span class="sale">
								<b>{{character.method}}</b>
							</span>
						</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueLazyload from 'vue-lazyload';

	Vue.use(VueLazyload, {
		preLoad: 1.3,
		loading: 'static/img/loading-spin.svg',
		attempt: 10
	})

	export default{
		data () {
			return {
				captainName: 'Monkey D Luffy',
				captainPrice: '500,000,000',
				captainMethod: 'DEAD OR ALIVE',
				characters: [
					{
						link: '/zero',
						name: 'Zero',
						url: 'static/img/zero.png',
						price: '3亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/sanji',
						name: 'Sanji',
						url: 'static/img/sanji.png',
						price: '1.2亿',
						method: 'ALIVE'
					},
					{
						link: '/nami',
						name: 'Nami',
						url: 'static/img/nami.png',
						price: '0.6亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/usopp',
						name: 'Usopp',
						url: 'static/img/usopp.png',
						price: '0.8亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/chopper',
						name: 'Chopper',
						url: 'static/img/chopper.png',
						price: '5',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/robin',
						name: 'Robin',
						url: 'static/img/robin.png',
						price: '1.0亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/frank',
						name: 'Frank',
						url: 'static/img/frank.png',
						price: '1.6亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/brook',
						name: 'Brook',
						url: 'static/img/brook.png',
						price: '0.8亿',
						method: 'DEAD OR ALIVE'
					}
				]
			}
		},
		methods: {
		}
	}
</script>
