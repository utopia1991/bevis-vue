<!-- 使用 lang="less" 或者其他预编译直接可以使用, 添加 "scoped" 参数可以限制这个css央视只在这个模块使用 -->
<style lang="less" scoped>
	@import '../assets/less/header.less';
</style>

<template>
	<div class="header">
		<div class="bar">
			<span class="welcome">
				<a href="/">请登录</a>
				<s>|</s>
				<a href="/">免费注册</a>
			</span>
			<span class="userinfo">
				<a href="/">我的海贼团</a>
				<a class="menu-link" href="https://github.com/utopia1991" target="_blank">关注我吧</a>
			</span>
		</div>
		<div class="main">
			<div class="main-center">
				<div class="logo">
					<a href="" class="logo-luffy"></a>
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
						<a v-for="good in goods" v-bind:href="good.url" target="_blank">{{good.name}}</a>
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
			<a href="html/allCategory.html"	target="_blank">路飞海贼团</a>
			<ul class="sub_nav cle" id="sub_nav">
				<!-- 我们可以传给 v-bind:class 一个对象，以动态地切换 class。注意 v-bind:class 指令可以与普通的 class 特性共存 -->
				<li v-for="tab in tabs" v-bind:class="{ current:tab.isActive }">
					<a :href="tab.url">{{tab.name}}</a>
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
					isActive: true,
					name: '首页'
				},
				{
					url: '/luffy',
					name: '路飞'
				},
				{
					url: '/zero',
					name: '索隆'
				},
				{
					url: '/sanji',
					name: '山治'
				},
				{
					url: '/nami',
					name: '娜美'
				},
				{
					url: '/usopp',
					name: '乌索普'
				},
				{
					url: '/chopper',
					name: '乔巴'
				},
				{
					url: '/robin',
					name: '罗宾'
				},
				{
					url: '/frank',
					name: '弗兰克'
				},
				{
					url: '/brook',
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
