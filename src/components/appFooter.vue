<style lang="scss" scoped>
	@import '../assets/css/appFooter.scss';
</style>

<template>
	<div class="footer">
		<sup><s>{{favorAccountPlus}}</s></sup>
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
			<li v-for="item in items">
				<!-- v-bind:style 的对象语法直接绑定到一个样式 -->
				<a v-bind:style="{ fontSize: fontSize + 'px' }" :href="item.url" target="_blank">{{item.label}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
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
      fontSize: 22,
      items: [
        {
          url: 'https://router.vuejs.org/zh-cn/index.html',
          label: 'vue-router'
        },
        {
          url: 'http://vuex.vuejs.org/',
          label: 'vuex'
        },
        {
          url: 'http://vue-loader.vuejs.org/',
          label: 'vue-loader'
        },
        {
          url: 'https://github.com/vuejs/awesome-vue',
          label: 'awesome-vue'
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
    doSomething () {
      // ps:在vue里字符串被规定位要用单引号,且注释的时候双斜杆后面要用空格
      console.log('Bevis is a awesome man!')
    }
  }
}
</script>
