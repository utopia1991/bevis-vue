<style lang="scss" scoped>
	@import '../assets/css/appSlider.scss';
</style>

<template>
	<div id="container">
		<swipe id="slider" :show-indicators="true" :auto="3000" :speed="1000" :no-drag="true">
			<swipe-item v-for="background in backgrounds" class="slide">
				<img v-bind:src="background.image">
			</swipe-item>
		</swipe>
	</div>
</template>

<script>
	require('vue-swipe/dist/vue-swipe.css');
	var Vue = require('vue');
	import { Swipe, SwipeItem } from 'vue-swipe';
	Vue.component('swipe', Swipe);
	Vue.component('swipe-item', SwipeItem);
	export default {
		data () {
			return {
				backgrounds: [
					{
						image: 'static/img/banner/slide_1.jpg'
					},
					{
						image: 'static/img/banner/slide_2.jpg'
					}
				]
			}
		},
		methods: {
		}
	}
</script>
