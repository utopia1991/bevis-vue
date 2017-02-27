<style lang="less" scoped>
	@import '../../assets/less/footer.less';
</style>

<template>
	<div class="footer">
		<span class="footer-back-top" @click="backTotop">
			<a class="footer-back-top-inner">
				返回顶部
			<a>
		</span>
		<div class="footer-main">
			<ul>
				<!-- v-if="" 条件渲染 -->
				<!-- v-bind:function 可以直接缩写成为 :function,  v-on:function 可以直接缩写成为 @function-->
				<li :class="luffy.imgClass">
					<a v-if="github" v-bind:href="githubUrl" target="_blank">{{luffy.name}}</a>
				</li>
				<li v-for="share in shares" :class="share.imgClass">
					<a :href="share.url">
						{{share.name}}
					</a>
				</li>
			</ul>
			<div class="footer-nav">
				<a href="" v-for="rule in rules">{{rule.name}}</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	data () {
		return {
			github: true,
			githubUrl: '',
			luffy: {
				name: 'LUFFY',
				imgClass: 'luffyLogo'
			},
			shares: [
				{
					name: 'ZERO',
					url: '',
					imgClass: 'zeroLogo'
				},
				{
					name: 'SANJI',
					url: '',
					imgClass: 'sanjiLogo'
				},
				{
					name: 'NAMI',
					url: '',
					imgClass: 'namiLogo'
				},
				{
					name: 'USOPP',
					url: '',
					imgClass: 'usoppLogo'
				},
				{
					name: 'CHOPPER',
					url: '',
					imgClass: 'chopperLogo'
				},
				{
					name: 'ROBBIN',
					url: '',
					imgClass: 'robbinLogo'
				},
				{
					name: 'FRANK',
					url: '',
					imgClass: 'frankLogo'
				},
				{
					name: 'BROOK',
					url: '',
					imgClass: 'brookLogo'
				}
			],
			rules: [
				{
					name: '克洛克达尔'
				},
				{
					name: '女帝汉库克'
				},
				{
					name: '多弗朗明哥'
				},
				{
					name: '巴索罗谬 大熊'
				},
				{
					name: '鱼人甚平'
				},
				{
					name: '小丑巴基'
				},
				{
					name: '第一剑客鹰眼'
				}
			]
		}
	},
	methods: {
    backTotop () {
      document.body.scrollTop = 0
    }
	}
}
</script>
