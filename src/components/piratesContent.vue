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
					<li class="item">Luffy</li>
					<li class="item">Zoro</li>
					<li class="item">Sanji</li>
					<li class="item">Nami</li>
				</ul>
			</div>
		</div>
		<div class="pirates-img">
			<img src="static/images/heros/pirates.jpg" alt="Straw Hat Pirate" />
		</div>
		<router-link to="/" class="pirates-btn">Go Back</router-link>
	</div>
</template>

<script>
	export default {
		name: 'pirates'
	}
</script>
