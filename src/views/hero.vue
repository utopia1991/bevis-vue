<style lang="less" scoped>
	@import '../assets/less/hero/hero.less';
</style>

<template>
	<div class="main">
		<top></top>
		<div class="hero">
			<h1>{{ $route.params.id }}</h1>
		</div>
		<bottom></bottom>
	</div>
</template>

<script>
	import top from '../components/common/header'
	import bottom from '../components/common/footer'

	export default {
		name: 'hero',
		components: {
			top,
			bottom
		}
	}
</script>
