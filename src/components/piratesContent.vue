<style lang="less" scoped>
	@import '../assets/less/pirates/piratesContent.less';
</style>

<template>
	<div class="pirates">
		<div class="animation-font">
			<div class="container">
				<p class="text">
					Straw Hat Pirate
				</p>
				<ul class="list">
					<li class="item" v-for="list of lists">{{list.name}}</li>
				</ul>
			</div>
		</div>
		<div class="pirates-img">
			<img :src="img.src" :alt="img.alt" />
		</div>
		<router-link to="/" class="pirates-btn">Go Back</router-link>
	</div>
</template>

<script>
	export default {
		name: 'pirates',
		data() {
			return {
				lists: [
					{
						name: 'Luffy'
					},
					{
						name: 'Zoro'
					},
					{
						name: 'Sanji'
					},
					{
						name: 'Nami'
					}
				],
				img: {
					src: 'static/images/heros/pirates.jpg',
					alt: 'Straw Hat Pirate'
				}
			}
		}
	}
</script>
