<style lang="less" scoped>
	@import '../assets/less/pirates/pirates.less';
</style>

<template>
	<div class="main">
		<div id="meteor"></div>
		<div class="pirates">
			<h1>Straw Hat Pirate</h1>
			<div class="pirates-img">
				<img src="static/images/heros/pirates.jpg" alt="Straw Hat Pirate" />
			</div>
			<router-link to="/" class="pirates-btn">Go Back</router-link>
		</div>
	</div>
</template>

<script>
	require('particles.js/particles.js')

	export default {
		name: 'hero',
		mounted() {
			particlesJS.load('meteor', 'static/json/particles.json', () => {});
		},
		data() {
			return {

			}
		}
	}
</script>
