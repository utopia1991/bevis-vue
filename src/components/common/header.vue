<!-- 使用 lang="less" 或者其他预编译直接可以使用, 添加 "scoped" 参数可以限制这个css央视只在这个模块使用 -->
<style lang="less" scoped>
	@import '../../assets/less/header.less';
</style>

<template>
	<div class="header">
		<div class="bar">
			<span class="welcome">
				<router-link to="/come">Ocean</router-link>
				<s>|</s>
				<a href="/sky">Sky</a>
			</span>
			<span class="userinfo">
				<router-link to="/about">One Piece</router-link>
				<a class="menu-link" href="https://github.com/utopia1991" target="_blank">Follow Me</a>
			</span>
		</div>
		<div class="main">
			<div class="main-center">
				<div class="logo">
					<router-link to="/" class="logo-luffy"></router-link>
				</div>
				<div class="search">
					<form>
						<input class="sea_input" type="text" name="keywords" id="keyword" value="" autocomplete="off">
						<input type="hidden" value="k1" name="dataBi">
						<button type="button" class="sea_submit" id="search">上船</button>
					</form>
					<p class="search-hot">
						热搜榜：
						<!-- 我们可以传给 v-bind:class 一个对象，以动态地切换 class。注意 v-bind:class 指令可以与普通的 class 特性共存 -->
						<!-- 双 Mustache 标签( {{}} )将数据解析为纯文本而不是 HTML。为了输出真的 HTML 字符串，需要用三 Mustache 标签： <div>{{{ raw_html }}}</div> -->
						<a v-for="good in goods" :href="good.url" target="_blank">{{good.name}}</a>
					</p>
				</div>
				<div class="intro">
					<a href="https://utopia1991.github.io/" target="_blank">{{blogName}}</a>
					<p>
						{{subTitle}}
						<span class="favor-account">+{{favorAccountPlus}}</span>
					</p>
				</div>
			</div>
		</div>
		<div class="nav">
			<router-link to="/pirates" class="nav-title">路飞海贼团</router-link>
			<ul>
				<!-- 可以传给 v-bind:class 一个对象，以动态地切换 class。注意 v-bind:class 指令可以与普通的 class 特性共存 -->
				<li v-for="tab in tabs">
					<!-- 使用 <router-link> 创建 a 标签来定义导航链接 -->
					<router-link :to="tab.url">{{tab.name}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			blogName: 'Welcome To Bevis\'s Blog',
			subTitle: 'Bevis Shen',
			favorAccount: 8888,
			goods: [
				{
					url: 'https://router.vuejs.org/zh-cn/index.html',
					name: '路飞'
				},
				{
					url: 'http://vuex.vuejs.org/',
					name: '索隆'
				},
				{
					url: 'http://vue-loader.vuejs.org/',
					name: '山治'
				},
				{
					url: 'https://github.com/vuejs/awesome-vue',
					name: '娜美'
				},
				{
					url: 'https://github.com/vuejs/awesome-vue',
					name: '乌索普'
				}
			],
			tabs: [
				{
					url: '/index',
					name: '首页'
				},
				{
					url: '/hero/luffy',
					name: '路飞'
				},
				{
					url: '/hero/zoro',
					name: '索隆'
				},
				{
					url: '/hero/sanji',
					name: '山治'
				},
				{
					url: '/hero/nami',
					name: '娜美'
				},
				{
					url: '/hero/usopp',
					name: '乌索普'
				},
				{
					url: '/hero/chopper',
					name: '乔巴'
				},
				{
					url: '/hero/robbin',
					name: '罗宾'
				},
				{
					url: '/hero/frank',
					name: '弗兰克'
				},
				{
					url: '/hero/brook',
					name: '布鲁克'
				}
			]
		}
	},
	computed: {
		// 一个计算属性的 getter
		favorAccountPlus: function () {
			// `this` 指向 vm 实例
			return this.favorAccount + 1111
		}
	},
	methods: {
		// ps:在vue里字符串被规定位要用单引号,且注释的时候双斜杆后面要用空格
	}
}
</script>
