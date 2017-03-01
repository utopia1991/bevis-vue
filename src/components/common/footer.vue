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
					<router-link v-if="captain" :to="captainUrl">{{luffy.name}}</router-link>
				</li>
				<li v-for="share in shares" :class="share.imgClass">
					<router-link :to="share.url">
						{{share.name}}
					</router-link>
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
			captain: true,
			captainUrl: '/hero/luffy',
			luffy: {
				name: 'LUFFY',
				imgClass: 'luffyLogo'
			},
			shares: [
				{
					name: 'zoro',
					url: '/hero/zoro',
					imgClass: 'zoroLogo'
				},
				{
					name: 'SANJI',
					url: '/hero/sanji',
					imgClass: 'sanjiLogo'
				},
				{
					name: 'NAMI',
					url: '/hero/nami',
					imgClass: 'namiLogo'
				},
				{
					name: 'USOPP',
					url: '/hero/usopp',
					imgClass: 'usoppLogo'
				},
				{
					name: 'CHOPPER',
					url: '/hero/chopper',
					imgClass: 'chopperLogo'
				},
				{
					name: 'ROBBIN',
					url: '/hero/robbin',
					imgClass: 'robbinLogo'
				},
				{
					name: 'FRANK',
					url: '/hero/frank',
					imgClass: 'frankLogo'
				},
				{
					name: 'BROOK',
					url: '/hero/brook',
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
