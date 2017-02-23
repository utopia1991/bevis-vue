<style scoped lang="less">
	@import '../../assets/less/index/indexWanted.less';
</style>

<template>
	<div class="wanted-box">
		<h2>WANTED</h2>
		<div class="wanted-captain">
			<div class="wanted-captain-box">
				<p class="pic">
					<a class="luffy" href="/luffy"></a>
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
			<ul>
				<li v-for="character in characters">
					<p class="pic">
						<a :class="character.class" :href="character.link" :style="{backgroundImage: 'url(' + character.imgUrl + ')'}"></a>
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
						link: '/zero',
						name: 'Zero',
						imgUrl: 'static/images/heros/zero.png',
						price: '3亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/sanji',
						name: 'Sanji',
						imgUrl: 'static/images/heros/sanji.png',
						price: '1.2亿',
						method: 'ALIVE'
					},
					{
						link: '/nami',
						name: 'Nami',
						imgUrl: 'static/images/heros/nami.png',
						price: '0.6亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/usopp',
						name: 'Usopp',
						imgUrl: 'static/images/heros/usopp.png',
						price: '0.8亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/chopper',
						name: 'Chopper',
						imgUrl: 'static/images/heros/chopper.png',
						price: '5',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/robin',
						name: 'Robin',
						imgUrl: 'static/images/heros/robin.png',
						price: '1.0亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/frank',
						name: 'Frank',
						imgUrl: 'static/images/heros/frank.png',
						price: '1.6亿',
						method: 'DEAD OR ALIVE'
					},
					{
						link: '/brook',
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
