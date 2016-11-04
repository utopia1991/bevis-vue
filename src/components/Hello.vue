<template>
	<div class="hello">
		<!-- 我们可以传给 v-bind:class 一个对象，以动态地切换 class。注意 v-bind:class 指令可以与普通的 class 特性共存 -->
		<h1 v-bind:class="{'fontBorder':isBorder}">{{msg}}</h1>
		<!-- 双 Mustache 标签( {{}} )将数据解析为纯文本而不是 HTML。为了输出真的 HTML 字符串，需要用三 Mustache 标签： <div>{{{ raw_html }}}</div> -->
		<h2 class="subTitle">{{subTitle}}</h2><sup><s>{{favorAccountPlus}}</s></sup>
		<ul>
			<!-- v-bind:function 用来给 function 绑定事件 -->
			<!-- v-if="" 条件渲染 -->
			<li><a v-if="github" v-bind:href="githubUrl" target="_blank">Github</a></li>
			<!-- v-bind:function 可以直接缩写成为 :function -->
			<li><a v-if="weibo" :href="weiboUrl" target="_blank">Weibo</a></li>
			<li><a v-if="facebook" :href="facebookUrl" target="_blank">Facebook</a></li>
			<li><a v-if="wechat" title="13023981769">Wechat</a></li>
			<li><a v-if="flicr">Flicr</a></li>
		</ul>
		<!-- v-on:function 可以直接缩写成为 @function -->
		<h2 @click="doSomething">Ecosystem</h2>
		<ul>
			<!-- v-bind:style 的对象语法直接绑定到一个样式 -->
			<li><a v-bind:style="{ fontSize: fontSize + 'px' }" href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
			<li><a v-bind:style="{ fontSize: fontSize + 'px' }" href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li><a v-bind:style="{ fontSize: fontSize + 'px' }" href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
			<li><a v-bind:style="{ fontSize: fontSize + 'px' }" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome To Bevis Vue App',
      subTitle: 'Bevis Shen',
      github: true,
      githubUrl: 'https://github.com/utopia1991',
      facebookUrl: 'https://www.facebook.com/bevis1991',
      weiboUrl: 'http://weibo.com/2619492527',
      wechat: true,
      facebook: true,
      weibo: true,
      flicr: false,
      favorAccount: 1234,
      isBorder: true,
      fontSize: 22
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
    doSomething () {
      // ps:在vue里字符串被规定位要用单引号,且注释的时候双斜杆后面要用空格
      console.log('Bevis is a awesome man!')
    }
  }
}
</script>

<!-- 使用 lang="scss" 或者其他预编译直接可以使用 -->
<!-- 添加 "scoped" 参数可以限制这个css央视只在这个模块使用 -->
<style lang="scss" scoped>
.hello {
	h1,h2 {
		font-weight: normal;
	}
	.fontBorder {
		font-weight: 500;
	}
	.subTitle {
		display: inline-block;
		cursor: default;
		&:hover {
			color: #42b983;
		}
	}
	ul {
		list-style-type: none;
		padding: 0;
		li {
			display: inline-block;
			margin: 0 10px;
			a {
				text-decoration: none;
				color: #42b983;
				&:hover {
					color: #39425b;
				}
			}
		}
	}
}
</style>
