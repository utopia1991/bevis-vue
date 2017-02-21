<template>
	<div class="main">
		<top></top>
		<slider></slider>
		<wanted></wanted>
		<sidebar></sidebar>
		<bottom></bottom>
	</div>
</template>

<script>
	import top from './header'
	import slider from './index/indexSlider'
	import wanted from './index/indexContentWanted'
	import sidebar from './index/indexSidebar'
	import bottom from './footer'

	export default {
		name: 'app',
		components: {
			top,
			slider,
			wanted,
			sidebar,
			bottom
		}
	}
</script>
