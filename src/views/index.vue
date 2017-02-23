<template>
	<div class="main">
		<top></top>
		<slider></slider>
		<wanted></wanted>
		<bottom></bottom>
	</div>
</template>

<script>
	import top from '../components/common/header'
	import slider from '../components/index/slider'
	import wanted from '../components/index/wanted'
	import bottom from '../components/common/footer'

	export default {
		name: 'app',
		components: {
			top,
			slider,
			wanted,
			bottom
		}
	}
</script>
