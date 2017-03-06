<style lang="less" scoped>
	@import '../assets/less/about/about.less';
</style>

<template>
	<div class="main">
		<top></top>
			<div class="usernyeart">
				<div class="cont">
					<div class="snow">
						<span v-for="flower in flowers">
							<img :src="flower.url" :width="flower.width" :height="flower.height" alt="">
						</span>
					</div>
				</div>
			</div>
		<bottom></bottom>
	</div>

</template>

<script>
	import top from '../components/common/header'
	import bottom from '../components/common/footer'

	export default {
		components: {
			top,
			bottom
		},
		data () {
			return {
				flowers: [
					{
						url: 'static/images/flowers/flower1.png',
						width: 61,
						height: 86
					},
					{
						url: 'static/images/flowers/flower2.png',
						width: 79,
						height: 117
					},
					{
						url: 'static/images/flowers/flower4.png',
						width: 87,
						height: 116
					},
					{
						url: 'static/images/flowers/flower3.png',
						width: 85,
						height: 114
					},
					{
						url: 'static/images/flowers/flower5.png',
						width: 111,
						height: 137
					},
					{
						url: 'static/images/flowers/flower6.png',
						width: 61,
						height: 66
					},
					{
						url: 'static/images/flowers/flower7.png',
						width: 78,
						height: 109
					},
					{
						url: 'static/images/flowers/flower8.png',
						width: 56,
						height: 98
					},
					{
						url: 'static/images/flowers/flower9.png',
						width: 89,
						height: 114
					},
					{
						url: 'static/images/flowers/flower10.png',
						width: 80,
						height: 113
					},
					{
						url: 'static/images/flowers/flower2.png',
						width: 69,
						height: 98
					},
					{
						url: 'static/images/flowers/flower7.png',
						width: 69,
						height: 98
					},
				]
			}
		}
	}
</script>
