<style lang="less" scoped>
	@import '../assets/less/pirates/pirates.less';
</style>

<template>
	<div class="main">
		<top></top>
		<div class="pirates">
			<div class="">
				<h1>Straw Hat Pirate</h1>
			</div>
		</div>
		<bottom></bottom>
	</div>
</template>

<script>
	import top from '../components/common/header'
	import bottom from '../components/common/footer'

	export default {
		name: 'hero',
		data() {
			return {
			}
		},
		components: {
			top,
			bottom
		}
	}
</script>
