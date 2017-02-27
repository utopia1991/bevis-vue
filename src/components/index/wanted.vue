<style scoped lang="less">
	@import '../../assets/less/index/indexWanted.less';
</style>

<template>
	<div class="wanted-box">
		<h2>WANTED</h2>
		<div class="wanted-captain">
			<div class="wanted-captain-box">
				<p class="pic">
					<router-link class="luffy" to="/hero/luffy"></router-link>
				</p>
				<div class="price">
					<router-link class="captain" to="/hero/luffy">{{captainName}}</router-link>
					<p class="bd">${{captainPrice}}</p>
					<p class="sale">
						<b>{{captainMethod}}</b>
					</p>
				</div>
			</div>
		</div>
		<div class="wanted-main">
			<ul>
				<li v-for="character in characters">
					<p class="pic">
						<router-link :class="character.class" :to="character.link" :style="{backgroundImage: 'url(' + character.imgUrl + ')'}"></router-link>
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
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';

	export default{
		data () {
			return {
				captainName: 'Monkey D Luffy',
				captainPrice: '500,000,000',
				captainMethod: 'DEAD OR ALIVE',
				characters: [
					{
						link: '/hero/zero',
						name: 'Zero',
						imgUrl: 'static/images/heros/zero.png',
						price: '3亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/hero/sanji',
						name: 'Sanji',
						imgUrl: 'static/images/heros/sanji.png',
						price: '1.2亿',
						method: 'ALIVE'
					},
					{
						link: '/hero/nami',
						name: 'Nami',
						imgUrl: 'static/images/heros/nami.png',
						price: '0.6亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/hero/usopp',
						name: 'Usopp',
						imgUrl: 'static/images/heros/usopp.png',
						price: '0.8亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/hero/chopper',
						name: 'Chopper',
						imgUrl: 'static/images/heros/chopper.png',
						price: '5',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/hero/robin',
						name: 'Robin',
						imgUrl: 'static/images/heros/robin.png',
						price: '1.0亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/hero/frank',
						name: 'Frank',
						imgUrl: 'static/images/heros/frank.png',
						price: '1.6亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/hero/brook',
						name: 'Brook',
						imgUrl: 'static/images/heros/brook.png',
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
