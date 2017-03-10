<style lang="less" scoped>
	@import '../assets/less/pirates/pirates.less';
</style>

<template>
	<div class="main">
		<div id="meteor"></div>
		<piratesContent></piratesContent>
	</div>
</template>

<script>
	require('particles.js/particles.js')
	import piratesContent from '../components/piratesContent'

	export default {
		name: 'pirates',
		components: {
			piratesContent
		},
		data() {
			return {

			}
		},
		mounted() {
			particlesJS.load('meteor', 'static/json/particles.json', () => {});
		}
	}
</script>
