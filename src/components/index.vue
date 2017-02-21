<template>
	<div class="main">
		<top></top>
		<slider></slider>
		<wanted></wanted>
		<bottom></bottom>
	</div>
</template>

<script>
	import top from './header'
	import slider from './index/indexSlider'
	import wanted from './index/indexWanted'
	import bottom from './footer'

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
